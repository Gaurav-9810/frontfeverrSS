import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegisterGoogle from '../../Googleauth/RegisterGoogle';
import Facebookauth from '../Facebookfirebase/Facebookauth';
import { Backend_Url } from '../../Path';
import { Text, Stack, VStack, HStack,Select } from '@chakra-ui/react';
import {BiLock} from 'react-icons/bi'
import { useToast } from '@chakra-ui/react'
const RegisterC = () => {
  const [email, setEmail] = useState('');
  const [username ,setUserName]=useState('');
  const [password , setpassword] = useState('');
  const [role , setRole]=useState('Developer');
  const [error , setError] = useState('');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const isValidEmail = emailPattern.test(email);
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

// Example usage:
const isValidPassword = passwordPattern.test(password);

  const Navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   if(isValidEmail && isValidPassword){
            try {
            const response = await fetch(`${Backend_Url}/0auth/register`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password , email, role }),
                credentials: 'include',
            });
            const resData = await response.json(); // Await the JSON parsing
              if(resData.userVerified==true){
                showToast('email already register','error');
              }
            if (response.ok && resData.userVerified==false) {

                const userId = resData.uid;
                console.log(resData);

            
                
                // Authentication successful, you can redirect or perform other actions here
                showToast('enter otp','info');
                
                Navigate(`/otp/${userId}`);
            } else {
                // Authentication failed, handle the error
                showToast('Invalid Credentials','error');
                setError('Invalid username or password');
            }
            } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
            }
    }
    else{
        if(!isValidEmail){
            showToast('your email not valid','error');
          
        }
        else if(!isValidPassword){
            showToast(`password must contain Aleast (8)character (1)Uppercase (1)Lowercase  (1)special character (1)digit`,'warning');
        //    window.alert("password must contain min(8) character with \n ->Uppercase \n ->Lowercase \n -> special character \n ->digits")
        }
        
    }

    console.log(username);
    

    
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
    <div className="px-[10%] lg:px-[0%]  relative flex flex-col  min-h-screen overflow-hidden ">
            <div className="  w-full p-6 m-auto bg-white rounded-md border-1 lg:max-w-xl">
            <h1 className="text-2xl font-semibold text-center text-[#176B87]">
                   <VStack>
                    <span className='bg-[#053B50] p-3 rounded-full text-white'>
                      <BiLock/>
                      </span>
                      <Text fontFamily={'serif'} fontWeight={'light'}>Sign up</Text>
                   </VStack>
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <Stack w={'full'} justifyContent={'space-between'} direction={['column','row']}>
                    <div className="mb-2">

                        <input
                        placeholder='Email Address*'
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        required={true}
                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                   
                        <input
                        placeholder='Username*'
                        onChange={(e)=>setUserName(e.target.value)}
                        required={true}
                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                        </Stack>
                    <div className="mb-2">
                     
                        <input
                        placeholder='Password*'
                        onChange={(e)=>setpassword(e.target.value)}
                            type="password"
                            required={true}
                            className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="role" // Use htmlFor instead of "for" for accessibility
                            className="text-left ml-4 block text-sm font-semibold text-gray-800"
                        >
                             <Text fontFamily={'serif'} fontWeight={'light'}>Select profile*</Text>
                        </label >

                        <select
                            id="role"
                           
                            value={role} // Assuming you have a state variable named "role" to store the selected value
                            onChange={(e) => setRole(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                       >
                            
                            <option value="Developer" >Developer</option>
                            <option value="Hire">Hire</option>
                            {/* Add more role options as needed */}
                        </select>
                    </div>

                    <a
                        href="/forgetPassword"
                        className="text-xs text-[#053B50] hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                            Register 
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Do have an account?{" "}
                    <a
                        href="/login"
                        className="font-medium text-[#053B50] hover:underline"
                    >
                        Login
                    </a>
                </p>
                <Stack w={'full'} justifyContent={'center'} alignItems={'center'} mt={'4'} direction={['column','row']} >
                <Text>Create an account with</Text>
                <p className='hidden sm:block border-2 w-0 h-10 '></p>
                <HStack>

           <RegisterGoogle/>
            <Facebookauth/>
                </HStack>
                </Stack>
            </div>
        </div>
  )
}

export default RegisterC