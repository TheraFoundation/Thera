import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import Thera from "./contracts/Thera.json";
import TheraSeed from "./contracts/TheraSeed.json";
import TheraMarket from "./contracts/TheraMarket.json";
console.log(TheraSeed);

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, Thera, TheraSeed, TheraMarket],
  events: {
    SimpleStorage: ["StorageSet"], 
    TheraSeed: ["TokensPurchased"],
  },
};

export default options;