// @ts-ignore semantic error TS6307
import gnosisSafeABI from "../artifacts/GnosisSafe.json";

// @ts-ignore semantic error TS6307
import myERC20ABI from "../artifacts/MyERC20.json";
// @ts-ignore semantic error TS6307
import myERC721ABI from "../artifacts/MyERC721.json";

// @ts-ignore semantic error TS6307
import sampleContractABI from "../artifacts/SampleContract.json";

// TODO: Debug this rollup error:
// Error: Could not resolve '../typechain/SampleContract' from src/TasitContracts.ts
// import { SampleContract } from "../typechain/SampleContract";
// import { GnosisSafe } from "../typechain/GnosisSafe";
// import { MyErc20 } from "../typechain/MyErc20";
// import { MyErc721 } from "../typechain/MyErc721";

// TODO: Decide whether we want to export instantiated contracts as well
// We do, that way the typings will pass through more naturally
// Hmm, but that won't work if we want to still use a new ERC20() here.
// Maybe rather than having Contract handle that in @tasit/action contract dir
// We make a function available that exposes ethers contract instantiation
// as a function with one arg pre-filled

// Note: Under the current `@tasit/contracts` setup the contracts always will deployed with these addresses
// See https://github.com/tasitlabs/tasit-sdk/issues/138
const local = {
  SampleContract: {
    address: "0x5e1cEBbbF763093e900c280dBe688363d98c660B",
    abi: sampleContractABI.abi,
    // type: SampleContract
  },
  MyERC721: {
    address: "0xd3A840fDfecE8C7Eb38FE900D588584D4da92785",
    abi: myERC721ABI.abi,
    // type: MyErc721
  },
  MyERC20: {
    address: "0xd9D3960AbD6681c85cE3f6fE502F7C0d86343C6E",
    abi: myERC20ABI.abi,
    // type: MyErc20
  },
  GnosisSafe: {
    address: "0x788BAFE1c0Fc303213B8a954dE9EF07C2420Bf64",
    abi: gnosisSafeABI.abi,
    // type: GnosisSafe
  },
};

const goerli = {};

const ropsten = {
  GnosisSafe: {
    address: "0xdF1108C839686f28b5010a1784a07262aA447722",
    abi: gnosisSafeABI.abi,
    // type: GnosisSafe
  },
};

const rinkebyDeployedByDevMetaMask = {
  GnosisSafe: {
    address: "0xc8FB1F400D4718c022d5aA8c7eDf8A3A685cf3E2",
    abi: gnosisSafeABI.abi,
    // type: GnosisSafe
  },
};

const rinkeby = {
  GnosisSafe: {
    address: "0x366dd6FdB8EA347A186e251e39bE1f12eF11cc8A",
    abi: gnosisSafeABI.abi,
    // type: GnosisSafe
  },
};

export const Contracts = {
  local,
  goerli,
  ropsten,
  rinkeby,
  rinkebyDeployedByDevMetaMask,
};

export default Contracts;
