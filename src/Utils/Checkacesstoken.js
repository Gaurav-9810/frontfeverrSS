import { getCookie } from "./getCookies";
import {useNavigate} from "react-router-dom"


import { Navigate } from 'react-router-dom';

export const  AuthGuard=({ children })=> {
      const accessToken = getCookie('refreshToken'); // Replace with your actual access token retrieval logic

  if (accessToken) {
    // If the access token is present, navigate to another route (e.g., '/home')
    return <Navigate to="/home" />;
  }

  // If there is no access token, allow access to the children (e.g., the <LoginPage />)
  return children;
}

export const checkAccessToken = () => {
     
      const accessToken = getCookie('refreshToken'); // Replace with your actual access token retrieval logic
      if (accessToken) {
            // window.location.href = '/';
        return true;
      } else {
        // If the access token is not present, allow access to the '/login' route
        return false;
      }
    };
    