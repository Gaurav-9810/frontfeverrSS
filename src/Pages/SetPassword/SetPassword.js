import React, { useState } from 'react'
import { Backend_Url } from '../../Path';
import { useNavigate, useParams } from 'react-router-dom';

const SetPassword = () => {
  const [password, setpassword] = useState();


//Params have id
const { id } = useParams();
const Navigate=useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
        const response = await fetch(`${Backend_Url}/0auth/setPassword/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  password  }),
          credentials: 'include',
        });
        
        
      
      if(response.status === 200){
        const result = await response.json();
           
            window.alert('you are new password is set');
            Navigate('/login');
        
      }else{
        window.alert('something went wrong try again');
     }
        
  
        
        
        // Authentication successful, you can redirect or perform other actions here
      
      
    } catch (error) {
      console.error('Error:', error);
      
    }
  };


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl ">
        <h1 className="text-3xl font-semibold text-center text-[#176B87] ">
           Enter The Email
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label
                    for="password"
                    className="text-left ml-4 block text-sm font-semibold text-gray-800"
                >
                    Password 
                </label>
                <input
                    onChange={(e)=>setpassword(e.target.value)}
                    className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                    
                />
            </div>
            
           
            <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                    submit
                </button>
            </div>
        </form>

        

    </div>
</div>
  )
}

export default SetPassword