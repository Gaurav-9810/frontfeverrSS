import React, { useState } from 'react'
import ClientCard from './ClientCard'

const Client = () => {

  const [data, setdata] = useState({"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  "name":"gaurav",
  "level":"Top rated",
  "desc" :"I will Create 2D animation explainer video and sales video",
  "rating":"5",
  "price":"10,000"
})

  return (
    <div className='flex flex-col '>
         <p className='text-2xl text-black font-bold my-4'>Some of the <span className='text-[#64CCC5]'>Task of the Client's </span> </p>
          <div className=' flex flex-col gap-4  sm:flex-row sm:flex-wrap'>
            <ClientCard data={data}/>
            <ClientCard data={data}/>
            <ClientCard data={data}/>
            <ClientCard data={data}/>
          </div> 
          <div className='flex justify-center   my-3 '>
              <p className=' cursor-pointer hover:text-[#EEEEEE] hover:bg-[#176B87] bg-[#64CCC5] px-3 py-2 text-[#053B50] w-18 font-bold rounded-lg '>more</p> 

          </div>

       </div>
  )
}

export default Client