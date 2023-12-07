import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
// import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
import "../App.css"


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "red",
    zIndex: 100,
  },
});
// SimpleBottomNavigation function for showing bottom navigation bar
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const year = new Date().getFullYear();
  
  // useEffect hook
  // useEffect(() => {
  //   if (value === 0) {
  //     history.push("/");
  //   } else if (value === 1) {
  //     history.push("/movies");
  //   } else if (value === 2) {
  //     history.push("/series");
  //   } 
  //   else if (value === 3) {
  //     history.push("/login");
  //   }
    
  // }, [value, history]);

  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };

  return (
    <>
    
    <BottomNavigation
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      value={value} 
        onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        style={{ color: "white"}}
        label="TRENDING"
        icon={<WhatshotIcon />}
        value=""
      />
      <BottomNavigationAction 
        style={{ color: "white"}}
        label="MOVIES"
        icon={<MovieIcon />}
        value="movies"
      />
      <BottomNavigationAction
        style={{ color: "white"}}
        label="SERIES"
        icon={<TvIcon />}
        value="series"
      />
      <BottomNavigationAction
        style={{ color: "white"}}
        label="WatchList"
        icon={<TvIcon />}
        value="watchlist"
      />
      {/* <BottomNavigationAction
        style={{ color: "white"}}
        label="TV SERIES"
        icon={<TvIcon />}
      /> */}
      
      
      {/* Inactive search page on navigation bar */}
      {/* <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      /> */}
      {/* <BottomNavigationAction
        style={{ color: "white" }}
        label="Watch Later"
        icon={<MovieIcon />}
      /> */}
      <p style={{color:"white"}}>Copyright &copy;{year}&nbsp;
           Joy Barua. All Rights Reserved.
        </p>
    </BottomNavigation>
    
    </>
  );
}
