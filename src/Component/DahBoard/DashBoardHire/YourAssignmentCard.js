import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const YourAssignmentCard = ({data}) => {

    const img='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg';

//       const [data, setdata] = useState({"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//       "name":"Web development project",
//       "level":"Top rated",
//       "desc" :"you have to create a e-commerce website ",
//       "rating":"5",
//       "price":"10,000"
//   })

  const Navigate=useNavigate();

  const handleclick=(id)=>{
     Navigate(`/ProjectDetails/${id}`)

  }

  return (
        <div className='  shadow-lg p-4 rounded-lg cursor-pointer  '
          onClick={()=>handleclick(data._id)}
        >
            <div className='flex flex-col gap-1'>
                <img className='border-2 border-black rounded-md' src={img}></img>
               <div className='flex flex-col pl-1 gap-2'>
                    <div className='flex justify-between mb-2 '>
                    <p className='font-bold font-sans'>{data.companyName}</p>
                <p className='bg-orange-300 px-2 py-1 rounded-lg text-orange-800 font-bold'>
                  {data.level}
                </p>
              </div>
              <p className='text-left text-slate-700 font-medium font-sans'>{data.ProjectSummary.split(' ').slice(0, 15).join(' ')}</p>
              <p className='text-left flex gap-2 items-center text-slate-500 font-medium font-sans'>
                {data.estimateTime} Time
              </p>
              <p className='text-left text-slate-500 font-medium font-sans'>Money $ {data.ProjectMoney}</p>
               </div>
                
            </div>
        </div>
      )
  
}

export default YourAssignmentCard