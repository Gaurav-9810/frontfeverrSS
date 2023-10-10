import React, { useEffect, useState,useRef } from 'react'
// import JobDoneCard from './JobDoneCard';
// import TaskApply from './TaskApply';
import DashBoardright from './DashBoardright';
import { useParams , useNavigate } from 'react-router-dom';
import api from '../../../Utils/api';
import {BiChart, BiCheck, BiCheckCircle, BiCog, BiSearch} from 'react-icons/bi'
import {FaHospitalUser} from 'react-icons/fa'
import { Avatar, Heading, RadioGroup, Stack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import {Button,AlertDialog,AlertDialogOverlay,AlertDialogHeader,AlertDialogContent,AlertDialogBody,AlertDialogCloseButton,Radio} from '@chakra-ui/react';
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Flex,DrawerFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Backend_Url } from '../../../Path';
const DashProfile = () => {
 const [IsOpen, setIsOpen] = useState(false)

 const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef();

    const handleclick=()=>{
        console.log(IsOpen);
            setIsOpen(!IsOpen);
    }

    const [Active, setActive] = useState(0);

      const handleActive=(id)=>{
           setActive(id);
      }

      const[currentPage , setCurrentPage]=useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(3)
      
      const[avatarname,setavatarname] = useState('');
      const[trimmedname,settrimmedname] = useState('');

const { id } = useParams();

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
setavatarname(userData.email);
settrimmedname(avatarname.replace(/@gmail.com$/, "").replace(/\d/g, ''));
console.log(avatarname);
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
}, [id,avatarname]);



const autoclosepop = (id)=>{
  handleActive(id)
  onClose(onClose)
}
const Navigate= useNavigate();
const logout=async()=>{
  try {
    const response = await fetch(`${Backend_Url}/0auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
   
    
    

    
        Navigate(`/login`)
      

    
  } catch (error) {
      console.log('error to logout ')
  }
};
 


  
  return (
    <div>
       <div className='flex '>
           <div className=" text-white hidden sm:flex sm:h-[95vmin] sm:w-[30vmin]  pt-3 px-3 bg-[#053B50] opacity-90 relative"  >
              <div  className='flex flex-col items-start gap-5'>
                <div className='flex gap-2 items-center'>
                        {/* <p className=' rounded-full  bg-white w-10 h-10 flex justify-center items-center  cursor-pointer'>
                                <svg className=' ' fill="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                        </p> */}
                        <Avatar name={trimmedname} src="https://example.com/jane.jpg" size={'md'} />

                        <p className='hover:text-[#176B87] cursor-pointer'>{trimmedname}</p>
                </div>
                <div className='flex flex-col items-start gap-3 p  '>
                    <div
                        className={` ${Active==0?'text-black':''}
                               bg-${Active==0?'white opacity-30 ':''   }  pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36  `}
                        onClick={()=>handleActive(0)}
                        >
                       <BiChart size={'25'}/>
                         
                         <p className={`    cursor-pointer`}>DashBoard</p>      
                    </div>    
                    <div
                        className={`${Active==1?'text-black':''} bg-${Active==1?'white opacity-30':''} pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36    `}
                        onClick={()=>handleActive(1)}
                        >
                          <BiCheck size={'25'}/>
                         
                         <p className={`    cursor-pointer`}>Job done</p>      
                    </div>
                    <div
                        className={`${Active==2?'text-black':''} bg-${Active==2?'white opacity-30':''} pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36   `}
                        onClick={()=>handleActive(2)}
                        >
                         <BiCheckCircle size={'25'}/>
                        
                         <p className={`    cursor-pointer`}>Applied</p>      
                    </div>
                    <div
                        className={`${Active==3?'text-black':''} bg-${Active==3?'white opacity-30':''} pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36   `}
                        onClick={()=>handleActive(3)}
                        >
                         <BiSearch size={'25'}/>
                        
                         <p className={`    cursor-pointer`}>Explore</p>      
                    </div>
                    <div
                        className={`${Active==4?'text-black':''} bg-${Active==4?'white opacity-30':''} pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36   `}
                        onClick={()=>handleActive(4)}
                        >
                         
                         <BiCog size={'25'}/>
                         <p className={`    cursor-pointer`}>Settings</p>      
                    </div>
                    
                    
                   
                </div>
               
              </div>
              

              

           </div>
          <div className='absolute block sm:hidden   '>
          <div className='w-10 md:hidden flex '>
			      <span className='w-12  ' href="index.html"> 
            
            

    
            <Avatar bg={'#053B50'} style={{
    animation:"glow 1s infinite alternate"
  }}  name={trimmedname} src="https://example.com/jane.jpg" size={'md'}onClick={onOpen}  m={'4'}/>
  <style>
    {`
      @keyframes glow{
        0%{ 
        transform:scale(.9)
        }
        100%{ 
        transform:scale(1.1)

      }
    
    `}
  </style>


  <Drawer isOpen={isOpen} placement={'top'} onClose={onClose} size={'xl'}  >
<DrawerOverlay >
    <DrawerContent>
        <DrawerCloseButton color={'black'}/>
        <DrawerHeader bg={'whiteAlpha.600'} shadow={'md'} textColor={'black'}>{trimmedname}</DrawerHeader>
<DrawerBody bg={'whiteAlpha.300'}  my={'16'} >
    <VStack spacing={'4'} align="stretch" alignItems={'center'} >
     <FaHospitalUser size={'45'}/>
     <Text fontWeight={'bold'} letterSpacing={'widest'}>Profile</Text>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'} variant={'solid'} onClick={()=>autoclosepop(0)} >DashBoard</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}  onClick={()=>autoclosepop(1)}>Job Done</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}  onClick={()=>autoclosepop(2)}>Applied</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}  onClick={()=>autoclosepop(3)}>Explore</Button>
    <Button  w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}  onClick={()=>autoclosepop(4)}>Settings</Button>
  
 
    
    </VStack>
</DrawerBody>
<DrawerFooter bg={'cyan.900'}> 
           <Link to={'/logout'}>
            <Button bg={'#64CCC5'}  onClick={()=>{logout()}}>Log out</Button>
           </Link>
          </DrawerFooter>
    </DrawerContent>
</DrawerOverlay>
    </Drawer>





            </span>

                  </div>
                   

           </div>
           
           <DashBoardright Active={Active}/>
       </div>

    </div>
  )
}

export default DashProfile