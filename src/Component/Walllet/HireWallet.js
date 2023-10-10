import React, { useEffect, useState } from 'react'
import DeveloperWalletCard from './DeveloperWalletCard'
import HireWalletCard from './HireWalletCard'
import { Backend_Url } from '../../Path'
import { useParams } from 'react-router-dom'

const HireWallet = ({data}) => {
  const [allpayments, setallpayments] = useState([])

  const {id}=useParams();
  async function fetchData() {
    try {
     
  
      const response = await fetch(`${Backend_Url}/0auth/getAllAcoountDetailsByHireId/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      console.log(result);
      setallpayments(result);
      
      
    } catch (err) {
      
    } finally {
     
    }
  }
  
    useEffect(() => {
      
  
      fetchData();
    }, [allpayments]);

  return (
    <div className='flex '>
        <div className=' w-[100vw] bg-[#eae8e8] h-[100vh]'>
          <div className='flex justify-between mx-5'>
             <p className='text-[#053B50] text-3xl font-bold font-sans my-3 '>Your Transaction</p>
             <div className='flex gap-3 items-center'>
                  
                  <div className='flex justify-center'>
                    <p className='text-white bg-red-500 px-3  py-2 rounded-md w-32 cursor-pointer hover:bg-red-700'>help</p>
                  </div>
             </div>
             
          </div>
          <div>
            <p className='text-[#053B50] text-3xl font-bold font-sans mb-2 '>Transaction</p>
          </div>
          <div className='flex flex-col'>
          {
              allpayments.map((item,inidex)=>(
                <HireWalletCard data={item}/>
              ))
            }
          </div>
            
        </div>
        
        
    </div>
  )
}

export default HireWallet