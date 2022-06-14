const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
      gas: 8721974,
      websockets: true,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_RPC_URL),
      network_id: "4",
      skipDryRun: true,
      networkCheckTimeout: 10000,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.MAINNET_RPC_URL),
      network_id: "1",
      skipDryRun: true,
    },
    test_local: {
      host: "blockchain-node",
      port: 8545,
      network_id: "1337", // Match any network id
      gas: 6721975,
    },
    fuji: {
      provider: function () {
        return new HDWalletProvider(
          process.env.FUJI_MNEMONIC,
          process.env.FUJI_MAINNET_RPC_URL
        );
      },
      from: process.env.FUJI_CONTRACT_OWNER_ADDRESS,
      network_id: "*",
      gas: 3000000,
      gasPrice: 470000000000,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
      version: "0.8.3",
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  plugins: ["truffle-plugin-verify"],
};
