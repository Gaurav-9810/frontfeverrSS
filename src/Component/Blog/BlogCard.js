import React from 'react'
import img from '../../images/The-Power-of-Chatbots-in-Streamlining-the-Recruitment-Process.jpg'
import { Link } from 'react-router-dom'

const BlogCard = ({data}) => {
  

    

  return (
    data?<>
     <div className='container w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/5 shadow-xl p-0  rounded-lg'>
          <div className='flex flex-col gap-1'>
            <img className ='mb-2' src={'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} alt='Blog Image' />
            <div className='flex flex-col items-start gap-2 px-2'>
              <p className='text-left font-bold font-sans'>{data.Heading1.split(' ').slice(0, 10).join(' ')}</p>
              <p className='text-left text-slate-700 font-medium font-sans mt-2'>{data.Desc1.split(' ').slice(0, 10).join(' ')}</p>
            </div>
            <div className='flex justify-center my-3'>
              <p  className='cursor-pointer hover:text-[#EEEEEE] hover:bg-[#176B87] bg-[#64CCC5] px-3 py-2 text-[#053B50] w-18 font-bold rounded-lg'
                
              >
              <Link className='hover:text-[#EEEEEE]' to={`/Blog/${data._id}`}>more</Link>  
              </p>
            </div>
          </div>
        </div>
    
    </>:<></>
       
      
   
  
  )
}

export default BlogCard