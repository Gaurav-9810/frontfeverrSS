import React, { useEffect, useState } from 'react'
import ProfileContact from './ProfileContact';

const ProfileRest = ({ProfileData}) => {
 const [summary, setsummary] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus odio ac maximus tempor.
 Sed sodales, quam non dignissim tristique, mi magna dictum enim, eu gravida dolor nibh sollicitudin ante.
  Nam vitae enim mi. Cras porttitor sed dui a malesuada. Curabitur auctor aliquet ex, quis tincidunt nulla finibus interdum.
   Quisque sagittis porttitor elit, vitae finibus neque mollis eget. Donec vulputate elementum est, non vehicula nisi mattis quis.`)


   const [summaryOpen, setsummaryOpen] = useState(false);
   const [editSummary, seteditSummary] = useState('');
   const handleupdate=()=>{
    console.log(editSummary);
    setsummary(editSummary);
    console.log(summary);
    seteditSummary('');

   }

   useEffect(() => {
     
     
    
   }, [summary]);

    return (
    ProfileData[0]?<></>:

        <div className='flex flex-col  sm:flex-row ml-4 mb-2 gap-5 sm:gap-0 sm:justify-evenly  font-sans  '>
            <div className='flex flex-col gap-2 p-2 sm:w-2/4 w-3/4 mx-auto sm:mx-0  bg-[#EEEEEE] relative'>
                <p className='text-left text-3xl font-bold'>Profile bio</p>
                <div>
                    <p className='text-left text-lg font-medium font-sans underline'>
                        {/* {ProfileData[0]?.summary} */}
                    </p>
                    <p className='text-left text-[#053B50]'>
                        {ProfileData[0]?.summary}
                            
                    </p>
                    <div className='absolute right-10 top-4'>
                     <svg 
                      onClick={()=>setsummaryOpen(true)}
                     className='fill-[#176B87] cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>

                     </div>


                </div>
                {  summaryOpen && 
                    <div className='absolute left-4 w-60 sm:w-96 h-64 flex flex-col gap-3 '>
                        <div className='w-64 sm:w-96 h-64 px-4'>
                            <textarea
                               onChange={(e)=>seteditSummary(e.target.value)}
                            className='w-full h-full cursor-text bg-white'/>
                            
                         </div>
                         <svg
                             onClick={()=>setsummaryOpen(false)}
                             className={` fill-[#176B87] cursor-pointer absolute top-0 right-0`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                       
                       <div className='flex justify-center'
                         onClick={()=>handleupdate()}
                       >
                            <p 
                             onClick={()=>setsummaryOpen(false)}
                            className='bg-[#176B87] cursor-pointer rounded-md text-white px-2 py-1 w-20'>Update</p>
                        
                        </div>
                        
                    </div>
                   

                }

            </div>
                <ProfileContact mobile={ProfileData[0]?.mobile} email={ProfileData[0]?.email} />
        </div>
    )
}

export default ProfileRest