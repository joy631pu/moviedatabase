import "./Header.css";

import React from 'react';
import { Button } from "./Nav.styled";
import { Link} from "react-router-dom";
import { useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { logOut } from "../../auth/firebase";

// Header Component
const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const items = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useHistory();
  
  return (
    <>
    <span onClick={() => window.scroll(0, 0)} className="header"><a href="/">
      MovieDataBase </a>
      
      <span>
              { currentUser || items ? 
                <>
                <span style={{fontSize:"3vw",fontWeight:"bold"}} className="displayName">
                  {currentUser?.displayName || items?.displayName}
                </span>
                <Button  style={{fontWeight:"bold",fontFamily:"sans-serif"}} onClick={() => logOut(navigate)}>Logout</Button>
                </>

              : 
                <>
                <Button style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
                <Link to="/login">Login</Link>
              </Button>
              <Button style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
                <Link to="/register">Register</Link>
              </Button>

                </>
                

              }
              
              </span>
            
    </span>
    
  </>


   
  );
};

export default Header;
