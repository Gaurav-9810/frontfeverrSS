
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Backend_Url } from '../../Path';
import { Button, HStack, Text, useToast } from '@chakra-ui/react';


const OtpContent = () => {

  const [err, setError] = useState('')
    const [Otp, setOtp] = useState('');
  
    
    const { id } = useParams();

    const Navigate=useNavigate();
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("mjhggjk");
        console.log(Otp);

        
    
        try {
          const response = await fetch(`${Backend_Url}/0auth/verifyOtp`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp: Otp, userId : id }),
          });
     const {otpExpired , otpValid ,role } = await response.json();
        //  console.log(response.json()); 
         if (otpValid ) {
           
            
            if(otpExpired){
              showToast('Invalid expired','error');
            }
            else{
              console.log('otp verify ');
              if(role=="Developer"){
                  Navigate(`/DeveloperProfileForm/${id}`);
              }
              else{
                Navigate(`/HireProfileForm/${id}`)

              }
              
             
            }
      
            
            
            // Authentication successful, you can redirect or perform other actions here
            
          } else {
            // Authentication failed, handle the error
            showToast('Invalid Otp','error');
            setError('Invalid otp');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('An error occurred while processing otp verification');
        }
      };

    const handleResend= async()=>{


      try{
        const response = await fetch(`${Backend_Url}/0auth/resendOtp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId : id }),
        });
       
  
        if(response.ok){
          const {userVerified , otpResent } = await response.json();
           if(otpResent==false){
            
            Navigate('/NotaRegisterUser');
           }
           else{
            
             showToast('Otp sended','success');
            
           }
  
        }

      }
      catch (error) {
        console.error('Error:', error);
        setError('An error occurred while send the otp');
      }

    }

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
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md  border-1 lg:max-w-xl ">
                <h1 className="text-3xl font-semibold text-center text-[#176B87] underline">
                   Enter your Otp
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            
                            className="text-left ml-4 block text-sm font-semibold text-gray-800"
                        >
                           type otp sent in your mail
                        </label>
                        <input
                            onChange={(e)=>setOtp(e.target.value)}
                            className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                            
                        />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                            Enter
                        </button>
                    </div>
                    
                    
                </form>
                <div className='flex justify-center my-3 cursor-pointer'>
                  <HStack>
                <Text fontSize={'sm'}>not received?</Text>
                   <Button bg={'none'} border={'1px solid'} onClick={()=>handleResend()}>Resend</Button>
                  </HStack>

                </div>
                

                
            
            </div>
        </div>
  )
}

export default OtpContent





