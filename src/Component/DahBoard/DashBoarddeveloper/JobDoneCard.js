import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../../Path';
import { useNavigate, useParams } from 'react-router-dom';
import CompletedProjectDev from './CompletedProjectDev';

const JobDoneCard = ({data}) => {

  const Navigate=useNavigate();

  const {id}=useParams();
  

  const [ApplyJobDetails, setApplyJobDetails] = useState([]);
  const [itemsPerPage, setitemsPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1);

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${Backend_Url}/0auth/getallCompleteProjectByUserId/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            console.log(response);
            const result = await response.json();
            console.log(result);
            
            setApplyJobDetails(result)
          
            
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

      const handlebu=(id)=>{
        console.log("hello");
         Navigate(`/ProjectDetails/${id}`)
      }


      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Slice the items to display only those within the calculated range
      const itemsToDisplay = ApplyJobDetails.slice(startIndex, endIndex);

      

      // Calculate the total number of pages based on the number of items and items per page
      const totalPages = Math.ceil(ApplyJobDetails.length / itemsPerPage);

      const handlePageChange = (newPage) => {
        // Ensure the newPage is within valid bounds (1 to totalPages)
        if (newPage >= 1 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
      };

      const changePage=(str,total)=>{
        if(str=='i' && currentPage!=total){
          setCurrentPage(currentPage+1);
   
      }
      else if(str=='d' && currentPage!=1){
       setCurrentPage(currentPage-1);
      }
      }

      useEffect(() => {
        if(window.innerWidth>1440){
          setitemsPerPage(3);
            }
            else if(window.innerWidth>640){
              setitemsPerPage(2);
            }
            else{
              setitemsPerPage(1);
            }
      
        return () => {
          
        }
      }, [window.innerWidth])
      

     


return (

    <div className='flex flex-col gap-5 items-center '>
      <div className='flex gap-3'>
    {ApplyJobDetails.length > 0 ? (
      
      itemsToDisplay.map((item, index) => ( 
        <CompletedProjectDev data={item}/>
      ))
    ) : (
      <p>No projects applied to.</p>
    )}
    </div>

<div className="flex gap-6 justify-center mb-4 ">
                           
                            
                           <div className='flex gap-4 items-center'>
                           
                           
                               <p
                               className={`${currentPage==1? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`} 
                               onClick={()=>changePage('d',ApplyJobDetails.length)} >Prev</p> 
                                   <p className='bg-[#EEEEEE] px-3 py-2 rounded-full' >
                                   {currentPage}
                                   </p>
                               <p 
                               className={`${currentPage==totalPages? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`}
                               
                               onClick={()=>changePage('i',ApplyJobDetails.length)} >Next</p> 
                           
                           </div>
                          
                           
                       </div>
  </div>
 
    
  )
}

export default JobDoneCard