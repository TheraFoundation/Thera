import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
//import { Drizzle } from "@drizzle/store";
//import drizzleOptions from "../../drizzleOptions";
import MyComponent from "./MyComponent";
import "./App.css";

//const  = new Drizzle(drizzleOptions);

const DrizzleApp = () => {
  return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
      </DrizzleContext.Consumer>
  );
}

export default DrizzleApp;