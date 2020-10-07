import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store';

import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions.js";

const drizzle = new Drizzle(drizzleOptions);


const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));


ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>

    <Provider store={configureStore()}>
      <Suspense fallback={<div className="loading" />}>
        <App />
      </Suspense>
    </Provider>

  </DrizzleContext.Provider>,
      document.getElementById('root')
);
/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
