import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
            Accept: 'application/json'
          }
        });

        const data = await res.json();
        console.log('Google User Data:', data);
        // Here you would typically:
        // 1. Send this data to your backend
        // 2. Create/update user in your database
        // 3. Set user session/token
        navigate('/dashboard');
      } catch (err) {
        console.log('Error fetching Google user data:', err);
      }
    },
    onError: error => console.log('Login Failed:', error)
  });

  return (
    <button
      onClick={() => login()}
      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      <img
        className="h-5 w-5 mr-2"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google logo"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLogin; 