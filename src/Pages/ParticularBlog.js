import React, { useEffect, useState } from 'react'
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';
import img1 from '../images/The-Power-of-Chatbots-in-Streamlining-the-Recruitment-Process.jpg'
import { Backend_Url } from '../Path';
import { useParams } from 'react-router-dom';

const ParticularBlog = () => {
    const [data, setdata] = useState( { });

    const {id}=useParams();

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${Backend_Url}/0auth/getAllBlogsByID/${id}`, {
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
<>
<NavBar/>

<div className='my-6' >
   <div className='flex flex-col md:flex-row justify-around  '>
    <div className=' md:w-2/6 flex items-center' >
        
        <img src={img1}></img>

        
    </div>
   
      <div className='mt-3 px-8 md:px-0 md:w-3/6 flex flex-col gap-3 '>
           <p className='text-3xl font-bold text-left'>{data.Heading1}</p>
           <p className='text-left'>{data.Desc1}</p>
           <p className='text-xl font-bold text-left'>{data.subHeading1}</p>
           <p className='text-left'>{data.subdesc1}</p>
      </div>
   </div>
   <div className='px-8 mt-1'>
    <p className='text-lg font-bold text-left '>{data.subHeading2}</p>
    <p className='text-left'>{data.subdesc2}</p>
    <p className='text-lg font-bold text-left '>{data.subHeading3}</p>
    <p className='text-left'>{data.subdesc3}</p>
    <p className='text-lg font-bold text-left '>{data.subHeading4}</p>
    <p className='text-left'>{data.subdesc4}</p>

   </div>
</div>
<Footer/>
</>

)
}

export default ParticularBlog