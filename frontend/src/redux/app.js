import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetInfo } from "./actions/info";
import Hope from "./store";

const store = configureStore();

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1> hopping that today is the day </h1>
        <Hope />
      </Provider>
    </div>
  );
};
ReactDOM.render(<p>Loading .....</p>, document.getElementById("app"));
store.dispatch(startSetInfo()).then(() => {
  ReactDOM.render(<App />, document.getElementById("app"));

