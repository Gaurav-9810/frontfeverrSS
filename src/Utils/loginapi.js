import axios from 'axios';
import {getCookie} from './getCookies';
// import { useNavigate } from 'react-router-dom';
import {Backend_Url} from '../Path'


const apilogin = axios.create({
  baseURL: `${Backend_Url}/0auth`,
});




apilogin.interceptors.request.use(
  async (config) => {
    
    const token = getCookie('accessToken');
    const refreshToken =getCookie('refreshToken')
    
  

    if (!token) {
      const refreshToken = getCookie('refreshToken');

     
        try {
          
          
          console.log("before");
        //   const response = await fetch(`${Backend_Url}/0auth/login`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     credentials: 'include',
        //   });
          // const data = await response.json();
          
        //   console.log("after")
        //   if (response.ok) {
        //     const data = await response.json();
        //     console.log(data);
          
        //   } else {
        //     // Handle error response from the server
        //     console.error("Token refresh failed:", response.statusText);
        //   }
        } catch (error) {
          console.error("Token refresh failed:", error);
        }
     
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);




// Add a response interceptor
apilogin.interceptors.response.use(
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
    

export default apilogin