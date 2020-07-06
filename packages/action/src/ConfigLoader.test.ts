import ProviderFactory from "./ProviderFactory";
import ConfigLoader from "./ConfigLoader";
import { ethers } from "ethers";
const { providers } = ethers;
const {
  JsonRpcProvider,
  FallbackProvider,
  InfuraProvider,
  EtherscanProvider,
} = providers;

const parseNetworkNameFromEthers = (networkName) => {
  if (networkName === "unknown") return "other";
  if (networkName === "homestead") return "mainnet";
  return networkName;
};

interface Api {
  apiKey: string;
}

interface JsonRpc {
  url: string;
  port: number;
  user: any;
  password: any;
  allowInsecure: any;
}

interface Config {
  pollingInterval: any;
  provider?: string;
  network: string;
  etherscan?: Api;
  infura?: Api;
  jsonRpc?: JsonRpc;
}

const extractProviderConfig = async (provider) => {
  await provider.ready;
  const network = await provider.getNetwork();
  let { name: networkName } = network;
  const {
    pollingInterval,
    apiAccessToken: infuraApiKey,
    apiKey: etherscanApiKey,
    connection,
  } = provider;

  let config: Config = {
    network: parseNetworkNameFromEthers(networkName),
    pollingInterval,
  };

  if (provider instanceof EtherscanProvider) {
    config = {
      ...config,
      provider: "etherscan",
      etherscan: { apiKey: etherscanApiKey },
    };
  } else if (provider instanceof InfuraProvider) {
    config = {
      ...config,
      provider: "infura",
      infura: { apiKey: infuraApiKey },
    };
  } else if (provider instanceof JsonRpcProvider) {
    const { url, user, password, allowInsecure } = connection;
    const { protocol, hostname, port } = new URL(url);
    const jsonRpc = {
      url: `${protocol}//${hostname}`,
      port: Number(port),
      user,
      password,
      allowInsecure,
    };
    config = { ...config, provider: "jsonrpc", jsonRpc };
  } else if (provider instanceof FallbackProvider) {
    config = { ...config, provider: "fallback" };
  } else {
    throw new Error(
      "Supported provider types: [EtherscanProvider, InfuraProvider, JsonRpcProvider, FallbackProvider]"
    );
  }
  return config;
};

const fulfillConfigWithDefaults = (config) => {
  let { provider } = config;
  let { jsonRpc, provider: providerType, infura, etherscan } = provider;

  if (providerType === "etherscan") {
    if (!etherscan) etherscan = { apiKey: null };
    else {
      const { apiKey } = etherscan;
      etherscan = { ...etherscan, apiKey };
    }

    provider = { ...provider, etherscan };
  } else if (providerType === "infura") {
    if (!infura) infura = { apiKey: null };
    else {
      const { apiKey } = infura;
      infura = { ...infura, apiKey };
    }

    provider = { ...provider, infura };
  } else if (providerType === "jsonrpc") {
    const { user, password, allowInsecure } = jsonRpc;
    jsonRpc = { ...jsonRpc, user, password };

    if (allowInsecure === undefined)
      jsonRpc = { ...jsonRpc, allowInsecure: false };

    provider = { ...provider, jsonRpc };
  }

  config = { ...config, provider };
  return config;
};

const checkConfig = async (config) => {
  const userConfig = fulfillConfigWithDefaults(config);

  ConfigLoader.setConfig(config);
  const provider = ProviderFactory.getProvider();
  const providerConfig = await extractProviderConfig(provider);
  const eventsConfig = ConfigLoader.getConfig().events;
  const loadedConfig = {
    provider: providerConfig,
    events: eventsConfig,
  };

  expect(userConfig).toEqual(loadedConfig);
};

describe("TasitAction.ConfigLoader", () => {
  let defaultConfig;

  // store default config
  beforeEach(() => {
    defaultConfig = ConfigLoader.getDefaultConfig();
  });

  // back to default config
  afterEach(() => {
    ConfigLoader.setConfig(defaultConfig);
  });

  it(
    "should setup a provider connected to a local node using JsonRPC",
    async () => {
      const config = {
        provider: {
          network: "other",
          provider: "jsonrpc",
          pollingInterval: 50,
          jsonRpc: {
            url: "http://localhost",
            port: 8545,
          },
        },
        events: {
          timeout: 2000,
        },
      };

      await checkConfig(config);
    }
  );

  it(
    "should setup a provider connected to the rinkeby testnet using Fallback",
    async () => {
      const config = {
        provider: {
          network: "rinkeby",
          provider: "fallback",
          pollingInterval: 4000,
        },
        events: {
          timeout: 2000,
        },
      };

      await checkConfig(config);
    }
  );

  describe("should setup a provider connected to the ropsten testnet using Infura", async () => {
    it("without apiKey", async () => {
      const config = {
        provider: {
          network: "ropsten",
          provider: "infura",
          pollingInterval: 4000,
        },
        events: {
          timeout: 2000,
        },
      };

      await checkConfig(config);
    });

    it("with apiKey", async () => {
      const config = {
        provider: {
          network: "ropsten",
          provider: "infura",
          pollingInterval: 4000,
          infura: {
            apiKey: "INFURA_API_KEY",
          },
        },

        events: {
          timeout: 2000,
        },
      };

      await checkConfig(config);
    });
  });

  describe("should setup a provider connected to the mainnet using Etherscan", async () => {
    it("without apiKey", async () => {
      const config = {
        provider: {
          network: "mainnet",
          provider: "etherscan",
          pollingInterval: 4000,
        },
        events: {
          timeout: 2000,
        },
      };

      await checkConfig(config);
    });

    it("with apiKey", async () => {
      const config = {
        provider: {
          network: "mainnet",
          provider: "etherscan",
          pollingInterval: 4000,
          etherscan: {
            apiKey: "ETHERSCAN_API_KEY",
          },
        },
        events: {
          timeout: 2000,
        },
      };

      await checkConfig(config);
    });

    it(
      "should setup a provider connected to the goerli testnet using Fallback",
      async () => {
        const config = {
          provider: {
            network: "goerli",
            provider: "fallback",
            pollingInterval: 4000,
          },
          events: {
            timeout: 2000,
          },
        };

        await checkConfig(config);
      }
    );
  });
});
