import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Backend_Url } from '../../Path';
import { Text, VStack, useToast } from '@chakra-ui/react';
import {BsBuildingCheck} from 'react-icons/bs'

const HireProfileForm = () => {
    const [email, setemail] = useState('');
    const[company , setCompany]=useState('');
    const[city , setCity]=useState('');
    const[mobile, setMobile]=useState('');
    const [Summary, setSummary] = useState('');
    const [Country, setCountry] = useState('');
    
    const [Loading, setLoading] = useState(false);
    const [toastmsg, settoastmsg] = useState('');
    

    const Navigate=useNavigate();
    
 
  
    const { id } = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();
            setLoading(true);
          
            console.log("dshsdjfkh");
            try {
              if (company == '' || city == '' || mobile == '' || Country=='' || Summary =='') {
                showToast('Please fill all details ','error');
                console.log("no data");
                
                return;
              }
              else{
                const response = await fetch(`${Backend_Url}/0auth/CreateHireProfile/${id}`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ country:Country, city , summary:Summary , mobile ,name:company  }),
                    credentials: 'include',
                  });
                  
                  
                  const responseData=await response.json();
                 console.log(responseData);
                if (response.status==200) {
                    showToast('profile added','success');
                      Navigate(`/DashBoard/Hire/${id}`)
                          console.log('Created Hire Profile');
                }
                else {
                    showToast('error happened','error');
                  console.error('Failed to make post');
                }    
              }  
            } catch (error) {
              console.error('Error:', error);
              
            }
            
          
        }   
        const toast = useToast();
        const showToast = (text,color) => {
          toast({
            title: text,
            position: 'top',
            isClosable: true,
            status:color,
            
          })
        };
  
    return (
      <>
      <div className='h-full mt-4 '>
           
            
            <div className=" flex flex-col mt-24   ">
                    
            <div className="flex justify-center mx-4 sm:mx-0 ">
                <div className="  w-3/4  md:w-2/5  border-1  px-6 sm:px-24 py-10  box-content rounded-xl">
                    <VStack>
<BsBuildingCheck size={'40'}/>
<Text textColor={'#053B50'} fontSize={'2xl'}>Register Oragnization</Text>
                   
                    </VStack>
                    <form className="mt-6" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label
                                    for="Company Name"
                                    className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                >
                                Oragnization
                                </label>
                                <input
                                required={true}
                                onChange={(e)=>setCompany(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    for="City"
                                    className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                >
                                City
                                </label>
                                <input
                                required={true}
                                onChange={(e)=>setCity(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    for="Mobile"
                                    className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                >
                                Country
                                </label>
                                <input
                                required={true}
                                onChange={(e)=>setCountry(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    for="Mobile"
                                    className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                >
                                Mobile
                                </label>
                                <input
                                required={true}
                                onChange={(e)=>setMobile(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div>
                            <label
                                    for="Summary"
                                    className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                >
                                    Summary
                                </label>
                                <textarea
                                required={true}
                                className={`block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40`}
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="Your message"
                                defaultValue={""}
                                value={Summary}
                                onChange={(e) => setSummary(e.currentTarget.value)}
                                />
                            </div>
                            <div className="mt-6">
                                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                                    Submit
                                </button>
                            </div>
                        </form>
                </div>
    
            </div>
    
        </div>
      </div>
      
      
      </>
     
    
    );
}

export default HireProfileForm