# `@tasit/contracts`

This package contains the smart contracts (and tests, etc.) from a few of the most popular dapps.

`@tasit/contracts` contains a collection of the latest smart contracts from major projects. This package could be a useful standalone utility even when used outside of the context of Tasit. Developers can use this package for testing their own libraries too.

This functionality all "lives" in `@tasit/contracts`, a child package of [`tasit`](https://github.com/tasitlabs/tasit-sdk) that is also published to npm as a standalone module using [lerna](https://lerna.js.org/).

For context, here is an [overview of how this fits in with the rest of Tasit](https://docs.tasit.io/docs/project-layout). But this can be used as a standalone, modular package if you prefer!

### 3rd-party contracts

##### Gnosis Safe
[e13a145](https://github.com/gnosis/safe-contracts/tree/e13a145485f35514e19284dbcd16df9fe2f893ca) is the commit from the `gnosis/safe-contracts` repo that this package is using.

### Developers

This package uses [Buidler](https://buidler.dev/).
