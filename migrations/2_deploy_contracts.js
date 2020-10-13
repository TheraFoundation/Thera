const SimpleStorage = artifacts.require("SimpleStorage");
const Thera = artifacts.require("Thera");
const TheraAether = artifacts.require("TheraAether");
const TheraSeed = artifacts.require("TheraSeed");
const TheraMarket = artifacts.require("TheraMarket");
const TheraLaw = artifacts.require("TheraLaw");
const TheraDev = artifacts.require("TheraDev");
const TheraTech = artifacts.require("TheraTech");
const TheraConstruction = artifacts.require("TheraConstruction");
const TheraArt = artifacts.require("TheraArt");
const TheraEconomy = artifacts.require("TheraEconomy");
const TheraEnergy = artifacts.require("TheraEnergy");
const TheraGov = artifacts.require("TheraGov"); 
const TheraBioTech = artifacts.require("TheraBioTech");
const TheraSpace = artifacts.require("TheraSpace");


//Thanks Nick loved your way :D
const configurations = [
  {
    contractName: "TheraAether",
    walletAddress: "0xbA1889f75B6B9E28539bb874fd1d29A9f1eCe05b"
  },
  {
    contractName: "TheraSeed",
    walletAddress: "0x47e4e4Ad3B0599c92E93E6BE09B75DDF141ef9D4"
  },
  {
    contractName: "TheraMarket",
    walletAddress: "0x0e703bd4358d5974EEc5c1e47E0c5A154440Cd5A"
  },
  {
    contractName: "TheraLaw",
    walletAddress: "0xD27a92D6C9A5408BE1bB5414e3bfe215CC9589b4"
  },
  {
    contractName: "TheraDev",
    walletAddress: "0xeE01794f780dF599eAA7A673A40C4b5C0EC8c34F"
  },
  {
    contractName: "TheraTech",
    walletAddress: "0x6b784DeCD0AA3bF6f86Cc0648AE6d6a1078E4E6d"
  },
  {
    contractName: "TheraConstruction",
    walletAddress: "0x0f0954C49da09ed8cc9d9c64631d1126226F6C8B"
  },
  {
    contractName: "TheraArt",
    walletAddress: "0x5870B5c970D8709745fd62b7012164262ACe8149"
  },
  {
    contractName: "TheraEconomy",
    walletAddress: "0x951b9C563bE189D20aa51f7A35DCA38964c8f98B"
  },
  {
    contractName: "TheraEnergy",
    walletAddress: "0x7FA6C2462bD7E29C449D60Ef31868bb4dE38C72F"
  },
  {
    contractName: "TheraGov",
    walletAddress: "0x1FB7E080f295773A75E5b7eBDf7E05CE75e59Dfb"
  },
  {
    contractName: "TheraBioTech",
    walletAddress: "0xEaDb85d2B8f2CcC044A2F68fb35d36246f860256"
  },
  {
    contractName: "TheraSpace",
    walletAddress: "0xc709B28477C5a203fdcF187e7eCc9c17543EEdD1"
  }

]

//const OwnerWallet="0xbA1889f75B6B9E28539bb874fd1d29A9f1eCe05b"
//const seedWalletAddress ="0x47e4e4Ad3B0599c92E93E6BE09B75DDF141ef9D4"
//const marketWalletAddress ="0x0e703bd4358d5974EEc5c1e47E0c5A154440Cd5A"
//const LawWalletAddress ="0xD27a92D6C9A5408BE1bB5414e3bfe215CC9589b4"
//const DevWalletAddress ="0xeE01794f780dF599eAA7A673A40C4b5C0EC8c34F"
//const TechWalletAddress ="0x6b784DeCD0AA3bF6f86Cc0648AE6d6a1078E4E6d"
//const ConstructionWallet ="0x0f0954C49da09ed8cc9d9c64631d1126226F6C8B"
//const ArtWallet ="0x5870B5c970D8709745fd62b7012164262ACe8149"
//const EconomyWallet ="0x951b9C563bE189D20aa51f7A35DCA38964c8f98B"
//const EnergyWallet ="0x7FA6C2462bD7E29C449D60Ef31868bb4dE38C72F"
//const GovWallet ="0x1FB7E080f295773A75E5b7eBDf7E05CE75e59Dfb"
//const BioTechWallet ="0xEaDb85d2B8f2CcC044A2F68fb35d36246f860256"
//const SpaceWallet ="0xc709B28477C5a203fdcF187e7eCc9c17543EEdD1"
//const MiningWallet ="0x86D795b6760b93784Eb6D5F8846A7154DD48AFe0"


module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Thera);
  const thera = await Thera.deployed();


  for (const { contractName, walletAddress } of configurations) {
    const Contract = artifacts.require(contractName);

    await deployer.deploy(Contract, walletAddress, thera.address);
    const instance = await Contract.deployed();

    await thera.addMinter(instance.address);
    
  }
  await deployer.deploy(SimpleStorage);

};