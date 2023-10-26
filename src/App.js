import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import WatchLater from "./Pages/WatchLater/WatchLater";
// import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";


function App() {
  return (
    <BrowserRouter>
    {/* Header */}
    <Header />
    <div className="app">
      <Container>
        <Switch>
          {/* Pages */}
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/watchlater" component={WatchLater} />
          {/* <Route path="/search" component={Search} /> */}
        </Switch>
      </Container>
    </div>
    {/* Navigation */}
    <SimpleBottomNavigation />
  </BrowserRouter>  
      
      
  );
}

export default App;
