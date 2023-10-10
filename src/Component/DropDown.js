import React, { useState } from 'react'

const DropDown = () => {
    const[show,setshow]=useState('1');

    const handleClick=(c)=>{
          
                 if(show==c){    
                setshow('null');
          }
          else{
                setshow(c);
          }
          
         
    }

  return (
    <div>
            <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('1')}  >
                        <div className='  rounded-md pb-px  ' >
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-black  py-2 flex justify-between  ' >Business{show=='1'?<span className=' mr-4  ' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </span>:<span  className='mr-4 z-30'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                
                            </span>} </h2>  
                       
                       
                        { show=='1' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4'>
                           
                            <p>About Business Solutions</p>
                            <p>Fiverr Pro</p>
                            <p>Fiverr Certified</p>
                            <p>Fiverr Enterprise</p>
                            <p>Clear Voice</p>
                            <p>Working Not Working</p>
                            <p>Contact Sales</p>
                        </p>
                        }
                        
                        </div>
                  </div>

                  <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('2')}  >
                        <div className='  rounded-md pb-px  ' >
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-black  py-2 flex justify-between  ' >Business{show=='2'?<span className=' mr-4  ' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </span>:<span  className='mr-4 z-30'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                
                            </span>} </h2>  
                       
                       
                        { show=='2' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4'>
                           
                            <p>About Business Solutions</p>
                            <p>Fiverr Pro</p>
                            <p>Fiverr Certified</p>
                            <p>Fiverr Enterprise</p>
                            <p>Clear Voice</p>
                            <p>Working Not Working</p>
                            <p>Contact Sales</p>
                        </p>
                        }
                        
                        </div>
                  </div>
                  <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('3')}  >
                        <div className='  rounded-md pb-px  ' >
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-black  py-2 flex justify-between  ' >Business{show=='3'?<span className=' mr-4  ' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </span>:<span  className='mr-4 z-30'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                
                            </span>} </h2>  
                       
                       
                        { show=='3' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4'>
                           
                            <p>About Business Solutions</p>
                            <p>Fiverr Pro</p>
                            <p>Fiverr Certified</p>
                            <p>Fiverr Enterprise</p>
                            <p>Clear Voice</p>
                            <p>Working Not Working</p>
                            <p>Contact Sales</p>
                        </p>
                        }
                        
                        </div>
                  </div>
                  <div className='lg:mr-4 lg:ml-4 mb-4  rounded-md cursor-pointer  ' onClick={()=>handleClick('4')}  >
                        <div className='  rounded-md pb-px  ' >
                
                              
                            <h2  className='pl-2 font-semibold  text-left md:pl-4 text-black  py-2 flex justify-between  ' >Business{show=='4'?<span className=' mr-4  ' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </span>:<span  className='mr-4 z-30'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>    
                                
                            </span>} </h2>  
                       
                       
                        { show=='4' &&  <p   className=' mb-2  faq-question rounded-b-md  py-2 px-3  text-left md:px-8 md:py-4'>
                           
                            <p>About Business Solutions</p>
                            <p>Fiverr Pro</p>
                            <p>Fiverr Certified</p>
                            <p>Fiverr Enterprise</p>
                            <p>Clear Voice</p>
                            <p>Working Not Working</p>
                            <p>Contact Sales</p>
                        </p>
                        }
                        
                        </div>
                  </div>
                  
                  
        </div>
  )
}

export default DropDown