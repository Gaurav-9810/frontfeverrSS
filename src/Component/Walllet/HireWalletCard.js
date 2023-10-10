import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../Path';

const HireWalletCard = ({data}) => {
  const [devloperdata, setdevloperdata] = useState([])
  
  

  const [show, setshow] = useState(-1);

  const handleClick=(id)=>{
    
       setshow(id);
  } 
  const userID=data?.userId
  async function fetchData() {
    try {
     
  
  
      const response = await fetch(`${Backend_Url}/0auth/showDeveloperProfileById/${userID}`, {
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
      console.log(result[0].name);
      setdevloperdata(result);
      
      
      
    } catch (err) {
      
    } finally {
     
    }
  }
  
    useEffect(() => {
      
  
      fetchData();
      // console.log(companydata[0]?.name);
    }, []);
  return (
    <div>
        
        <div className='lg:mr-4 lg:ml-4 mb-2  rounded-md  bg-[#176B87] text-[#EEEEEE] '   >
                            <div className='  rounded-md pb-px  ' >
                    
                                
                                <div className='pl-2 font-semibold  text-left md:pl-4 text-White  py-2 flex justify-between  ' >{data.ProjectSummary}
                                
                                
                                {show=='1' &&<span onClick={()=>handleClick('-1')}   className='cursor-pointer mr-4 p-2 ' >
                                <svg   xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                </span>}
                               { show=='-1' && 
                                <span  onClick={()=>handleClick('1')} className='mr-4 z-30 p-2 cursor-pointer'>
                                <svg   xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                    
                                </span>} 
                                </div>  
                        
                        
                            { show=='1' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4'>
                                
                                <div className='flex justify-between'>
                                    <p className='cursor-pointer'>10% payment Done on </p>
                                    <p>{Math.floor(data?.amountinitial)}</p>
                                    <p>{data?.createdAt}</p>
                                </div>
                                <div className='flex justify-between'>
                                      <p className='cursor-pointer'>100% payment Done on </p>
                                      {data?.amountfinal &&  <p>{Math.floor(data?.amountfinal)}</p>}
                                     
                                      <p>{data?.updatedAt}</p>
                                </div>
                                <div className='flex justify-between'>
                                      <p>to {devloperdata[0]?.name}</p>
                                      
                                </div>
                            </p>
                            }
                            
                            </div>
        </div>
    </div>
  )
}

export default HireWalletCard