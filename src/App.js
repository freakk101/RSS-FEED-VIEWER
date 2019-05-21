import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FeedInput from "./component/FeedInput";
import UrlHistory from "./component/UrlHistory";
import FeedDetails from "./component/FeedDetails";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="containerFlex">
        <div className="url">
          <FeedInput />
          <UrlHistory />
        </div>
        <div className="data">
          <h1 className="heading"> FEED DATA </h1>
          <FeedDetails />
        </div>
      </div>
    </Provider>
  );
}

export default App;
