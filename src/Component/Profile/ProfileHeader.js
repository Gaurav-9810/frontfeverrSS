import React, { useEffect, useState } from 'react'

const ProfileHeader = ({ProfileData}) => {
   const [coreSkill, setcoreSkill] = useState([])
  const [addskill,setaddSkill]= useState(false);
  const [skill, setskill] = useState('')

   const handladdButton=(str)=>{
    console.log(str);
        coreSkill.push(str);
        setskill('');
   }

   useEffect(() => {
     
     
    
   }, coreSkill)

 

   const removeaddSkill=(str, i)=>{
    console.log(str);
    setcoreSkill(coreSkill.filter((data) => data !== str));
   }
//    console.log(ProfileData[0].name)
   

useEffect(() => {
    async function fetchData() {
        if(ProfileData[0]?.skill)
         setcoreSkill(ProfileData[0]?.skill);
    }

    fetchData();

    // Return a cleanup function
    return () => {
      // Perform any cleanup actions here if needed
    };
  }, [ProfileData]);


    return (

        <>{
 !ProfileData[0]?<>
 <div className=''>
        <div className='flex justify-center py-10 bg-[#176B87] ' >
            <div className='w-2/12 '>
                <img className='rounded-full  w-20 h-20 lg:w-40 lg:h-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNofDeymYIece5QEl4VAXCCtruE1skQo3TGRZuRoWJ&s"></img>

            </div>
            <div className='w-6/12 text-[#EEEEEE] text-left flex flex-col gap-2 justify-center pl-7'>
                <p className='text-2xl font-medium'>{ProfileData[0]?.name || 'Name'}</p>
                <p className='text-xl font-medium'>Web Developer</p>
                <p className='text-sm font-medium'>{ProfileData[0]?.city +","+ ProfileData[0]?.country}</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center sm:flex-row gap-3 py-5 relative'>
                <div className='w-1/4  flex items-center justify-end '>
                     <p className='text-lg font-bold mr-6'>My Core Skill : </p>

                </div>
                     <div className='flex w-3/4  gap-3 flex-wrap  '>
                        {
                            coreSkill.map((data,index)=>(
                                <div className='bg-[#EEEEEE] px-2 py-3 rounded-lg flex'>

                                    <p  className=' text-[#176B87]'>{data}</p>
                                    <svg
                                     onClick={()=>removeaddSkill(data,index)}
                                    className={`${addskill?'':'hidden'} fill-[#176B87]`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                                </div>
                            ))
                        }
                        
                     </div>
                     <div className='absolute right-10 top-4'>
                     <svg 
                      onClick={()=>setaddSkill(true)}
                     className='fill-[#176B87]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>

                     </div>
            </div>
            {
                addskill && 
                <div className='flex justify-center mx-auto  p-10 shadow-lg w-72 relative '>
                    <div className='flex  w-60 '>
                        <div className='flex  '>
                            <input
                              onChange={(e)=>setskill(e.target.value)}
                            className='px-1 py-2 rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none border-[1px]' placeholder='add skill'></input>
                            <button 
                             onClick={()=>handladdButton(skill)}
                            className='bg-[#053B50] text-white rounded-lg px-3 py-2'>add</button>
                        </div> 
                        
                        
                    </div>
                    <svg 
                      onClick={()=>setaddSkill(false)}
                    className={` fill-[#176B87] absolute right-2 top-2 `} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                
                </div>
            }
           
        </div>
        
    </div>
 
 
 
 </>:<></>


        }</>
    
    
  )
}

export default ProfileHeader