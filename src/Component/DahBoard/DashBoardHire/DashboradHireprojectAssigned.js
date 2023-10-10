import React, { useState } from 'react'

const DashboradHireprojectAssigned = () => {
  
  const [data, setdata] = useState({"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  "name":"Web development project",
  "level":"Top rated",
  "desc" :"you have to create a e-commerce website ",
  "rating":"5",
  "price":"10,000"
})


return (
  <div className='  shadow-lg p-4 rounded-lg'>
      <div className='flex flex-col gap-1'>
          <img className='border-2 border-black' src={data.img}></img>
      <div className='flex flex-col pl-1 gap-2'>
              <div className='flex justify-between mb-2 '>
                      <p>Company Name</p> 
                      <p className='bg-slate-600 px-2 py-1 rounded-lg text-slate-400 font-bold'>
                          Assigned
                      </p> 
                  </div> 
                  <p className='text-left text-slate-700 font-medium'>You have to make the e-Commerce web-app</p>
                  <p className='text-left flex gap-2 items-center'>
                  5 Days
                      
                      Time
                  </p>
                  <p className='text-left'>Your bid $ {data.price}</p>
      </div>
          
      </div>
  </div>
)
}

export default DashboradHireprojectAssigned