import TasitAction from "tasit-action";
const { Action, Contract, ERC20, ERC721 } = TasitAction;
const { ERC20Detailed } = ERC20;
const { ERC721Full } = ERC721;
import GnosisSafeUtils from "./GnosisSafeUtils";
import ActionUtils from "tasit-action/dist/contract/Utils.js";
import TasitContracts from "tasit-contracts";
const { local } = TasitContracts;
const { GnosisSafe: GnosisSafeInfo, MyERC20Full, MyERC721Full } = local;
const { abi: gnosisSafeABI } = GnosisSafeInfo;
const { abi: erc20ABI } = MyERC20Full;
const { abi: erc721ABI } = MyERC721Full;

// TODO: Go deep on gas handling.
// Without that, VM returns a revert error instead of out of gas error.
// See: https://github.com/tasitlabs/TasitSDK/issues/173
const gasParams = {
  gasLimit: 7e6,
  gasPrice: 1e9,
};

// Possible Gnosis Safe wallet operations
const operations = {
  CALL: 0,
  DELEGATE_CALL: 1,
  CREATE: 2,
};

const { CALL } = operations;

const areValidSigners = signers => {
  const { isEthersJsSigner: isSigner } = ActionUtils;
  const { isArray } = Array;

  if (!isArray(signers)) return false;

  const allAreValid = !signers.map(isSigner).includes(false);

  if (!allAreValid) return false;

  return true;
};

// Extended Gnosis Safe wallet contract with higher-level functions
export default class GnosisSafe extends Contract {
  #utils;
  #signers;

  constructor(address, wallet) {
    const abi = gnosisSafeABI;
    super(address, abi, wallet);
    this.#utils = new GnosisSafeUtils(this);
  }

  setSigners = signers => {
    if (!areValidSigners(signers))
      throw new Error(
        `Cannot set invalid signers for the Gnosis Safe contract.`
      );

    this.#signers = signers;
  };

  approveERC20 = (tokenAddress, spender, value) => {
    const data = this.#utils.encodeFunctionCall(erc20ABI, "approve", [
      spender,
      value,
    ]);
    const etherValue = "0";
    const action = this.#executeTransaction(data, tokenAddress, etherValue);
    return action;
  };

  transferERC20 = (tokenAddress, toAddress, value) => {
    const data = this.#utils.encodeFunctionCall(erc20ABI, "transfer", [
      toAddress,
      value,
    ]);
    const etherValue = "0";
    const action = this.#executeTransaction(data, tokenAddress, etherValue);
    return action;
  };

  transferNFT = (tokenAddress, toAddress, tokenId) => {
    const fromAddress = this.getAddress();
    const data = this.#utils.encodeFunctionCall(erc721ABI, "safeTransferFrom", [
      fromAddress,
      toAddress,
      tokenId,
    ]);
    const etherValue = "0";
    const action = this.#executeTransaction(data, tokenAddress, etherValue);
    return action;
  };

  transferEther = (toAddress, value) => {
    const data = "0x";
    const etherValue = value;
    const action = this.#executeTransaction(data, toAddress, etherValue);
    return action;
  };

  addSignerWithThreshold = (newSignerAddress, newThreshold) => {
    const data = this.#utils.encodeFunctionCall(
      this.getABI(),
      "addOwnerWithThreshold",
      [newSignerAddress, newThreshold]
    );
    const to = this.getAddress();
    const etherValue = "0";
    const action = this.#executeTransaction(data, to, etherValue);
    return action;
  };

  #executeTransaction = (data, toAddress, etherValue) => {
    const tx = this.#prepareTransaction(data, toAddress, etherValue);
    const provider = this._getProvider();
    const action = new Action(tx, provider);
    return action;
  };

  #prepareTransaction = async (data, toAddress, etherValue) => {
    const signers = this.#signers;

    if (!signers)
      throw new Error(
        `Cannot send an action to Gnosis Safe contract without signers.`
      );

    const to = toAddress;

    const operation = CALL;

    // Gas that should be used for the Safe transaction.
    const safeTxGas = await this.#utils.estimateFromSafeTxGas(
      to,
      etherValue,
      data,
      operation
    );

    // Gas price that should be used for the payment calculation.
    // Note: If no safeTxGas has been set and the gasPrice is 0 we assume that all available gas can be used (refs GnosisSafe.sol:94)
    const gasPrice = 0;

    // Token address (or 0 if ETH) that is used for the payment.
    const gasToken = "0x0000000000000000000000000000000000000000";

    // Address of receiver of gas payment (or 0 if tx.origin)
    const refundReceiver = "0x0000000000000000000000000000000000000000";

    // Gas costs for data used to trigger the safe transaction and to pay for transferring a payment
    const { length: signersCount } = signers;
    const dataGas = this.#utils.estimateDataGas(
      this,
      to,
      etherValue,
      data,
      operation,
      safeTxGas,
      gasToken,
      refundReceiver,
      signersCount
    );

    const nonce = await this.nonce();

    const transactionHash = await this.getTransactionHash(
      to,
      etherValue,
      data,
      operation,
      safeTxGas,
      dataGas,
      gasPrice,
      gasToken,
      refundReceiver,
      nonce
    );

    const signatures = this.#utils.multiSign(signers, transactionHash);

    const execTxAction = this.execTransaction(
      to,
      etherValue,
      data,
      operation,
      safeTxGas,
      dataGas,
      gasPrice,
      gasToken,
      refundReceiver,
      signatures,
      gasParams
    );

    return execTxAction.getTransaction();
  };
}