import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./WatchListReal.css";
import Header from "./components/Header";
import Add from "./components/Add";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import { GlobalContextProvider } from "./context/GlobalState";

const WatchListReal = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/watchlist" component={WatchList} />
          {/* <Route exact path="/" component={WatchList} /> */}
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default WatchListReal;