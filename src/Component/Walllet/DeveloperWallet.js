import React, { useEffect, useState } from 'react'
import DeveloperWalletCard from './DeveloperWalletCard'
import { Backend_Url } from '../../Path';
import { useParams } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast,
  Stack,
} from '@chakra-ui/react'

const DeveloperWallet = () => {
  const [allpayments, setallpayments] = useState([])
  const [Balanced, setBalanced] = useState();
  const [AccountNo, setAccountNo] = useState('');
  const [HolderName, setHolderName] = useState('');
  const [IFSC, setIFSC] = useState('');
  const[IsOpen , setIsOpen]=useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()


  const {id}=useParams();
  async function fetchData() {
    
    try {
     
  
      const response = await fetch(`${Backend_Url}/0auth/getAllAcoountDetailsByDeveloperId/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      console.log(result);
      setallpayments(result);
      
      
    } catch (err) {
      
    } finally {
     
    }
  }
  
    useEffect(() => {
      fetchData();
      fetchbalanced();
    }, []);


    async function fetchbalanced(){
       try {
     
  
        const response = await fetch(`${Backend_Url}/0auth/getBalancedByID/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        // console.log(result);
       setBalanced(result[0].Balance);
        
        
      } catch (err) {
        
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

const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("jkhdfkjhdf");

        
                  try{
                      const response = await fetch(`${Backend_Url}/0auth/sendNotificationwithAccountedtails/${id}`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ userId:id, AccountNumber:AccountNo , IFSC ,AccountName:HolderName  }),
                      credentials: 'include',
                    });
                    showToast('Details send','success');
                    onclose(onClose);
                    
                    console.log(response);
                }
                catch(err){
                  console.log(err+"wallet withdraw");
                }
        
        

        
        

        
      }
   
    
   
    


  return (
    <div className='flex  '>
        <div className=' w-[100vw]  h-[1000%] '>
          <div className='flex md:flex-row flex-col justify-between mx-5'>
             <p className='text-[#053B50] text-3xl font-bold font-sans my-3 '>Your Balance</p>
             <div className='flex gap-3 items-center justify-center'>
                  <div className='flex justify-center'>
                    <p className='text-white bg-green-500 px-3  py-2 rounded-md w-32 cursor-pointer hover:bg-green-700' onClick={onOpen}>WithDraw</p>
                  </div>
                  <div className='flex justify-center'>
                    <a href='/contactUs' ><p className='text-white bg-red-500 px-3  py-2 rounded-md w-32 cursor-pointer hover:bg-red-700' >help</p></a>
                  </div>
             </div>
             <p className='text-[#053B50] text-3xl font-bold font-sans my-3 '>${Balanced}</p>
          </div>
          <div>
            <p className='text-[#053B50] text-3xl font-bold font-sans mb-2 '>Transaction</p>
          </div>
          <Stack h={'70vh'} overflowY={'auto'}>
          <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
              height:4px;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #053B50; // Color of the scrollbar thumb
              border-radius: 4px; // Adjust the thumb's border radius
            }
          `}
        </style>
          <div className='flex flex-col mx-5 '>
            {
              allpayments.map((item,inidex)=>(
                <DeveloperWalletCard data={item}/>
                ))
              }
            
            
          </div>
              </Stack>
            
        </div>
      
             <>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={'8'}>
          <form className="mt-6" onSubmit={handleSubmit} >
                              <div className="mb-2">
                                  <label
                                      for="name"
                                      className="text-left ml-4 block text-sm font-semibold text-gray-800"
                                  >
                                      Account Holder Name 
                                  </label>
                                  <input

                                  required={true}
                                  onChange={(e)=>setHolderName(e.target.value)}
                                      
                                      className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                      
                                  />
                              </div>
                              <div className="mb-2">
                                  <label
                                      for="name"
                                      className="text-left ml-4 block text-sm font-semibold text-gray-800"
                                  >
                                      Account Number
                                  </label>
                                  <input
                                  required={true}
                                  onChange={(e)=>setAccountNo(e.target.value)}
                                      
                                      className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                      
                                  />
                              </div>
                              <div className="mb-2">
                                  <label
                                      for=""
                                      className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                  >
                                    IFSC 
                                  </label>
                                  <input
                                  required={true}
                                  onChange={(e)=>setIFSC(e.target.value)}

                                      className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                  />
                              </div>
                              <div 
                              
                              className="mt-6">
                                  <button type='submit'  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                                      Submit
                                  </button>
                              </div>
                          </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      
              
            </>
        
        
        
        
        
    </div>
  )
}

export default DeveloperWallet