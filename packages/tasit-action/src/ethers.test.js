import { ethers } from "ethers";
ethers.errors.setLogLevel("error");
import TasitContracts from "tasit-contracts";
const { local: localContracts } = TasitContracts;
const { SampleContract } = localContracts;
const {
  abi: sampleContractABI,
  address: SAMPLE_CONTRACT_ADDRESS,
} = SampleContract;

let wallet;
let sampleContract;

describe("ethers.js", () => {
  beforeEach("instantiate provider, wallet and contract objects", async () => {
    [wallet] = accounts;
    wallet = wallet.connect(provider);
    expect(wallet.address).to.have.lengthOf(42);
    expect(wallet.provider).to.be.not.undefined;

    sampleContract = new ethers.Contract(
      SAMPLE_CONTRACT_ADDRESS,
      sampleContractABI,
      wallet
    );
    expect(sampleContract.address).to.equal(SAMPLE_CONTRACT_ADDRESS);
  });

  it("should instatiate contract object using human-readable ABI", async () => {
    const humanReadableABI = [
      "event ValueChanged(address indexed author, string oldValue, string newValue)",
      "constructor(string memory) public",
      "function getValue() public view returns (string memory)",
      "function setValue(string memory) public",
    ];

    sampleContract = undefined;
    sampleContract = new ethers.Contract(
      SAMPLE_CONTRACT_ADDRESS,
      humanReadableABI,
      wallet
    );
    expect(sampleContract.interface.functions.getValue).to.exist;
    expect(sampleContract.interface.functions.setValue).to.exist;
    expect(sampleContract.interface.events.ValueChanged).to.exist;
  });

  it("should get contract's value", async () => {
    const value = await sampleContract.getValue();
    expect(value).to.exist;
    expect(value).to.be.a("string");
  });

  it("should set contract's value", async () => {
    var rand = Math.floor(Math.random() * Math.floor(1000)).toString();

    const sentTx = await sampleContract.setValue(rand);
    await provider.waitForTransaction(sentTx.hash);

    const value = await sampleContract.getValue();

    expect(value).to.equal(rand);
  });

  it("should watch contract's ValueChanged event", async () => {
    const eventFakeFn = sinon.fake();

    const oldValue = await sampleContract.getValue();
    const newValue = `I like cats`;

    const listener = event => {
      const {
        author: eventAuthor,
        oldValue: eventOldValue,
        newValue: eventNewValue,
      } = event.args;

      expect([eventAuthor, eventOldValue, eventNewValue]).to.deep.equal([
        wallet.address,
        oldValue,
        newValue,
      ]);

      event.removeListener();

      eventFakeFn();
    };

    const sentTx = await sampleContract.setValue(newValue);

    await waitForEthersEvent(sampleContract, "ValueChanged", listener);

    expect(eventFakeFn.called).to.be.true;
    expect(sampleContract.listenerCount("ValueChanged")).to.equal(0);
    expect(sampleContract.provider._events).to.be.empty;
  });

  it("should remove listener using removeAllListeners function", async () => {
    const eventFakeFn = sinon.fake();

    const listener = () => {
      eventFakeFn();
    };

    const sentTx = await sampleContract.setValue("hello world");

    await waitForEthersEvent(sampleContract, "ValueChanged", listener);

    sampleContract.removeAllListeners("ValueChanged");

    expect(eventFakeFn.called).to.be.true;
    expect(sampleContract.listenerCount("ValueChanged")).to.equal(0);
    expect(sampleContract.provider._events).to.be.empty;
  });

  describe("message signing", () => {
    const rand = Math.floor(Math.random() * Math.floor(1000)).toString();
    let rawTx;
    let signedTx;

    beforeEach("", async () => {
      const data = sampleContract.interface.functions.setValue.encode([rand]);

      rawTx = {
        gasLimit: 64000,
        to: sampleContract.address,
        data: data,
        nonce: await provider.getTransactionCount(wallet.address),
      };
    });

    it("should sign set contract's value tx", async () => {
      signedTx = await wallet.sign(rawTx);
      expect(signedTx).to.exist;
    });

    it("should set contract's value using signed tx", async () => {
      const sentTx = await provider.sendTransaction(signedTx);

      await provider.waitForTransaction(sentTx.hash);

      const value = await sampleContract.getValue();
      expect(value).to.equal(rand);
    });
  });

  // Note: ethers.js doesn't support function overloading and it only exposes
  // one of the functions with the same name (first of ABI), the other functions should be called as below.
  // Note that this is different behavior from web3.js
  // See more: packages/tasit-contracts/test/SampleContract.js
  // and https://github.com/ethers-io/ethers.js/issues/407
  it("should call overloading functions - ethers", async function() {
    const f1 = await sampleContract["overloading()"]();
    const f2 = await sampleContract["overloading(string)"]("a");
    const f3 = await sampleContract["overloading(string,string)"]("a", "b");

    expect(f1.toNumber()).to.equal(1);
    expect(f2.toNumber()).to.equal(2);
    expect(f3.toNumber()).to.equal(3);
  });
});
