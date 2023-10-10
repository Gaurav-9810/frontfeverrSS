import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Backend_Url } from '../../Path';
import {MdVerifiedUser} from 'react-icons/md'
import { Badge, Button, HStack, Text, VStack, useToast } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

const DeveloperForm = () => {
    const [name, setname] = useState('');
    const[city , setCity]=useState('');
    const[mobile, setMobile]=useState('');
    const [Country, setCountry] = useState('')
    const [Summary, setSummary] = useState('');
    const [skill, setSkill] = useState('');
    const [skillArary, setsetskillArary] = useState([]);
    const Navigate=useNavigate();
 
    const [Loading, setLoading] = useState(false);
    const [toastmsg, settoastmsg] = useState('');
    
 
  
    const { id } = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();
            setLoading(true);
          
            console.log("dshsdjfkh");
            try {
              if (name == '' || city == '' || mobile == '' || Country=='' || Summary =='') {
                showToast('Please Fill the Form','error');
                console.log("no data");
                
                return;
              }
              else{
                const response = await fetch(`${Backend_Url}/0auth/CreateDeveloperProfile/${id}`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ country:Country, city , summary:Summary , mobile ,name , skill:skillArary }),
                    credentials: 'include',
                  });
                  
                  
                  const responseData=await response.json();
                 console.log(responseData);
                if (response.status==200) {
                    showToast('Profile Updated','success');
                      Navigate(`/DashBoard/Developer/${id}`)
                          console.log('Created Hire Profile');
                }
                else {
                    showToast('Failed to make Profile','error');
                  console.error('Failed to make Profile');
                }    
              }  
            } catch (error) {
              console.error('Error:', error);
              
            }
            
          
        }   

    const addSkill=(e)=>{
        if (skill.trim() !=='') {
            
            skillArary.push(skill);
        }
        else{
            showToast('Skill cant be Empty','error');
            
            
        }


            setSkill("");
    }

    const removeskill = (itemToRemove) => {

        setsetskillArary((prevSkills) => {

          return prevSkills.filter((item) => item !== itemToRemove);
        });
      };


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
    
           
                <div className=" flex flex-col justify-center h-[100vh] mt-4  ">
                        
                <div className="flex justify-center ">
                    <div className=" w-3/4  md:w-2/5  shadow-2xl px-6 md:px-24 py-10  box-content rounded-xl ">
                        <VStack>
                          <MdVerifiedUser size={'40'}/>
                          <Text textColor={'#053B50'} fontSize={'2xl'}>Build Your Profile</Text>
                        

                        </VStack>
                        <form className="mt-6 " onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label
                                        for="name"
                                        className="text-left ml-4 block text-sm font-semibold text-gray-800"
                                    >
                                        Name 
                                    </label>
                                    <input
                                    required={true}
                                        onChange={(e)=>setname(e.target.value)}
                                        className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                        
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
                                        for="Country"
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
                        
                                    <HStack>

                                   
                                        <input
                                        placeholder='Skills ...'
                                       
                                        value={skill}
                                        onChange={(e)=>setSkill(e.target.value)}
                                        className="block w-full px-4 py-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                        <Button onClick={(e)=>addSkill()} bg={'#053B50'} textColor={'white'}>ADD</Button>
                                      
                                        
                                  
                                     
                                        </HStack>
                                
                                <div className="mb-2 flex gap-2 flex-wrap">
                                            {
                                            skillArary.map((item,index)=>(
                                          <HStack mt={'2'}>

                                               
                                                <Badge p={'2'} borderRadius={'full'}> 
                                                    <HStack>
                                                   <Text>
                                                     {item}
                                                    </Text>
                                                    <AiOutlineClose onClick={()=>removeskill(item)}/>
                                                    </HStack>
                                                    </Badge>
                                               
                                                </HStack>
                                            

                                            ))
                                        }
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
       
   
      
         
      
      </>
     
    
    );
}

export default DeveloperForm