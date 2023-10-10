import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Backend_Url } from '../Path';

const PasswordCreate = () => {
    const [password , setpassword] = useState('');
  const [role , setRole]=useState('');

  const Navigate=useNavigate();
const {id}=useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    

    try {
      const response = await fetch(`${Backend_Url}/0auth/setPasswordandRole/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password , role }),
        credentials: 'include',
      });

      if (response.ok) {

        const resData = await response.json(); // Await the JSON parsing
        const userId = resData.uid;
        console.log(resData);

       
        if(role=="Developer"){
          Navigate(`/DeveloperProfileForm/${id}`);
          }
          else{
            Navigate(`/HireProfileForm/${id}`)

          }
        // Authentication successful, you can redirect or perform other actions here
        console.log('Register google successful');
        
      } else {
        // Authentication failed, handle the error
        window.alert('Invalid username or password')
        
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
         <h1 className="text-3xl font-semibold text-center text-[#176B87] underline">
                   Create New Password
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
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="role" // Use htmlFor instead of "for" for accessibility
                            className="text-left ml-4 block text-sm font-semibold text-gray-800"
                        >
                            Role
                        </label>
                        <select
                            id="role"
                            value={role} // Assuming you have a state variable named "role" to store the selected value
                            onChange={(e) => setRole(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        >
                            <option>select One</option>
                            <option value="Developer">Developer</option>
                            <option value="Hire">Hire</option>
                            {/* Add more role options as needed */}
                        </select>
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

export default PasswordCreate