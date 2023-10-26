import "./Header.css";

import React from 'react';
import GoogleSignInButton from '../../GoogleSignInButton';

// Header Component
const Header = () => {
  const handleSuccess = (userData) => {
    console.log('User successfully signed in:', userData);
    // You can handle the user data here, e.g., store it in your state.
  };

  const handleFailure = () => {
    console.log('Google Sign-In failed.');
    // Handle sign-in failure here.
  };
  return (
    <>
    <span onClick={() => window.scroll(0, 0)} className="header">
      MovieDataBase 
      <div className="button">    
      <GoogleSignInButton onSuccess={handleSuccess} onFailure={handleFailure} />
      </div>
    </span>
    
  </>


   
  );
};

export default Header;
