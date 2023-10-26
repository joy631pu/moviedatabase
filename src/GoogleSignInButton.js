import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response) => {
    if (response.profileObj) {
      // Handle the successful sign-in, e.g., send the user data to your server
      onSuccess(response.profileObj);
    } else {
      // Handle sign-in failure
      onFailure();
    }
  };

  return (
    <GoogleLogin
      clientId="GOOGLE_CLIENT_ID"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignInButton;
