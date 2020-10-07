require("dotenv").config();
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");


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
        new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/fd39f71cc4d14deb8e341de44eb13245",
            0, 1, true, "m/44'/1'/0'/0/"
        ),
      network_id: '1',
    },
    mainnetFork: {
      // must be a thunk, otherwise truffle commands may hang in CI
      url: "https://sandbox.truffleteams.com/c4567ffb-8aa7-4c08-8f52-7f29fdd57b78",
      network_id: '1',
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/fd39f71cc4d14deb8e341de44eb13245",
            0, 1, true, "m/44'/60'/0'/0/"
        ),
      network_id: '3',
    },
  }
};