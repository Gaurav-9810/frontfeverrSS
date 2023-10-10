import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import img1 from '../../images/The-Power-of-Chatbots-in-Streamlining-the-Recruitment-Process.jpg'
import { Link } from 'react-router-dom'
import { Backend_Url } from '../../Path'


const Blog = () => {
  const [data, setdata] = useState([])

  


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
  console.log(result.Blog[0]);

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
    data?<>
          <div className='flex flex-col '>
              <p className='text-2xl text-black font-bold my-4'>Our most Popular  <span className='text-[#64CCC5]'>Blogs  </span> </p>
                <div className=' flex flex-col gap-4  sm:flex-row sm:flex-wrap'>
                  {
                    data?<>
                    <BlogCard data={data[0]}/>
                    <BlogCard data={data[1]}/>
                    <BlogCard data={data[2]}/>
                    <BlogCard data={data[3]}/> 
                    
                    </>:<></>
                  }
                  {/* */}
                </div> 
                <div className='flex justify-center   my-3 '>
                <Link to='/AllBlogs'>
                    <p className=' cursor-pointer hover:text-[#EEEEEE] hover:bg-[#176B87] bg-[#64CCC5] px-3 py-2 text-[#053B50] w-18 font-bold rounded-lg '>
                     more</p> 
                     </Link>

                </div>

            </div>
    
    
    </>:<></>
    
  )
}

export default Blog