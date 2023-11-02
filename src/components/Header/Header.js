import "./Header.css";

import React from 'react';
import { Button } from "./Nav.styled";
import { Link} from "react-router-dom";

// Header Component
const Header = () => {
  
  return (
    <>
    <span onClick={() => window.scroll(0, 0)} className="header">
      MovieDataBase 
      
              <div className="Reg">
              <Button>
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/register">Register</Link>
              </Button>
              </div>
            
    </span>
    
  </>


   
  );
};

export default Header;
