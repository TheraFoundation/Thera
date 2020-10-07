import React from "react";
import { newContextComponents } from "@drizzle/react-components";
//import logo from "./logo.png";
import Web3 from "web3"

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        {/* <img src={logo} alt="drizzle-logo" /> */}
        <h1>Plant the Amazon Today!</h1>
        <p>
          Buy a Tree in the Amazon and share with friends Trees!
        </p>
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>Tutorial Token</h2>
        <p>
          Here we have a form with custom, friendly labels. Also note the token
          symbol will not display a loading indicator. We've suppressed it with
          the <code>hideIndicator</code> prop because we know this variable is
          constant.
        </p>
        <p>
          <strong>Total Supply: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="TutorialToken"
            method="totalSupply"
            methodArgs={[{ from: drizzleState.accounts[0] }]}
          />{" "}
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="TutorialToken"
            method="symbol"
            hideIndicator
          />
        </p>
        <p>
          <strong>My Balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="TutorialToken"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <h3>Send Tokens</h3>
        <ContractForm
          drizzle={drizzle}
          contract="TutorialToken"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
      </div>

      <div className="section">
        <h2>Thera Token</h2>
        <p>
          Theras are like receipts of replantation, each Thera will grow and really exist in real life.
          Send Theras among friends, give somebody a tree in the Amazon as a present and more! All other future
          utility like functions will be inhereted from the Theras as the Dapp evolves!
        </p>
        <p>
          <strong>Total Supply: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Thera"
            method="totalSupply"
            methodArgs={[{ from: drizzleState.accounts[0] }]}
          />{" "}
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Thera"
            method="symbol"
            hideIndicator
          />
          <p>
          <strong>My Balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="Thera"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
          <h3>Send Theras</h3>
          <p>
          Theras are like receipts of replantation, each Thera will grow and really exist in real life.
          Send Theras among friends, give somebody a tree in the Amazon as a present and more! All other future
          utility like functions will be inhereted from the Theras as the Dapp evolves!
        </p>
        <ContractForm
          drizzle={drizzle}
          contract="Thera"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
         </p>
         
         <h3>TheraSeed</h3>
         <p>
          TheraSeed is the initial contact, focused on Reforsting initial tokens for social proof and change, after secret
          minimal cap has been hit other TheraSeedings will open for Tree trading and disruptive change! Enjoy this initial Node!
           <code>TheraSeed</code> prop because we know this variable is
          constant.
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraSeed" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         </p>
        <h3>TheraMarket</h3>
         <p>
          TheraMarket is Theras Foundation Second node entree, all resources go to reforesting the Amazon and all extra capital
          go to the direct creation of distribuition and transport of exclusive and exotic Amazon Products, these products can be
          Acquired using Theras.
           <code>TheraMarket</code> prop because we know this variable is
          constant.
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraMarket" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraLaw</h3>
        <p>
          To successfully recorver lands we need a strong law enforcement, when planting trees through this smart contract extra resources go
          to creating a pro active lawyer group of peope with expertise in reforestation, 0 tax carbon taxes aswell as other bureacrcies envolving
          the recovery of public land back to the Amazon.
           <code>TheraLaw</code> prop because we know this variable is
          constant.
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraLaw" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraDev</h3>
        <p>
          User, Trees and further Dapp evolution will propel the sharing of this fantastic idea, when planting trees through this contract extra resources
          Go to Dapp evolution and expansion. 
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraDev" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraTech</h3>
        <p>
          Throught this contract you will be able to reforest the Amazon and extra resources go to technology development envolving 
          surveilance of the forest and other technologies that can impact the Foundation and the Amazon Culture.
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraTech" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraConstruction</h3>
        <p>
          Each Land purchased or recovered through law enforcement will need a certain type of human like management to maintain the trees,
          replanting trees through this smart contract will enable contructions on site for medical, biological and other researches, as well
          as any future constructions needed to maintain the Foundation working. 
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraConstruction" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraEconomy</h3>
        <p>
          When reforesting through this smart contract user will be helping stabilize and economics office capable of escalating the value of each Thera and also
          helping coordinate financial manuavers and developments that envolve financing, De-fi, banking, loans and much more to accelerate economical development
          in the Amazon.
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraEconomy" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraArt</h3>
        <p>
          Signing and replanting the Amazon throught this contract will enable the creation of Entertainment like products, art, music and films.
          When reforesting throught this contract you propel the artistic development and escalate the amazon Culture worldwide through multiple ways.
          Users will have to use Theras to buy, sel
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraArt" 
        method="buyTokens"
         />
         <h3>TheraEnergy</h3>
        <p>
          Reforesting and replanting the amazon through this smart contract will propel Thera to invest in 0 carbon emission like projects and enable
          this style of development around the Amazon, Users and people will have to pay in Theras the energy consumption.
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraEnergy" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraGov</h3>
        <p>
          Each Land purchased or recovered through law enforcement will need a certain type of human like management to maitain the trees,
          replanting trees through this smart contract will enable contructions on site for medical, biological and other researches, as well
          as any future constructions needed to maintain the Foundation working. 
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraGov" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraBioTech</h3>
        <p>
          Each Land purchased or recovered through law enforcement will need a certain type of human like management to maitain the trees,
          replanting trees through this smart contract will enable contructions on site for medical, biological and other researches, as well
          as any future constructions needed to maintain the Foundation working. 
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraBioTech" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraSpace</h3>
        <p>
          Each Land purchased or recovered through law enforcement will need a certain type of human like management to maitain the trees,
          replanting trees through this smart contract will enable contructions on site for medical, biological and other researches, as well
          as any future constructions needed to maintain the Foundation working. 
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraSpace" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
         <h3>TheraMining</h3>
        <p>
          Each Land purchased or recovered through law enforcement will need a certain type of human like management to maitain the trees,
          replanting trees through this smart contract will enable contructions on site for medical, biological and other researches, as well
          as any future constructions needed to maintain the Foundation working. 
        </p>
        <ContractForm 
        drizzle={drizzle}
        drizzleState={drizzleState} 
        contract="TheraMining" 
        method="buyTokens"
        methodArgs={[drizzleState.accounts[0]]}
        sendArgs={{ value: Web3.utils.toWei("1", "ether")}}
         />
      </div>
    </div>
  );
};