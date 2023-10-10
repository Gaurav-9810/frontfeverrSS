import React, { useState } from 'react'
import img1 from '../../images/The-Power-of-Chatbots-in-Streamlining-the-Recruitment-Process.jpg'
import BlogParts from './BlogParts';

const BlogContent = () => {
  const [data, setdata] = useState(
    {"heading":"Why Continuous Learning Is Essential for Career Growth",
      "subHeading" :"Introduction",
      "subpara":"Career Growth is more than just a buzzword in today's dynamic job market—it's a fundamental aspiration for professionals striving to excel in their chosen fields. In this era of rapid change, where the only constant is change itself, the importance of career growth cannot be overstated. One key element that fuels and sustains career growth is continuous learning.",
      "subH1":"The Concept of Continuous Learning:",
      "subdesc1":"Continuous learning is not confined to the classroom or formal education—it extends far beyond that. It is the ongoing process and never-ending of acquiring new knowledge, skills, and experiences throughout one's career. This dynamic approach to learning is essential in a world where industries evolve, technologies advance, and job roles transform faster than ever before.",
      "subH2":"The Concept of Continuous Learning:",
      "subdesc2":"Continuous learning is not confined to the classroom or formal education—it extends far beyond that. It is the ongoing process and never-ending of acquiring new knowledge, skills, and experiences throughout one's career. This dynamic approach to learning is essential in a world where industries evolve, technologies advance, and job roles transform faster than ever before.",
      "subH3":"The Concept of Continuous Learning:",
      "subdesc3":"Continuous learning is not confined to the classroom or formal education—it extends far beyond that. It is the ongoing process and never-ending of acquiring new knowledge, skills, and experiences throughout one's career. This dynamic approach to learning is essential in a world where industries evolve, technologies advance, and job roles transform faster than ever before.",
      "subH4":"Conclusion:",
      "subdesc4":"In conclusion, continuous learning is not just a pathway to career growth but a roadmap to success in today's competitive world. Career Growth supports your professional development journey by providing resources, guidance, and opportunities for continuous learning. Embrace continuous learning as a lifelong adventure, and watch your career soar to new heights. Your journey begins now.",
      "restpart":`Strategies for Incorporating Continuous Learning into Daily Life:
      To start your journey of continuous learning, practical strategies are essential. Setting clear learning goals, developing consistent learning habits, and leveraging various resources and platforms for accessing relevant learning materials are some of the ways you can integrate continuous learning into your daily life. Remember the value of mentorship and networking opportunities.
      
      Overcoming Challenges and Obstacles in Continuous Learning:
      While the benefits of continuous learning are undeniable, there are common barriers, such as time constraints and financial limitations, that individuals face. This section offers strategies and real-life success stories to inspire you to overcome these challenges and explore alternative learning methods.`
      ,
      "img":img1
    }
    )

    


  return (
    <div className='my-6' >
       <div className='flex flex-col md:flex-row justify-around  '>
        <div className=' md:w-2/6 flex items-center' >
            
            <img src={data.img}></img>

            
        </div>
       
          <div className='mt-3 px-8 md:px-0 md:w-3/6 flex flex-col gap-3 '>
               <p className='text-3xl font-bold text-left'>{data.heading}</p>
               <p className='text-left'>{data.subpara}</p>
               <p className='text-xl font-bold text-left'>{data.subH1}</p>
               <p className='text-left'>{data.subdesc1}</p>
          </div>
       </div>
       <div className='px-8 mt-1'>
        <p className='text-lg font-bold text-left '>{data.subH2}</p>
        <p className='text-left'>{data.subdesc2}</p>
        <p className='text-lg font-bold text-left '>{data.subH3}</p>
        <p className='text-left'>{data.subdesc3}</p>
        <p className='text-lg font-bold text-left '>{data.subH4}</p>
        <p className='text-left'>{data.subdesc4}</p>
        <p className='text-lg font-bold text-left '>{data.subH4}</p>
        <p className='text-left'>{data.restpart}</p>

       </div>
    </div>
  )
}

export default BlogContent