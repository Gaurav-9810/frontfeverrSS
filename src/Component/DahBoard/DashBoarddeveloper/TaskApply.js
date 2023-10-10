import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../../Path';
import { useNavigate, useParams } from 'react-router-dom';

const TaskApply = ({data}) => {
  const Navigate=useNavigate();

  const {id}=useParams();
  const img="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"

  const [ApplyJobDetails, setApplyJobDetails] = useState([]);
  const [itemsPerPage, setitemsPerPage] = useState(3)
  // const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${Backend_Url}/0auth/allProjectAplliedByDeveloper/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            console.log(response);
            const result = await response.json();
            console.log(result.projectFound);
            
            setApplyJobDetails(result.projectFound)
          
            
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
      }, [])
      

     


  return (

    <div className='flex flex-col gap-5 items-center'>
      <div className='flex gap-3'>
    {ApplyJobDetails.length > 0 ? (
      
      itemsToDisplay.map((item, index) => (
        <div
          key={item._id} // Use a unique key, such as the item's ID
          className='shadow-lg p-4 rounded-lg cursor-pointer'
          onClick={() => handlebu(item._id)}
        >
          <div className='flex flex-col gap-1'>
            <img className='border-2 border-black rounded-md' src={img} alt={`Image ${index}`} />
            <div className='flex flex-col pl-1 gap-2'>
              <div className='flex justify-between my-2'>
                <p className='font-bold font-sans'>{item.companyName}</p>
                <p className='bg-orange-300 px-2 py-1 rounded-lg text-orange-800 font-bold'>
                  {item.level}
                </p>
              </div>
              <p className='text-left text-slate-700 font-medium font-sans'>{item.ProjectSummary.split(' ').slice(0, 15).join(' ')}</p>
              <p className='text-left flex gap-2 items-center text-slate-500 font-medium font-sans'>
                {item.estimateTime} Time
              </p>
              <p className='text-left text-slate-500 font-medium font-sans'>Money $ {item.ProjectMoney}</p>
            </div>
          </div>
        </div>
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

export default TaskApply