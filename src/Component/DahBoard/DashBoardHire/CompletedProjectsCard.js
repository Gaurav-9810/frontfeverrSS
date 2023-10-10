import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../../Path';

const CompletedProjectsCard = ({data}) => {
    const [UserDetails, setUserDetails] = useState({});
    const img="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
    useEffect(() => {
        let userID=data.userId;
        async function fetchData() {
          try {
            const response = await fetch(`${Backend_Url}/0auth/showDeveloperProfileById/${data.userId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            console.log(response);
            const result = await response.json();
            console.log(result.name);
             
            setUserDetails(result);
           
            
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchData();
    
        // Return a cleanup function
        return () => {
          // Perform any cleanup actions here if needed
        };
      }, []);

      const dateString = data?.createdAt;
    const date = new Date(dateString);

    const formattedDate = `${date.toLocaleDateString()}`;
    // console.log(formattedDate);
    
 return (
<div className='  shadow-lg p-4 rounded-lg'>
    <div className='flex flex-col gap-1'>
        <img className='border-2 border-black rounded-md' src={img}></img>
    <div className='flex flex-col pl-1 gap-2'>
            <div className='flex justify-between mb-2 '>
                    <p className='font-bold font-sans'>{data?.companyName}</p> 
                    <p className='bg-green-200 px-2 py-1 rounded-lg text-slate-400 font-bold'>
                        Completed
                    </p> 
                </div> 
                <p className='text-left text-slate-700 font-medium font-sans'>{data?.ProjectSummary.split(' ').slice(0, 15).join(' ')}</p>
                <p className='text-left text-slate-700 font-medium font-sans flex gap-2 items-center'>
                   completed on {formattedDate} 
                </p>
                <p className='text-left text-slate-500 font-medium font-sans'>Money $ {data?.ProjectMoney}</p>
                <p className='text-left text-slate-500 font-medium font-sans'>Completed By {UserDetails[0]?.name}</p>
               
    </div>
        
    </div>
</div>
  )
}

export default CompletedProjectsCard