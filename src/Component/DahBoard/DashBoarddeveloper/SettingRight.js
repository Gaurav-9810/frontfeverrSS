import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import config from '../../../Config.js';
import axios from 'axios';
import api from '../../../Utils/api.js';




const SettingRight = () => {

  const [SettingData, setSettingData] = useState({});
  const[isopen , setIsOpen]=useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit =()=>{
     setIsOpen(false);
     console.log(password);
  }

  const apiBaseUrl = config.API_BASE_URL;
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/getDetailsByID/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            },
          credentials: 'include',
        });
  
        console.log('dashborad called'); // Check if "hello" is printed
  
        if (response.status === 200) {
          const { userData } = response.data;
          console.log(userData);
          setSettingData(userData);
        } else {
          console.error('Response not OK:', response.status);
        }
      } catch (error) {
        console.error('Error:', error); // Log any errors
      }
    }
  
    fetchData(); // Call the fetchData function
  
    // Specify dependencies for the useEffect hook (e.g., id, apiBaseUrl)
  }, [id, apiBaseUrl]);
    
    
  return (
    <div className='flex mb-10 sm:mb-0 gap-3 text-sm sm:text-lg bg-[#EEEEEE] p-2 sm:p-4 rounded-lg'>
        <div className='flex flex-col  '>
              <p className='text-left'>Email :</p>
              <p className='text-left'>Password :</p>
        </div>
         <div className='flex flex-col  '>
              <p className='text-left text-[12px] sm:text-sm'>{SettingData.email}</p>
              <p className='text-left cursor-pointer' >
              <svg 
                onClick={()=>setIsOpen(true)}
              xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              </p>
            
        </div>   
        {
          isopen && 
          <div className='absolute  rounded-lg  bg-slate-500 p-6'>
              <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="text-left  block text-sm font-semibold text-white"
                        >
                            Enter new Password 
                        </label>
                        <input
                           onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div
                    
                    className="mt-6  ">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                            Change
                        </button>
                    </div>
            </form>
            <div
              onClick={()=>setIsOpen(false)}
            className='absolute top-2 right-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </div>
          </div>
        }  
         
    </div>
  )
}

export default SettingRight