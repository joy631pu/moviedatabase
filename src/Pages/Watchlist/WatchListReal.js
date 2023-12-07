import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./WatchListReal.css";
import Header from "./components/Header";
import { GlobalContextProvider } from "./context/GlobalState";

const WatchListReal = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default WatchListReal;