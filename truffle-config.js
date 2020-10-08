require("dotenv").config();
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

console.log(process.env);


let mnemonic = process.env.MNEMONIC;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app-front/src/contracts"),
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY,
        ),
      network_id: '1',
    },
    mainnetFork: {
      // must be a thunk, otherwise truffle commands may hang in CI
      url: "https://sandbox.truffleteams.com/eb7fdd7f-6a9c-42a0-8068-b7a3847024e9",
      network_id: '1',
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY,
            0, 1, true, "m/44'/60'/0'/0/"
        ),
      network_id: '3',
    },
  }
};