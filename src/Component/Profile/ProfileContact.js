import React, { useEffect, useState } from 'react'

const ProfileContact = ({ProfileData}) => {

        const [Data, setData] = useState([]);

    const [profilegmail, setprofilegmail] = useState('')
    const [profileNumber, setprofileNumber] = useState('')


    const [isopen, setisopen] = useState(false)


 const [number, setnumber] = useState('');
 const [gmail, setgmail] = useState('');
 const handleclick =(gmail, number)=>{
    console.log(gmail);
    console.log(number);
    setprofileNumber(number);
    setprofilegmail(gmail);
    setisopen(false);
 }

 useEffect(() => {
        async function fetchData() {
            if(ProfileData[0]?.email && ProfileData[0]?.mobile){
               setprofilegmail(ProfileData[0]?.email);
               setprofileNumber(ProfileData[0]?.mobile);
            }
             
        }
    
        fetchData();
    
        // Return a cleanup function
        return () => {
          // Perform any cleanup actions here if needed
        };
      }, [ProfileData]);
 

  


  return (
    <div className=' w-3/4 sm:w-2/6 mx-auto bg-[#EEEEEE] p-2'>
                    <div className=' flex relative'>
                       <div className=''>
                        
                                <p className='text-xl font-bold text-left'>Contact Details</p>
                                <p className='text-md text-left text-[#053B50] flex '>Mobile No : <span className=''>{profileNumber}</span>
                                </p>
                                <p className='text-md text-left text-[#053B50] flex  '>Email : <span className=''>{profilegmail}</span>
                                
                                
                                </p>

                                { isopen &&
                                < div className='flex flex-col gap-3 bg-slate-200 absolute top-0 px-2 py-2'>
                                        <div className='flex  '>
                                                <input
                                                
                                                onChange={(e)=>setgmail(e.target.value)}
                                                className='px-1 py-2 rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none border-[1px]' placeholder='add Email'></input>
                                            
                                        </div>
                                        <div className='flex  '>
                                                <input
                                                
                                                onChange={(e)=>setnumber(e.target.value)}
                                                className='px-1 py-2 rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none border-[1px]' placeholder='add Number'></input>
                                                
                                        </div>
                                        <button 
                                                onClick={()=>handleclick(gmail,number)}

                                                className='bg-[#053B50] text-white rounded-lg px-3 py-2'>add</button>
                                </div> 
                                }
                        
                        </div>
                        <svg 
                            onClick={()=>setisopen(true)}
                            className='fill-[#176B87]' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>


                    <svg 
                        onClick={()=>setisopen(false)}
                        className={`${isopen==false?'hidden':''} fill-[#176B87] absolute right-2 top-2 `} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>


                    </div>

    </div>
  )
}

export default ProfileContact