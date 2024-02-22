import React, { useState } from 'react';
import axios from 'axios';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleLogin = async () => {
    //     try {
    //       const response = await axios.post('http://localhost:8000/oauth/token', {
    //         grant_type: 'password',
    //         client_id: '2',
    //         client_secret: 'yO7cQzaS9FgWsKhYQRBrZ9JUHwe3XtEuSKzHOHIa',
    //         username: email,
    //         password: password,
    //         scope: '',
    //       }, 
    //       { withCredentials: true }
    //       );
    
    //       // Store the access token in local storage
    //       localStorage.setItem('access_token', response.data.access_token);
    
    //       // Redirect or update state to reflect the authenticated state
    //       console.log('Login successful:', response.data);
    
    //     } catch (error) {
    //       // Handle login error
    //       console.error('Login failed:', error.response.data);
    //     }
    //   };


    return (
        <div>
          <h2>Login</h2>
        </div>
      );
}