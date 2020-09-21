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
        <h1>Drizzle Examples</h1>
        <p>
          Examples of how to get started with Drizzle in various situations.
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
        <h2>SimpleStorage</h2>
        <p>
          This shows a simple ContractData component with no arguments, along
          with a form to set its value.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SimpleStorage"
            method="storedData"
          />
        </p>
        <ContractForm 
        drizzle={drizzle} 
        contract="SimpleStorage" 
        method="set" />
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
        </p>
        <h3>Thera  </h3>
        <p>
          Send Theras for Ongs and Science projects
        </p>

      <p>
        Cancer skin analysis - Send Theras to help Scientific cancer breakthrough 
      </p>
        <ContractForm
          drizzle={drizzle}
          contract="Thera"
          method="transfer"
          labels={["To Address","Must be 100"]}
        />
        <p>
        Buy Shaman Indeginous Mask 
      </p>
        <ContractForm
          drizzle={drizzle}
          contract="Thera"
          method="transfer"
          labels={["To Address","Must be 80"]}
        />
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

      </div>

      <div className="section">
        <h2>ComplexStorage</h2>
        <p>
          Finally this contract shows data types with additional considerations.
          Note in the code the strings below are converted from bytes to UTF-8
          strings and the device data struct is iterated as a list.
        </p>
        <p>
          <strong>String 1: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="ComplexStorage"
            method="string1"
            toUtf8
          />
        </p>
        <p>
          <strong>String 2: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="ComplexStorage"
            method="string2"
            toUtf8
          />
        </p>
        <strong>Single Device Data: </strong>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="ComplexStorage"
          method="singleDD"
        />
      </div>
    </div>
  );
};