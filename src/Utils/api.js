import axios from 'axios';
import {getCookie} from './getCookies';
// import { useNavigate } from 'react-router-dom';
import {Backend_Url} from '../Path'


const api = axios.create({
  baseURL: `${Backend_Url}/0auth`,
});




api.interceptors.request.use(
  async (config) => {
    
    const token = getCookie('accessToken');
    const refreshToken =getCookie('refreshToken')
    
  //  const token= localStorage.getItem('accessToken');
   
    if(!refreshToken){
      window.location.href = '/login';
    }

    if (!token) {
      const refreshToken = getCookie('refreshToken');

      if (refreshToken) {
        try {
          
          
          console.log("before");
          const response = await fetch(`${Backend_Url}/0auth/refresh/${435789}}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
          // const data = await response.json();
          
          console.log("after")
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            // const newAccessToken = data.accessToken;
            // // setCookie('accessToken', newAccessToken);
            // config.headers.Authorization = `Bearer ${newAccessToken}`;
          } else {
            // Handle error response from the server
            console.error("Token refresh failed:", response.statusText);
          }
        } catch (error) {
          console.error("Token refresh failed:", error);
        }
      } else {
        console.error("Refresh token is missing. Redirect to login page.");
        // Redirect to login page or handle missing refresh token
      }
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);





// Add a response interceptor
api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        console.log("hello");
    
        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
    
          try {
            const refreshToken = getCookie('refreshToken');
            const response = await axios.post('/0auth/refresh', { refreshToken });
            console.log("refresh token called")
            // const { token } = response.data;
    
            // localStorage.setItem('token', token);
    
            // Retry the original request with the new token
            const token = getCookie('accessToken')
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (error) {
            // Handle refresh token error or redirect to login
          }
        }
    
        return Promise.reject(error);
      }
    );
    

export default api