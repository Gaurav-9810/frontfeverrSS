import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../Utils/api';
import { Backend_Url } from '../../Path';
import {RxAvatar} from 'react-icons/rx'
import { BiSolidRightArrow,BiSolidDownArrow, BiSolidTrashAlt } from 'react-icons/bi';
import { useToast } from '@chakra-ui/react';

const NotificationCard = ({item}) => {
    const createdAt = new Date(item.createdAt);
    const [show, setshow] = useState(-1);

    const handleClick=(id)=>{
      
         setshow(id);
    } 

    // Format the date and time as a string
      const {id}=useParams();
    const formattedTime = createdAt.toLocaleString(); 

  const handledelete=async(notiid)=>{
    console.log(notiid);
    try{
      const response = await fetch(`${Backend_Url}/0auth/deleteNotification/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify({ notificationId: notiid }),
        credentials: 'include',
      });
      showToast('Notification Deleted','success');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
      
    }
    catch(err){
      console.log("in deleting notification"+err);
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
   
    <div className=" text-black border-2 bg-slate-50 mx-5 px-4 py-3 rounded-lg flex flex-col gap-4 relative opacity-70">
      <div className="flex gap-3 sm:flex-row flex-col">
        <RxAvatar size={'25'}/>
        <div className='flex gap-10'>
            <p className="font-bold">By Admin </p>
          <p className="font-bold">{formattedTime}</p>
        </div>
        
      </div>
      <div className='absolute top-0 right-5'>
          {show=='1' &&<span onClick={()=>handleClick('-1')}   className='cursor-pointer mr-4 p-2 ' >
                                 <BiSolidDownArrow size={'20'}/>
                                  </span>}
                                { show=='-1' && 
                                  <span  onClick={()=>handleClick('1')} className='mr-4 z-30 p-2 cursor-pointer'>
                                 <BiSolidRightArrow size={'20'}/>   
                                      
                                  </span>} 
      </div>
      {

        show==1&&<div className='relative'>
                <div className="flex sm:gap-3 sm:flex-row flex-col">
                      <p className="font-bold text-left">Message </p>
                      <p className='sm:ml-5 text-left'>{item.msg}</p>
                     
              </div>
              <BiSolidTrashAlt  className=' absolute bottom-1 right-0 ' onClick={()=>handledelete(item._id)} size={'20'}/>
                
          
          </div>
        
      }
      

      
    </div>
  )
}

export default NotificationCard