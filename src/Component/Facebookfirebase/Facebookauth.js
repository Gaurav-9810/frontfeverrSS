import React, { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, fbProvider } from '../../Firebase/FirebaseConfig.js';
import { useNavigate } from 'react-router-dom';
import {Backend_Url} from '../../Path.js'
import { BiLogoFacebook } from 'react-icons/bi';

const Facebookauth = () => {
    const [email, setemail] = useState('');
    const [username, setuserName] = useState('');
    const Navigate=useNavigate();
    
    const [error, setError] = useState(null); // New state for handling errors
  
    const handleSubmit = async (email, username) => {
      console.log(email);
      console.log(username);

      try {
        const response = await fetch(`${Backend_Url}/0auth/registerfacebook`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email }),
          credentials: 'include',
        });
    
        if (response.ok) {

          const resData = await response.json(); // Await the JSON parsing
          const userId = resData.uid;
          console.log(resData);
  
         
          
          // Authentication successful, you can redirect or perform other actions here
          if(resData.userVerified){
            if(resData.role=="Developer"){
                Navigate(`/DashBoard/Developer/${resData.uid}`);
            }
            else{
              Navigate(`/DashBoard/Hire/${resData.uid}`);
            }
            
          }
          else if(resData.userVerified==false){
             Navigate(`/PasswordCreate/${resData.uid}`);
          }

          
        } else {
          // Authentication failed, handle the error
          window.alert('Invalid username or password')
          
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network errors or other unexpected errors
        window.alert('An unexpected error occurred');
      }
    };
    
    
useEffect(() => {
      console.log(email+"kdfk"); // This will log the updated email value
       if(email!='')
         handleSubmit(email,username);
    
    }, [email,username]);
  
const handleFacebookLogin = () => {
      signInWithPopup(auth, fbProvider)
        .then((result) => {
          const u = result.user;
          setemail(u.email);
          setuserName(u.displayName);
         
          setError(null);
          
        })
        .catch((err) => {
          setError(err.message);
        });
    };
  
  
    return (
      <div>
        
            <div>
              <button  className='text-black border-2 py-2 px-3 rounded-lg' onClick={handleFacebookLogin}>
               <BiLogoFacebook/>
              </button>
            </div>
          
        
      </div>
    );
}

export default Facebookauth