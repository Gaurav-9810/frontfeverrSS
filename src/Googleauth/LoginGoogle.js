import React, { useState } from 'react';
import{auth , provider} from '../Firebase/FirebaseConfig';

import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Backend_Url } from '../Path';
import { HStack } from '@chakra-ui/react';
import {BiLogoGoogle} from 'react-icons/bi'

const LoginGoogle = () => {
    const[user,setUser]=useState(null);
    const Navigate=useNavigate();


    const handleSubmit = async (user) => {
      var username=user.displayName;
      var email=user.email;
      console.log(username);
      console.log(email);
      
      

      try {
        const response = await fetch(`${Backend_Url}/0auth/LoginGoogle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username , email }),
          credentials: 'include',
        });

        if (response.ok) {
           const responseData=await response.json(); 
          console.log('Login by google successful');
          console.log(responseData);
          Navigate('/');
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
             <button  className='text-black py-2 px-3 border-2 rounded-lg'
              onClick={handleGoogleSignin}
             >

              <HStack>
<BiLogoGoogle color='#176B87' size={'25'}/>
                <span>Login with Google</span>
              </HStack>
             </button>
           
       </div>
     )
   }

export default LoginGoogle