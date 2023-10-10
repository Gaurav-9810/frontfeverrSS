import React, { useState } from 'react'
import DropDown from './DropDown'
import  {BiLogoWhatsapp , BiLogoInstagram , BiLogoTwitter , BiLogoLinkedin , BiLogoYoutube , BiLocationPlus ,BiPhone , BiLogoGmail } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Maps from './Map/Maps';
import {BiAtom} from 'react-icons/bi';


const Footer = () => {
    const[show,setshow]=useState('0');
    const whatapp=(phoneNumber, message)=> {
      const whatsappBaseUrl = 'https://api.whatsapp.com/send';
      const encodedMessage = encodeURIComponent(message);
      console.log(`${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`);
      const url=`${whatsappBaseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(url, '_blank');
      
      
    }
    const phoneNumber = '9810654125'; // Replace with the recipient's phone number
    const message = 'Hello, how can I help you?'; 

    const handleClick=(c)=>{
          
                 if(show==c){    
                setshow('null');
          }
          else{
                setshow(c);
          }
          
         
    }
 
  return (

    <footer className='px-10 py-6 bg-[#053B50]  text-white w-full opacity-93  ' >

      <div className='container mx-auto px-auto'>
        <div className=' hidden  md:flex  flex-wrap  gap-10'>
          <div className='w-full  sm:w-1/4 md:w-1/6 lg:w-1/5 flex flex-col gap-2 font-sans text-left '>
            <p className='font-bold '><BiAtom size={'35'}/></p>
            <p className='cursor-pointer  hover:opacity-80 text-lg font-bold'><Link to='/'>Fiverr</Link></p>
            
          </div>
          <div className='w-full sm:w-1/4 md:w-1/5 lg:w-1/5 flex flex-col gap-2 font-sans text-left'>
            <p className='font-bold underline'>Quick Link</p>
            <p className='cursor-pointer text-sm hover:opacity-80 font-bold'><Link to='/'>Home</Link> </p>
            <p className='cursor-pointer text-sm hover:opacity-80 font-bold'><Link to='/contactUs'>Contact Us</Link></p>
            <p className='cursor-pointer text-sm hover:opacity-80 font-bold'><Link to='/service'>Service</Link></p>
            <p className='cursor-pointer text-sm hover:opacity-80 font-bold'><Link to='/AllBlogs'>Blogs</Link></p>
          </div>
          <div className='w-full sm:w-1/4 md:w-1/5 lg:w-1/5 flex flex-col gap-2 font-sans text-left'>
            <p className='font-bold underline'>Social Links</p>
            <div className='flex flex-col gap-2 '>

              <a onClick={()=>whatapp(phoneNumber,message)} className='cursor-pointer text-sm hover:opacity-80 flex gap-2' target='_blank'>
                <BiLogoWhatsapp size={25} />
                  <span className='font-bold flex flex-col justify-center'>WhatsApp</span>
              </a>
              <a  href='https://www.instagram.com/oragetechnologies/' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoInstagram size={'25'}/><span className='font-bold flex flex-col justify-center'>Insta</span> </p></a>
              <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FOfficialOrage' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoTwitter size={'25'}/><span className='font-bold flex flex-col justify-center'>Twitter</span> </p></a>
              <a href='https://in.linkedin.com/company/orage-technologies-private-limited' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoLinkedin size={'25'}/><span className='font-bold flex flex-col justify-center'>Linkedin</span></p></a>
              <a href='https://www.youtube.com/@OrageTechnologies' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoYoutube size={'25'}/><span className='font-bold flex flex-col justify-center'>Youtube</span></p></a>
            </div>
          
            
          </div>
          <div className='w-full sm:w-1/4 md:w-1/4 lg:w-1/4 flex flex-col gap-2 font-sans text-left'>
            <p className='font-bold underline'>Get In Touch</p>
           
            <a href="mailto:orage@gmail.com" className='flex gap-2'>
              <a  className='cursor-pointer  hover:opacity-80 flex gap-2'><BiLogoGmail size={'20'}/></a>
              <span className='font-bold flex sm:text-sm md:text-[12px] flex-col justify-center '>info@oragetechnologies.com</span>
            </a>
            <p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiPhone size={'20'}/><span className='font-bold flex flex-col justify-center'>9898989898</span></p>
            <p className='cursor-pointer  text-sm hover:opacity-80 flex gap-2'><BiLocationPlus size={'20'}/><span className='font-bold flex flex-col justify-center'>Noida
                <Maps/>
            </span></p>
          </div>
        </div>
            <div className='md:hidden '>
                <div>
                <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('1')}  >
                            <div className='  rounded-md pb-px  ' >
                    
                                
                                <h2  className='pl-2 font-semibold  text-left md:pl-4 text-White  py-2 flex justify-between  ' >Quick Link{show=='1'?<span className=' mr-4  ' >
                                <svg fill='white'  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                </span>:<span  className='mr-4 z-30'>
                                <svg fill='white'  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                    
                                </span>} </h2>  
                        
                        
                            { show=='1' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4 flex flex-col gap-1'>
                            
                                <Link to='/' className='cursor-pointer font-bold'>Home</Link>
                                <Link to='/contactUs' className='cursor-pointer font-bold'>Contact US</Link>
                                <Link to='/service' className='cursor-pointer font-bold'>Service</Link>
                                <Link to='/AllBlogs' className='cursor-pointer font-bold'>Blogs</Link>
                                
                            </p>
                            }
                            
                            </div>
                    </div>

                    <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('2')}  >
                            <div className='  rounded-md pb-px  ' >
                    
                                
                                <h2  className='pl-2 font-semibold  text-left md:pl-4 text-White  py-2 flex justify-between  ' >Social Link{show=='2'?<span className=' mr-4  ' >
                                <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                </span>:<span  className='mr-4 z-30'>
                                <svg fill='white'  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                    
                                </span>} </h2>  
                        
                        
                            { show=='2' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4 flex flex-col gap-2'>
                            
                                    <a onClick={()=>whatapp(phoneNumber,message)} className='cursor-pointer text-sm hover:opacity-80 flex gap-2' target='_blank'>
                                    <BiLogoWhatsapp size={25} />
                                      <span className='font-bold flex flex-col justify-center'>WhatsApp</span>
                                  </a>
                                  <a  href='https://www.instagram.com/oragetechnologies/' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoInstagram size={'25'}/><span className='font-bold flex flex-col justify-center'>Insta</span> </p></a>
                                  <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FOfficialOrage' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoTwitter size={'25'}/><span className='font-bold flex flex-col justify-center'>Twitter</span> </p></a>
                                  <a href='https://in.linkedin.com/company/orage-technologies-private-limited' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoLinkedin size={'25'}/><span className='font-bold flex flex-col justify-center'>Linkedin</span></p></a>
                                  <a href='https://www.youtube.com/@OrageTechnologies' target='_blank'><p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiLogoYoutube size={'25'}/><span className='font-bold flex flex-col justify-center'>Youtube</span></p></a>





                            </p>
                            }
                            
                            </div>
                    </div>
                    <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('3')}  >
                            <div className='  rounded-md pb-px  ' >
                    
                                
                                <h2  className='pl-2 font-semibold  text-left md:pl-4 text-White  py-2 flex justify-between  ' >Get in Touch{show=='3'?<span className=' mr-4  ' >
                                <svg fill='white'  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                                </span>:<span  className='mr-4 z-30'>
                                <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                    
                                </span>} </h2>  
                        
                        
                            { show=='3' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4 flex flex-col gap-2'>
                            
                            <a href="mailto:orage@gmail.com" className='flex gap-2'>
                              <a  className='cursor-pointer  hover:opacity-80 flex gap-2'><BiLogoGmail size={'20'}/></a>
                              <span className='font-bold flex sm:text-sm md:text-[12px] flex-col justify-center '>info@oragetechnologies.com</span>
                            </a>
                            <p className='cursor-pointer text-sm hover:opacity-80 flex gap-2'><BiPhone size={'20'}/><span className='font-bold flex flex-col justify-center'>9898989898</span></p>
                            <p className='cursor-pointer  text-sm hover:opacity-80 flex gap-2'><BiLocationPlus size={'20'}/><span className='font-bold flex flex-col justify-center'>Noida
                                <Maps/>
                            </span></p>



                            </p>
                            }
                            
                            </div>
                    </div>
                    
                    
                    
            </div>
            </div>
        <hr className=' mt-4 mb-3 bg-gray-200 border-0 rounded dark:bg-gray-700'  ></hr>
        <p className=' ml-4'>CopyRight @2023 <span className='font-bold'>Orage</span>. All Rights Reserved.</p>
            
      </div>
    </footer>
  )
}

export default Footer