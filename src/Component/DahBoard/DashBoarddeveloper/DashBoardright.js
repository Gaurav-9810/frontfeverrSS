import React, { useEffect, useState } from 'react'
import JobDoneCard from './JobDoneCard';
import TaskApply from './TaskApply';
import TaskCard from './TaskCard';
import DashBoardLineCharts from './dashBoardChart/DashBoardLineChart';
import DashBoardVerticalCharts from './dashBoardChart/DashBoardVerticalChart';
import SettingRight from './SettingRight';
import { Backend_Url } from '../../../Path';
import { Link } from 'react-router-dom';


const DashBoardright = ({Active}) => {
    const[currentPage , setCurrentPage]=useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3)

    const [allPost, setAllPost] = useState([]);
    

    const data=[
          {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"gaurav",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"gaurav",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"gaurav",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"kk",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"ll",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"gaurav",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"dd",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      },
      {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          "name":"lklk",
          "level":"Top rated",
          "desc" :"I will Create 2D animation explainer video and sales video",
          "rating":"5",
          "price":"10,000"
      }
]
const totalPages=Math.ceil(data.length/itemsPerPage);

const handlePageChange=(page)=>{
  setCurrentPage(page);
}

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedItems = data.slice(startIndex, endIndex);

function calculateItemsPerPage() {
  if(window.innerWidth>1440){
         return 3;
  }
  else if(window.innerWidth>640){
      return 2;
  }
  else{
    return 1;
  }
  // return window.innerWidth < 768 ? 1 : 3; // Adjust as needed
}

const changePage=(str,total)=>{
    
   if(str=='i' && currentPage!=total){
       setCurrentPage(currentPage+1);

   }
   else if(str=='d' && currentPage!=1){
    setCurrentPage(currentPage-1);
   }
}

// Update itemsPerPage when the window size changes
useEffect(() => {
  function handleResize() {
    setItemsPerPage(calculateItemsPerPage());
  }

  window.addEventListener('resize', handleResize);

  
}, [itemsPerPage]);


useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/showAllPost`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
         
         setAllPost(result)
       
        
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

    const explorearr=allPost.slice(startIndex,endIndex);
  return (
    <div className='h-auto mt-16  w-full flex flex-col items-center px-4 '>
             
                
                 {Active==1 &&
                <>
                <div className='flex flex-col items-center '>
                    <div className='flex justify-center mt-2 '>
                                          <p className='text-2xl font-bold '>Job Done <span className='text-[#64CCC5]'>By you</span>  </p>    
                      </div>
                      <div className='flex flex-col gap-10'>
                          
                      <div className='flex gap-10 justify-center   mt-5'>

                      
                                  <JobDoneCard  />
                          

                      </div>
                      
                      </div>
                </div>
                    
                </>
                    
                 }

                {Active==2 &&
                    <>
                <div className='flex justify-center mt-2'>
                                    <p className='text-2xl font-bold '>Job Applied<span className='text-[#64CCC5]'> By you </span> </p>    
                            </div>
                <div className='flex flex-col gap-10'>
                    
                <div className='flex gap-10 justify-center   mt-5'>

                   
                            <TaskApply  />
                     

                </div>
                
                </div>
                </>
                
                }
                {Active==3 &&
                    <>
                <div className='flex justify-center mt-2'>
                                    <p className='text-2xl font-bold '>All Jobs <span className='text-[#64CCC5]'>For you</span>  </p>    
                            </div>
                <TaskCard/>
                </>
                
                }
                {Active==0 &&
                    <>
                <div className='ml-[20vw] sm:ml-0 '>
                                    <p className='text-2xl font-bold mb-10 mt-2 '>Your <span className='text-[#64CCC5]'>Information</span> </p>
                                    <div className=' flex flex-col xl:flex-row   '>
                                        <div className=' w-[14rem] sm:w-[25rem]   lg:w-[50vw]  xl:w-[40vw] lg:h-[40vh]'>
                                              <DashBoardLineCharts/>

                                        </div>
                                        <div className=' w-[14rem] sm:w-[25rem]  lg:w-[50vw]  xl:w-[40vw] lg:h-[40vh]'>
                                              <DashBoardVerticalCharts/>    

                                        </div>

                                    </div>
                  </div>
                
                </>
                
                }
                {Active==4 &&
                    <>
                <div className='ml-[5%] sm:ml-0'>
                                    <p className='text-2xl font-bold mb-10 mt-4 '>Your <span className='text-[#64CCC5]'>Information</span> </p>
                                    <div className=' flex flex-col xl:flex-row   '>
                                        
                                        <SettingRight/>

                                    </div>
                </div>
                
                </>
                
                }
           </div>
  )
}

export default DashBoardright