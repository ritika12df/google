// src/components/Auth.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';


function Auth() {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    // Save user token or handle login
    console.log('Google Sign-In successful:', response);
    // Redirect to Dashboard after successful sign-in
    navigate('/dashboard');
  };

  const handleFailure = (error) => {
    console.error('Google Sign-In failed:', error);
  };

  return (
    <div className="auth-container">
      <h1>Sign In with Google</h1>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          buttonText="Sign in with Google"
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Auth;
