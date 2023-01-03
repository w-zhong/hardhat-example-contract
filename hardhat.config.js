require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");
require("./tasks/accounts");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.RPC_URL_GOERLI,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.5",
      },
      {
        version: "0.8.17",
        settings: {},
      },
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 17,
    enabled: process.env.REPORT_GAS ? true : false,
  },
  coinmarketcap: {
    apiKey: process.env.CMC_API_KEY,
  },
};
