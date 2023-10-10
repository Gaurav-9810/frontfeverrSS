import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginGoogle from '../../Googleauth/LoginGoogle';
import axios from 'axios';
import api from '../../Utils/api';
import Facebookauth from '../Facebookfirebase/Facebookauth';
import { Backend_Url } from '../../Path';
import { Text, Stack, VStack } from '@chakra-ui/react';
import {useCookies} from 'react-cookie';
import {BiLock} from 'react-icons/bi'
import { useToast } from '@chakra-ui/react'


const LoginC = () => {
   const [username, setusername] = useState('');
   const[password,setPassword]=useState('');
   const [error, setError] = useState(null);
            
   const Navigate =useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log(username+"hello")
    // window.location.href = 'https://www.paypal.com/paypalme/oragepayments?country.x=IN&locale.x=en_GB';

    
    try {
      // console.log(Backend_Url);
        const response = await fetch(`${Backend_Url}/0auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password  }),
          credentials: 'include',
        });
        console.log(response);
        
      const {userExists ,userVerified , uid , accessToken ,role } = await response.json();
      
      if(userExists==false){
         
        showToast('Invalid Credentials','error');
        

      }
      if (response.ok) {
        console.log('Data sent successfully:', userExists , userVerified , accessToken);
  // const expiredate=new Date();
  //  expiredate.setDate(expiredate.getDate()+1);
  //       setCookie('accessToken',accessToken,{expires: expiredate});
  showToast('Login in SuccessFully','success');
       
         if(userVerified ==false){
            Navigate(`/otp/${uid}`);
            return;
        }
        else{

        
              
              // localStorage.setItem('accessToken',accessToken);
             if(role=='Hire'){
                localStorage.setItem('role','Hire');
                Navigate(`/DashBoard/Hire/${uid}`);
             }
             else{
                localStorage.setItem('role','Developer');
                Navigate(`/DashBoard/Developer/${uid}`);
             }

              
        }
  
        
        
        // Authentication successful, you can redirect or perform other actions here
      
      } else if (response.status==401) {
        // const {userExists ,userVerified , uid } = await response.data;
        // console.log(uid);
        showToast('Invalid Credentials','error');
        // Navigate(`/otp/${uid}`);
        return;
        
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request');
    }
  };
  const toast = useToast();
  const showToast = (text,color) => {
    toast({
      title: text,
      position: 'top',
      isClosable: true,
      status:color,
      
    })
  };

    
  return (
    
<Stack p={['4','6']}  justify={'center'} align={'center'} h={'100vh'} >

            <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-xl border-1 ">
                <h1 className="text-2xl font-semibold text-center text-[#176B87]">
                   <VStack>
                    <span className='bg-[#053B50] p-3 rounded-full text-white'>
                      <BiLock/>
                      </span>
                      <Text fontFamily={'serif'} fontWeight={'light'}>Sign in</Text>
                   </VStack>
                </h1>
                <form className="mt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
                    <div className="mb-2">
                     
                        <input
                        placeholder='Email Address*'
                            onChange={(e)=>setusername(e.target.value)}
                            className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                            
                            />
                    </div>
                    <div className="mb-2">
                     
                        <input
                        placeholder='Password*'
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="/forgetPassword"
                        className="text-xs text-[#053B50] hover:underline"
                        >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/Register"
                        className="font-medium text-[#053B50] hover:underline"
                        >
                        Sign up
                    </a>
                </p>
               
            <div className=' mt-3'>
                <LoginGoogle/>
            </div>
            {/* <div><Facebookauth text={'login with facebook'}/></div> */}
            </div>
       
  </Stack>
  )
}

export default LoginC