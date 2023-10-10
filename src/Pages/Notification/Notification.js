import React, { useEffect, useState } from 'react'
import DashNav from '../../Component/DahBoard/DashBoarddeveloper/DashNav';
import { Backend_Url } from '../../Path';
import { useParams } from 'react-router-dom';
import NotificationCard from '../../Component/Notificationc/NotificationCard';
import NavBar from '../../Component/DahBoard/DashBoarddeveloper/DashNav';
import Footer from '../../Component/Footer';
import { Stack } from '@chakra-ui/react';
const Notification = () => {
    const [data, setdata] = useState([])

   const {id}=useParams();

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${Backend_Url}/0auth/getNotification/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            const result = await response.json();
            console.log(result.Notification);

            setdata(result.Notification);
           
             
           
            
             
             
            
           
            
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchData();
    
        // Return a cleanup function
        return () => {
          
        };
      }, []);


  return (
    
<>
     {/* <div className="flex flex-col justify-between "> */}
         <NavBar/>
         <div className='  h-[100%]  flex flex-col gap-4 py-4'>
              <div className='  flex flex-col gap-4 pt-4'>
                  <p className='text-2xl font-bold text-black'>All <span className='text-[#64CCC5]'>Notification's</span></p>
                  <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
              height:4px;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #053B50; // Color of the scrollbar thumb
              border-radius: 4px; // Adjust the thumb's border radius
            }
          `}
        </style>
      <Stack h={'70vh'} overflowY={'auto'} >
                  <div className='flex flex-col gap-4'>
                        {
                          data.length>0?<>
                            {data?.map((item,index)=>(
                              <>
                              <NotificationCard item={item}/> 
                           
                              </>
                            
                            
                            ))
                          }
                        </>:<><p>No Messages</p></>
                        
                    }
                  </div>
                        </Stack>
                
            </div>
         </div>
<Stack h={'30vh'}>

         <Footer/>
</Stack>
         
         </>
    //  {/* </div> */}
  )
}

export default Notification