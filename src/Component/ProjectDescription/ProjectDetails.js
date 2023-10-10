import React, { useEffect, useState } from 'react'
import AppliedUser_Project from './AppliedUser_Project'
import { useParams } from 'react-router-dom'
import { Backend_Url } from '../../Path';
import { useToast } from '@chakra-ui/react';

const ProjectDetails = () => {

  const [JobDetails, setJobDetails] = useState({})
  const {id}=useParams();
  const [details, setdetails] = useState([]);
 
  
  
 const role=localStorage.getItem('role');

useEffect(() => {
    async function fetchData() {
      try {
        

        const response = await fetch(`${Backend_Url}/0auth/GetProjectDetialsByProjectID/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const result = await response.json();
        console.log(response);
       
         
         setJobDetails(result.project);
         
        
         
         setdetails(result.project.appliedUser);
         console.log(details)
       
        
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();

    // Return a cleanup function
    return () => {
      
    };
  }, []);



  // useEffect(() => {
  //   async function fetchData1() {
  //     try {
        

  //       const response = await fetch(`${Backend_Url}/0auth/isApplied/${id}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         credentials: 'include',
  //       });
  //       const result = await response.json();
  //       console.log(result);
       
         
         
         
        
         
        
         
       
        
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   fetchData1();

  //   // Return a cleanup function
  //   return () => {
      
  //   };
  // }, []);


  

  const handleApply=async(id)=>{
    try {
      const response = await fetch(`${Backend_Url}/0auth/taskApply/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      console.log(response);
      
      const result = await response.json();
      if(result.eligible==false){
        showToast('you are not eligible because of your rating','error');
        
         return 
      }
      showToast('Applied ', 'success');
      
        console.log(result);
        setTimeout(() => {
           window.location.reload();  
        }, 1000);
     
     
      
      
      
    
      
    } catch (err) {
      console.error(err);
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
    <div>
            <p className='text-2xl font-bold my-4'>{JobDetails.companyName}</p>
        <div className='flex flex-col md:flex-row mx-10  md:gap-20 '>
             <img className='w-[30vw] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97aX6dI3-1e-M965NIk69aYgOTCvJJam6UA&usqp=CAU'></img>
             <div className='text-left flex flex-col gap-3 mt-10' >
                <p className='text-lg font-bold font-sans text-[#6b6868]'>Project Details</p>
                <p className='text-base font-semibold font-sans text-[#6b6868]'>{JobDetails.ProjectSummary}
                </p>
                <p>$ {JobDetails.ProjectMoney}</p>
             </div>

        </div>
        <div className=' my-4 flex flex-col gap-4'>
          <p className='text-2xl font-bold text-[#053B50] text-center'>Who applied for <span className='text-[#64CCC5]'> the job</span></p>
          <div className=' flex flex-col gap-2'>
              {
                details.map((data,index)=>(
                  <AppliedUser_Project data={data} amount={JobDetails.ProjectMoney} />
                ))
              }

          </div>
          
        </div>
        {
          role=='Hire' ?<></>:<><div className='flex justify-center cursor-pointer mb-2'
                 onClick={()=>handleApply(id)}
                >

                <p className='bg-[#053B50]  text-white hover:bg-[#176B87] w-24 px-3 py-2 rounded-lg'>Apply</p>
       </div></>
        }
        
    </div>
  )
}

export default ProjectDetails