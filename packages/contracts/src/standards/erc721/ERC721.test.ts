import ERC721 from "./ERC721";
import TasitContracts from "tasit-contracts";
import ProviderFactory from "../ProviderFactory";
import {
  accounts,
  mineBlocks,
  expectExactTokenBalances,
} from "../testHelpers/helpers";

const { local: localContracts } = TasitContracts;
const { MyERC721, SampleContract } = localContracts;
const { address: ERC721_ADDRESS } = MyERC721;
const { address: SAMPLE_CONTRACT_ADDRESS } = SampleContract;
const provider = ProviderFactory.getProvider();

describe("TasitAction.ERC721.ERC721", () => {
  let owner;
  let ana;
  let bob;
  let erc721;

  let action;

  before("", async () => {
    [owner, ana, bob] = accounts;
  });

  beforeEach("", async () => {
    action = undefined;

    erc721 = new ERC721(ERC721_ADDRESS, owner);

    expect(erc721).to.exist;
    expect(erc721.getAddress()).to.equal(ERC721_ADDRESS);
    expect(erc721.name).to.exist;
    expect(erc721.symbol).to.exist;
    expect(erc721._getProvider()).to.exist;

    // This line ensures that a new event listener does not catch an existing event from last the block
    // Two blocks to minimize the risk that polling doesn't occur.
    await mineBlocks(provider, 2);

    await expectExactTokenBalances(
      erc721,
      [owner.address, ana.address, bob.address],
      [0, 0, 0]
    );
  });

  afterEach("", async () => {
    // This line ensures that a new event listener does not catch an existing event from last the block
    // Two blocks to minimize the risk that polling doesn't occur.
    await mineBlocks(provider, 2);

    expect(provider._events, "ethers should not be listening to any events.")
      .to.be.empty;

    if (erc721) {
      erc721.unsubscribe();

      expect(erc721.subscribedEventNames()).to.be.empty;

      expect(
        erc721.getEmitter()._events,
        "ethers should not be listening to any events."
      ).to.be.empty;
    }

    if (action) {
      await action.waitForOneConfirmation();
      action.unsubscribe();

      expect(action.subscribedEventNames()).to.be.empty;

      expect(
        action.getEmitter()._events,
        "ethers should not be listening to any events."
      ).to.be.empty;
    }

    if (erc721) {
      erc721.unsubscribe();

      expect(erc721.subscribedEventNames()).to.be.empty;

      expect(
        erc721.getEmitter()._events,
        "ethers should not be listening to any events."
      ).to.be.empty;
    }
  });

  describe("should throw error when instantiated with invalid args", () => {
    it("constructor without address", async () => {
      expect(() => {
        new ERC721();
      }).to.throw();
    });

    it("constructor with invalid address", async () => {
      expect(() => {
        new ERC721("invalid address");
      }).to.throw();
    });
  });

  it("should call a read-only contract method", async () => {
    const name = await erc721.name();
    expect(name).to.exist;
    expect(name).to.equal("ERC721");
  });

  describe("ERC721 functions", () => {
    const tokenId = 1;
    const zeroAddress = "0x0000000000000000000000000000000000000000";

    beforeEach("should mint one token to ana", async () => {
      action = erc721.mint(ana.address, tokenId);
      await action.send();

      const event = await new Promise(function(resolve, reject) {
        erc721.on("Transfer", message => {
          const { data } = message;
          const { args } = data;
          resolve(args);
        });

        setTimeout(() => {
          reject(new Error("timeout"));
        }, 2000);
      });

      erc721.off("Transfer");

      expect(event.from).to.equal(zeroAddress);
      expect(event.to).to.equal(ana.address);
      expect(event.tokenId.eq(tokenId)).to.be.true;

      await expectExactTokenBalances(erc721, [ana.address], [1]);
    });

    it("should transfer an owned token", async () => {
      erc721 = new ERC721(ERC721_ADDRESS, ana);

      const transferListener = sinon.fake(message => {
        const { data } = message;
        const { args } = data;

        expect(args.from).to.equal(ana.address);
        expect(args.to).to.equal(bob.address);
        expect(args.tokenId.toNumber()).to.equal(tokenId);
      });

      const errorListener = sinon.fake();

      erc721.on("error", errorListener);
      erc721.on("Transfer", transferListener);

      action = erc721.transferFrom(ana.address, bob.address, tokenId);

      await action.send();
      await action.waitForOneConfirmation();

      await mineBlocks(provider, 2);

      expect(errorListener.called).to.be.false;

      await expectExactTokenBalances(
        erc721,
        [ana.address, bob.address],
        [0, 1]
      );
    });

    it("should transfer an approved token", async () => {
      erc721 = new ERC721(ERC721_ADDRESS, ana);

      action = erc721.approve(bob.address, tokenId);
      await action.send();

      await action.waitForOneConfirmation();

      erc721.setAccount(bob);
      action = erc721.transferFrom(ana.address, bob.address, tokenId);
      await action.send();

      await action.waitForOneConfirmation();

      await expectExactTokenBalances(erc721, [bob.address], [1]);
    });

    it("should transfer an owned token using safeTransferFrom", async () => {
      erc721 = new ERC721(ERC721_ADDRESS, ana);

      action = erc721.safeTransferFrom(ana.address, bob.address, tokenId);
      await action.send();

      await action.waitForOneConfirmation();

      await expectExactTokenBalances(
        erc721,
        [ana.address, bob.address],
        [0, 1]
      );
    });

    it("should trigger an error if the user is listening for errors from a contract and tries safeTransferFrom to a contract without onERC721Received", async () => {
      const contractErrorFakeFn = sinon.fake();

      erc721 = new ERC721(ERC721_ADDRESS, ana);

      const contractErrorListener = error => {
        const { message } = error;
        expect(message).to.equal("Action failed.");
        contractErrorFakeFn();
      };

      erc721.on("error", contractErrorListener);

      action = erc721.safeTransferFrom(
        ana.address,
        SAMPLE_CONTRACT_ADDRESS,
        tokenId
      );
      await action.send();

      // Some error (orphan block, failed tx) events are being triggered only from the confirmationListener
      // See more: https://github.com/tasitlabs/tasit-sdk/issues/253
      action.on("confirmation", () => {});

      await action.waitForOneConfirmation();

      await mineBlocks(provider, 2);

      expect(contractErrorFakeFn.called).to.be.true;

      await expectExactTokenBalances(
        erc721,
        [ana.address, SAMPLE_CONTRACT_ADDRESS],
        [1, 0]
      );
    });

    it("should trigger an error if the user is listening for errors for an action and tries safeTransferFrom to a contract without onERC721Received", async () => {
      const actionErrorFakeFn = sinon.fake();

      erc721 = new ERC721(ERC721_ADDRESS, ana);

      const actionErrorListener = error => {
        const { message } = error;
        expect(message).to.equal("Action failed.");
        actionErrorFakeFn();
      };

      action = erc721.safeTransferFrom(
        ana.address,
        SAMPLE_CONTRACT_ADDRESS,
        tokenId
      );
      action.on("error", actionErrorListener);

      // Some error (orphan block, failed tx) events are being triggered only from the confirmationListener
      // See more: https://github.com/tasitlabs/tasit-sdk/issues/253
      action.on("confirmation", () => {});

      await action.send();

      await action.waitForOneConfirmation();

      await mineBlocks(provider, 1);

      expect(actionErrorFakeFn.called).to.be.true;

      await expectExactTokenBalances(
        erc721,
        [ana.address, SAMPLE_CONTRACT_ADDRESS],
        [1, 0]
      );
    });
  });
});
