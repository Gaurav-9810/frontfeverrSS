import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Backend_Url } from "../../Path.js";
import api from '../../Utils/api.js';
import { HStack, Stack, VStack, useToast } from '@chakra-ui/react';
import {MdOutlineWorkHistory, MdWorkOutline} from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi';
const NewProjectForm = () => {
    const [CompanyName, setCompany] = useState('');
    const[estimateTime , setestimateTime]=useState('');
    const[Technology, setTechnology]=useState('');
    const [ProjectSummary, setProjectSummary] = useState('')
    const [ProjectMoney, setProjectMoney] = useState('');
    const [level , setLevel]=useState("Bronze");
   
    const [Loading, setLoading] = useState(false);
    const [toastmsg, settoastmsg] = useState('');
    const Navigate=useNavigate();

    const [byteArray, setByteArray] = useState(null);
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const arrayBuffer = e.target.result;

        if (arrayBuffer) {
          const byteArray = new Uint8Array(arrayBuffer);
          console.log('Byte Array:', byteArray);

          // Set the byte data in state
          setByteArray(JSON.stringify(Array.from(byteArray)));

          // Optionally, you can store it in local storage
          // localStorage.setItem('myByteArray', JSON.stringify(Array.from(byteArray)));
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };
    
 
    const { id } = useParams();
const handleSubmit = async (e) => {
    e.preventDefault();
        setLoading(true);
      
        console.log("dshsdjfkh");
        try {
          if (CompanyName == '' || estimateTime == '' || Technology == '') {
            showToast('Please fill all details ','error');
            console.log("no data");
           
            return;
          }
          else{
            const response = await fetch(`${Backend_Url}/0auth/createProject/${id}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ technology:Technology, estimateTime , ProjectSummary , ProjectMoney , CompanyName ,level  }),
                credentials: 'include',
              });
              
              
              const responseData=await response.json();
             console.log(responseData);
            if (response.status==200) {
              showToast('task Posted ','success');
                  Navigate(`/DashBoard/Hire/${id}`)
                      console.log('task Posted', Technology);
            }
            else {
              showToast('Failed to make post ','error');
              console.error('Failed to make post');
            }    
          }  
        } catch (error) {
          console.error('Error:', error);
          
        }
        
      
    } 
    


    useEffect(() => {
      async function fetchData() {
        try {
          const response = await api.get(`/getDetailsByID/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              },
            credentials: 'include',
          });
    
          console.log('dashborad called'); // Check if "hello" is printed
    
          if (response.status === 200) {
            const { userData } = response.data;
            console.log(userData);
           
          } else {
            console.error('Response not OK:', response.status);
          }
        } catch (error) {
          console.error('Error:', error); // Log any errors
        }
      }
    
      fetchData(); // Call the fetchData function
    
      // Specify dependencies for the useEffect hook (e.g., id, apiBaseUrl)
    }, [id]);
    
    
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
        
    <Stack >
       
          <div className=" flex flex-col mt-14   ">
                
          <div className="flex  justify-center mx-4 sm:mx-0 ">
              <div className=" border-1  w-3/4  md:w-2/5  px-6 sm:px-24 py-10  box-content rounded-xl">
            <HStack><Link to={`/DashBoard/Hire/${id}`}><BiArrowBack size={'20'}/></Link></HStack>
                <VStack>
                <MdOutlineWorkHistory color='#053B50' size={'30'}/>
                <p className=' text-lg  sm:text-3xl font-bold text-[#053B50] '>New Job Post</p>
                </VStack>
                 <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit} >
                        <div className="mb-2">
                     
                            <input
                            placeholder='Organization*'
                             required={true}
                                onChange={(e)=>setCompany(e.target.value)}
                                className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                
                            />
                        </div>
                        <Stack w={'full'} justifyContent={'space-between'} direction={['column','row']}>

                        <div className="mb-2">
                            <label
                                for="name"
                                className="text-left ml-4 block text-sm font-semibold text-gray-800"
                            >
                                Technology
                            </label>
                            <input
                            placeholder="ex Mern,spring"
                            required={true}
                            onChange={(e)=>setTechnology(e.target.value)}
                            className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                            
                            />
                        </div>
                        <div className="mb-2">
                        <label
                                for="name"
                                className="text-left ml-4 block text-sm font-semibold text-gray-800"
                            >
                                estimateTime
                            </label>
                            <input
                            placeholder='10 days'
                            required={true}
                            onChange={(e)=>setestimateTime(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                            </Stack>

                        <div>
                      <label
                              for="msg"
                              className="text-left ml-4  block text-sm font-semibold text-gray-800"
                          >
                              ProjectSummary
                          </label>
                          <textarea
                          required={true}
                            className={`block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40
                        `}
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Project Summary"
                            defaultValue={""}
                            value={ProjectSummary}
                            onChange={(e) => setProjectSummary(e.currentTarget.value)}
                          />
                      </div>


                        <div className="mb-2">
                            <label
                                for="Mobile"
                                className="text-left ml-4  block text-sm font-semibold text-gray-800"
                            >
                               Project Money
                            </label>
                            <input
                            placeholder='$, £, ₨'
                            required={true}
                            onChange={(e)=>setProjectMoney(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="level" // Use htmlFor instead of "for" for accessibility
                                className="text-left ml-4 block text-sm font-semibold text-gray-800"
                            >
                                Set Level 
                            </label >
                            <select
                                id="level"
                              
                                value={level} // Assuming you have a state variable named "role" to store the selected value
                                onChange={(e) => setLevel(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                          >
                                
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Recommended">Recommended</option>
                                

                                {/* Add more role options as needed */}
                            </select>
                        </div>
                        {/* <div>
                          <input type="file" onChange={handleFileChange} />
                         
                      </div> */}
                        
                        <div 
                         
                        className="mt-6">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                                Submit
                            </button>
                        </div>
                    </form>
              </div>
  
          </div>
  
      </div>

 </Stack>
      
      </>
     
    
    );
}

export default NewProjectForm;