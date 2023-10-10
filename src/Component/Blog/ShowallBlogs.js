import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard'
import img1 from '../../images/The-Power-of-Chatbots-in-Streamlining-the-Recruitment-Process.jpg'
import { useNavigate } from 'react-router-dom'
import {Backend_Url} from '../../Path.js';


const ShowallBlogs = () => {
    const Navigate=useNavigate();
    const [data, setdata] = useState([])

            const handelclick=()=>{
                Navigate('/AddBlog')
            }
    

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${Backend_Url}/0auth/getAllBlogs`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            const result = await response.json();
            console.log(result.Blog);

            setdata(result.Blog);
            
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
    <div className='flex flex-col '>
         <p className='text-2xl text-black font-bold my-4'>Some  <span className='text-[#64CCC5]'>Blogs  </span> </p>
          <div className='flex justify-center   my-3 '>
              

          </div>
          <div className=' flex flex-col gap-4  sm:flex-row justify-center sm:flex-wrap my-3'>
            {   data.length>0?<>
            {       
            
                    data.map((item,index)=>(
                            <BlogCard data={item}/>
                        ))
                    }
            
            
            </>:<></>
                
            }
            
          </div> 
          

    </div>
  )
}

export default ShowallBlogs