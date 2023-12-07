import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./WatchListReal.css";
import Header from "./components/Header";
import Add from "./components/Add";
import { GlobalContextProvider } from "./context/GlobalState";

const WatchListReal = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          
          <Route exact path="/add" component={Add} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default WatchListReal;