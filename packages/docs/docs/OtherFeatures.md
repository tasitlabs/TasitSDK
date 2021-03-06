---
id: other-features
title: Other features
sidebar_label: Other features
---

- [Onboarding](#onboarding)
  - [Fiat onramps](#fiat-onramps)
- [Ongoing UX](#ongoing-ux)
  - [The Graph](#the-graph)
  - [ENS](#ens)
  - [Meta-transactions](#meta-transactions)
- [Mobile features](#mobile-features)
  - [Push notifications](#push-notifications)
  - [Biometric auth](#biometric-auth)
  - [Deep linking](#deep-linking)
- [Advanced features](#advanced-features)
  - [For users that do have funds](#for-users-that-do-have-funds)
- [DevEx](#devex)
  - [Support for popular ERC standards](#support-for-popular-erc-standards)
  - [Configurable JSON-RPC client](#configurable-json-rpc-client)
- [Future features](#future-features)
  - [Eth 2.0 support](#eth-20-support)
  - [L2 support](#l2-support)
  - [Automatic scaffolding using the Tasit CLI](#automatic-scaffolding-using-the-tasit-cli)
  - [A library of native mobile dapp components](#a-library-of-native-mobile-dapp-components)

## Onboarding

### Fiat onramps
Simple integration of fiat onramps that let users use Apple Pay and Google pay

## Ongoing UX

### The Graph

```ts
const action = contract.safeTransferfrom(/*...*/);
action.on("error", errorListener);
action.on("presentInTheGraph", successListener);
action.send(); // broadcast
// ...
```

_(And of course more standard things like querying for a lot of indexed events)_

### ENS

**Sending**

somebodyelse.eth

_(ethers.js under the hood)_

**Receiving**

paul.uniswap.eth
paul.gitcoin.eth
paul.tasit.eth

### Meta-transactions

```ts
const action = contract.myFavoriteMethod(/*...*/);
action.on("error", errorListener);
action.on("enoughConfirmations", successListener);
action.sendForFree(); // meta-tx broadcast

// ...
```

The approach with meta-transactions is that the user's account is only used to sign messages, and then as a developer you can use your preferred centralized or decentralized solution to relay that as an Ethereum tx and pay and/or be rewarded as each solution sees fit.

## Mobile features

### Push notifications

### Biometric auth

### Deep linking

## Advanced features

### For users that do have funds

Connects with your preferred mobile Ethereum wallet. Using ERC20+721 approvals or [WalletConnect](https://walletconnect.org/).

Users can continue to keep their funds in a proper wallet with better security guarantees if they do already have ETH, tokens, etc. and use them with this dapp.

A user flow where a dapp's ephemeral account requests an approval for X ERC20 tokens of type A or one ERC721 token of type B is supported in the SDK.

Through compatibility with WalletConnect, any standalone dapp can be authorized to take actions in a way that has only been possible in wallet apps to date. The wallet might be the Gnosis Safe personal edition, Status, Coinbase Wallet, Argent, etc.

For more info, see [`@tasit/link-wallet`](https://github.com/tasitlabs/tasit-sdk/tree/develop/packages/link-wallet/).

## DevEx

### Support for popular ERC standards

One class of smart contracts we support is [NFTs](http://erc721.org/). There’s an ERC-standard-specific JavaScript/TypeScript API wrapping the lower-level Tasit API for reading and writing and listening for data so that the function-names in Tasit are tailored to that type of dapp. As long as we’ve built the tooling to interact with that class of dapp at least once before, Tasit can “automagically” support any new dapp of that type.

We also track the latest ABI and interface address for the most well-known dapp projects directly via their open-source GitHub repos.

For more info, see [`@tasit/contracts`](https://github.com/tasitlabs/tasit-sdk/tree/develop/packages/contracts/).

_This makes it simpler to customize the autogenerated app for a certain ERC standard and swap it to use with your own smart contracts or the already-on-chain smart contracts for a different dapp of that same ERC-type. This also means there’s a network effect for Tasit, so once we have a few apps using it, it will be much faster to make new apps with it._

### Configurable JSON-RPC client

We realize that different developers have different takes on whether it's an acceptable compromise to use Infura in the way that MetaMask does in the browser or whether a local Ethereum light client is warranted more like in the original version of Status or Augur. We anticipate that in the short term, almost all developers using this SDK will use Infura. It's a good stopgap solution for now.

We leave the JSON-RPC provider configurable so that the SDK doesn't take an opinionated stance on this.

There are a couple projects working to make it simple to spin up your own high-availability, high-performance JSON-RPC client(s) (including Infura) or to use a decentralized and incentivized network of full nodes, so that should decentralize things a bit until we get to Eth 2.0. See [DAppNode](https://dappnode.io/), [denode](https://github.com/ChainSafeSystems/denode), [Vipnode](https://vipnode.org/), and [Incubed](https://slock.it/incubed.html) by slock.it.

[`@tasit/action` is the child package](https://github.com/tasitlabs/tasit-sdk/tree/develop/packages/action/) that implements these features for Tasit.

## Future features

We have no plans until Eth 2.0 to make a special abstraction for running a local light geth node like Status did originally. Tasit works with whatever JSON-RPC client you point it at, but we won't be adding an abstraction for using a light client within the native mobile dapp until Eth 2.0. People have had too many issues with this on mobile: dropped network connections, using all disk space, battery usage, etc.

Looking towards the future, light and ultralight client projects we're tracking for first-class support in this SDK include:

- [Nimbus](https://nimbus.status.im/) by Status
- [Mustekala](https://www.musteka.la/) by MetaMask
- [LightJS](https://github.com/paritytech/js-libs/tree/master/packages/light.js) by Parity

### Eth 2.0 support

Tasit will work with the Ethereum 2.0 release. We support Ethereum-based dapps to start, and in the long run Tasit will work with any blockchain that uses EVM and/or eWASM.

_In order for Tasit to make a difference for current and future users of Ethereum, it will need to support future versions of the EVM._

### L2 support

We're keeping an eye on various zk rollup projects and optimistic rollup projects like the OVM by [Optimism](https://optimism.io/).

### Automatic scaffolding using the Tasit CLI

Are you starting a project from scratch? Let the Tasit CLI scaffold out your project for you.

The Decentraland app generated using `tasit init --nft` ship with styled-but-customizable React Native components for using each feature of the dapp, leveraging the js middleware.

_This also makes the experience for new developers working on a mobile app with Tasit simpler, which also means more mobile dapps for end users._

### A library of native mobile dapp components

---

[Go back](Introduction.md) to the home page of the docs.
