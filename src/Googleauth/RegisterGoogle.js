import React, { useState } from 'react';
import{auth , provider} from '../Firebase/FirebaseConfig';

import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Backend_Url } from '../Path';
import { BiLogoGoogle } from 'react-icons/bi';

const RegisterGoogle = () => {
    const[user,setUser]=useState(null);
    const Navigate=useNavigate();


    const handleSubmit = async (user) => {
      var username=user.displayName;
      var email=user.email;
      // var password='123456';
      
      

      try {
        const response = await fetch(`${Backend_Url}/0auth/RegisterGoogle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username , email  }),
          withCredentials: true,
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
       
      }
    };
  

    const handleGoogleSignin=()=>{
       signInWithPopup(auth , provider).then((result)=>{
           const user=result.user;

           console.log(user);
           setUser(user);
           handleSubmit(user);
       }).catch((err)=>{
           console.log(err);
       })
    }
   
   
   
     return (
       <div>
             <button  className='text-black border-2 py-2 px-3  rounded-lg'
              onClick={handleGoogleSignin}
             >
              <BiLogoGoogle/>
             </button>
           
       </div>
     )
   }
export default RegisterGoogle