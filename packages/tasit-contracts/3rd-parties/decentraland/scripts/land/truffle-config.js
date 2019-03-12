require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env.MNEMONIC;
const token = process.env.INFURA_TOKEN;

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 70000000,
      network_id: "*",
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://goerli.infura.io/v3/" + token
        );
      },
      network_id: "5",
      gasPrice: 10000000000, // 10 Gwei (https://stats.goerli.net/)
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + token
        );
      },
      network_id: 3,
    },
  },
};
