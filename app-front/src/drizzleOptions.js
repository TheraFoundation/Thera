import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import Thera from "./contracts/Thera.json";
import TheraSeed from "./contracts/TheraSeed.json";
import TheraMarket from "./contracts/TheraMarket.json";
import TheraLaw from "./contracts/TheraLaw.json";
import TheraDev from "./contracts/TheraDev.json";
import TheraTech from "./contracts/TheraTech.json";
import TheraConstruction from "./contracts/TheraConstruction.json";
import TheraEconomy from "./contracts/TheraEconomy.json";
import TheraArt from "./contracts/TheraArt.json";
import TheraEnergy from "./contracts/TheraEnergy.json";
import TheraGov from "./contracts/TheraGov.json";
import TheraBioTech from "./contracts/TheraBioTech.json";
import TheraSpace from "./contracts/TheraSpace.json";
import TheraMining from "./contracts/TheraMining.json";





console.log(TheraSeed);

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, Thera, TheraSeed, TheraMarket, TheraLaw, TheraDev
  ,TheraTech, TheraConstruction, TheraEconomy, TheraArt, TheraEnergy, TheraGov, TheraBioTech, TheraSpace, TheraMining],
  events: {
    SimpleStorage: ["StorageSet"], 
    TheraSeed: ["TokensPurchased"],
  },
};

export default options;