import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Login from "./Pages/forms/Login";
import Register from "./Pages/forms/Register";
import PasswordReset from "./Pages/forms/PasswordReset";

// import Search from "./Pages/Search/Search";
import { Container} from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";

import AuthContextProvider from "./context/AuthContextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WatchListReal from "./Pages/Watchlist/WatchListReal"


function App() {
  const LoginRouter = () => {
    const { currentUser } = useContext(AuthContext);

    return !currentUser ? < Route path="/login"/> : <Route path="/" />;
  };
  return (
    <AuthContextProvider>
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
          <Route path="/watchlist" component={WatchListReal} />
          <Route path="/login" component={LoginRouter}>
          <Route path="" component={Login} />
        </Route>

        <Route path="/register" component={LoginRouter}>
          <Route path="" component={Register} />
        </Route>

        <Route path="/password-reset" component={LoginRouter}>
          <Route path="" component={PasswordReset} />
        </Route>
          
          {/* <Route path="/search" component={Search} /> */}
        </Switch>
      </Container>
    </div>
    {/* Navigation */}
    <SimpleBottomNavigation />
  </BrowserRouter>  
  <ToastContainer />
   
  </AuthContextProvider>
      
      
  );
}

export default App;
