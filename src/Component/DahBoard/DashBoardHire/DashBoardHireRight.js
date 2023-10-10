import React, { useEffect, useState } from 'react'
import JobDoneCard from '../DashBoarddeveloper/JobDoneCard';
import TaskApply from '../DashBoarddeveloper/TaskApply';
import TaskCard from '../DashBoarddeveloper/TaskCard';
import DashBoardLineCharts from '../DashBoarddeveloper/dashBoardChart/DashBoardLineChart';
import DashBoardVerticalCharts from '../DashBoarddeveloper/dashBoardChart/DashBoardVerticalChart';
import YourAssignmentCard from './YourAssignmentCard';
import DashBoardHirePreviosProjects from './DashBoardHirePreviosProjects';
import DashboradHireprojectAssigned from './DashboradHireprojectAssigned';
import { useNavigate, useParams } from 'react-router-dom';
import { Backend_Url } from '../../../Path';
import SettingRight from '../DashBoarddeveloper/SettingRight';
import CompletedProjectsCard from './CompletedProjectsCard';


const DashBoardHireRight = ({Active}) => {
    const[currentPage , setCurrentPage]=useState(1);
    const[currentPageC , setcurrentPageC]=useState(1);
    const [currentPageA, setcurrentPageA] = useState(1)
    const [currentPagePost, setcurrentPagePost] = useState(1)

    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [allPostByME, setallPostByME] = useState([])
    const Navigate=useNavigate();

    const [allAssignedP, setallAssignedP] = useState([]);
    const [allCompletedP, setallCompletedP] = useState([]);

    

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

//compelete project
const totalPagesC=Math.ceil(allCompletedP.length/itemsPerPage);
const startIndexComp=(currentPageC-1)*itemsPerPage;
const endIndexComp=startIndexComp+itemsPerPage;
const DisplayyourCompletedJobs=allCompletedP.slice(startIndexComp,endIndexComp);

////All asign p
const totalPagesA=Math.ceil(allAssignedP.length/itemsPerPage);
const startIndexA=(currentPageA-1)*itemsPerPage;
const endIndexA=startIndexA+itemsPerPage;
const DisplayallAssignedP=allAssignedP.slice(startIndexA,endIndexA);

// all asignment post by you
const totalPagesPost=Math.ceil(allPostByME.length/itemsPerPage);
const startIndexPost=(currentPagePost-1)*itemsPerPage;
const endIndexPost=startIndexPost+itemsPerPage;

const displayedItems = data.slice(startIndex, endIndex);

const DisplayyourJobPost=allPostByME.slice(startIndexPost,endIndexPost)


function calculateItemsPerPage() {
  if(window.innerWidth>1440){
         return 3;
  }
  else if(window.innerWidth>700){
      return 2;
  }
  else{
    return 1;
  }
  // return window.innerWidth < 768 ? 1 : 3; // Adjust as needed
}

const changePage=(str)=>{
   if(str=='i' && currentPage!=totalPages){
       setCurrentPage(currentPage+1);

   }
   else if(str=='d' && currentPage!=1){
    setCurrentPage(currentPage-1);
   }
}
const changePageC=(str)=>{
  if(str=='i' && currentPageC!=totalPagesC){
    setcurrentPageC(currentPageC+1);

  }
  else if(str=='d' && currentPageC!=1){
    setcurrentPageC(currentPageC-1);
  }
}

const changePageA=(str)=>{
  if(str=='i' && currentPageA!=totalPagesA){
    setcurrentPageA(currentPageA+1);

  }
  else if(str=='d' && currentPageA!=1){
    setcurrentPageA(currentPageA-1);
  }
}
const changePageCurrentPost=(str)=>{
  if(str=='i' && currentPagePost!=totalPagesPost){
    setcurrentPagePost(currentPagePost+1);

  }
  else if(str=='d' && currentPagePost!=1){
    setcurrentPagePost(currentPagePost-1);
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
  
    setItemsPerPage(calculateItemsPerPage());
  

  

  
}, []);

const {id}=useParams();

useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/ShowAllPostByHire/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
         
         setallPostByME(result.projects)
       
        
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


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/ShowAllAssignedProjectsByParticularHire/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
         
        setallAssignedP(result);
        console.log(allAssignedP);
        // console.log("lkdfjlkfjglkfjglkfjlkgj");
       
        
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


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/getallCompleteProjectByProjectId/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
         
        setallCompletedP(result);
        
        
       
        
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





const handlePostAdd=()=>{
      Navigate(`/JobPost/${id}`)
}





  return (
    <div className='h-auto p-4 mt-16 w-full flex flex-col items-center '>
             
                
                 {Active==1 &&
                 <>
                <div className='flex justify-center'>
                                    <p className='text-2xl font-bold '>Assignment Posted <span className='text-[#64CCC5]'>by you</span></p>    
                            </div>
                 <div className='flex flex-col gap-10'>
                     
                 <div className='flex gap-10 justify-center   mt-5'>

                        {    DisplayyourJobPost.map((item,index)=>(
                                <YourAssignmentCard data={item} />
                                // <MyComponent data={data}/>
                            ))
                        }
            
                </div>
                        
                         <div className="flex gap-6 justify-center ">
                           
                            
                            <div className='flex gap-4 items-center'>
                            
                            
                                <p
                                className={`${currentPagePost==1? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`} 
                                onClick={()=>changePageCurrentPost('d')} >Prev</p> 
                                    <p className='bg-[#EEEEEE] px-3 py-2 rounded-full' >
                                    {currentPagePost}
                                    </p>
                                <p 
                                className={`${currentPagePost==totalPagesPost? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`}
                                
                                onClick={()=>changePageCurrentPost('i')} >Next</p> 
                            
                            </div>
                           
                            
                        </div>
                 </div>
                 <div className='flex justify-center cursor-pointer mt-7'
                            onClick={()=>handlePostAdd()}
                            >

                            <p className='bg-[#053B50]  text-white hover:bg-[#176B87] w-24 px-3 py-2 rounded-lg'>Add Post</p>
                </div>
                 </>
                    
                 }

                {Active==2 &&
                    <>
                <div className='flex justify-center'>
                                    <p className='text-2xl font-bold '> On going <span className='text-[#64CCC5]'>Project</span>  </p>    
                            </div>
                <div className='flex flex-col gap-10'>
                    
                <div className='flex gap-10 justify-center   mt-5'>

                    {    DisplayallAssignedP?.map((item,index)=>(
                            <DashBoardHirePreviosProjects data={item}/>
                        ))
                    }

                </div>
                <div className="flex gap-6 justify-center ">
                           
                            
                           <div className='flex gap-4 items-center'>
                           
                           
                               <p
                               className={`${currentPageA==1? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`} 
                               onClick={()=>changePageA('d')} >Prev</p> 
                                   <p className='bg-[#EEEEEE] px-3 py-2 rounded-full' >
                                   {currentPageA}
                                   </p>
                               <p 
                               className={`${currentPageA==totalPagesA? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`}
                               
                               onClick={()=>changePageA('i')} >Next</p> 
                           
                           </div>
                          
                           
                       </div>
                </div>
                </>
                
                }
                
                {Active==0 &&
                    <>
                <div className='ml-[15vw] sm:ml-0 '>
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
                {Active==3 &&
                    <>
                    
                          <div className=' '>
                            
                                        <h1 className='  text-2xl font-bold mb-10 '>Your <span className='text-[#64CCC5]'>Information</span> </h1>

                            
                                        <div className=' flex flex-col xl:flex-row   '>
                                            
                                            <SettingRight/>

                                        </div>
                    </div>
                    
               
                
                </>
                
                }
                 {Active==5 &&
                 <>
                <div className='flex justify-center'>
                                    <p className='text-2xl font-bold '>Completed  <span className='text-[#64CCC5]'>Project</span></p>    
                            </div>
                 <div className='flex flex-col gap-10'>
                     
                 <div className='flex gap-10 justify-center   mt-5'>

                 {    DisplayyourCompletedJobs?.map((item,index)=>(
                            <CompletedProjectsCard data={item}/>
                        ))
                    }
                                
                                
                          
            
                </div>
                        
                         <div className="flex gap-6 justify-center ">
                           
                            
                            <div className='flex gap-4 items-center'>
                            
                            
                                <p
                                className={`${currentPageC==1? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`} 
                                onClick={()=>changePageC('d')} >Prev</p> 
                                    <p className='bg-[#EEEEEE] px-3 py-2 rounded-full' >
                                    {currentPageC}
                                    </p>
                                <p 
                                className={`${currentPageC==totalPagesC? 'opacity-10':''} bg-[#053B50] text-white px-3 py-2 rounded-lg cursor-pointer`}
                                
                                onClick={()=>changePageC('i')} >Next</p> 
                            
                            </div>
                           
                            
                        </div>
                 </div>
                
                 </>
                    
                 }
                
           </div>
  )
}

export default DashBoardHireRight