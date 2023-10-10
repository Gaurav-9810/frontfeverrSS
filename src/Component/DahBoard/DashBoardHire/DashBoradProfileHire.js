import React, { useEffect, useRef, useState } from 'react'
// import JobDoneCard from './JobDoneCard';
// import TaskApply from './TaskApply';
import DashBoardright from '../DashBoarddeveloper/DashBoardright';
import DashBoardHireRight from './DashBoardHireRight';
import { useNavigate, useParams} from 'react-router-dom';

import {BiChart, BiCheck, BiCheckCircle, BiCog, BiLogoGraphql, BiParagraph, BiRightIndent, BiSearch} from 'react-icons/bi'
import {RiHandbagFill} from 'react-icons/ri'
import { Avatar,Heading, RadioGroup, Stack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import {Button,AlertDialog,AlertDialogOverlay,AlertDialogHeader,AlertDialogContent,AlertDialogBody,AlertDialogCloseButton,Radio} from '@chakra-ui/react';
import api from '../../../Utils/api';
import {FiFilePlus} from 'react-icons/fi';
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Flex,DrawerFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Backend_Url } from '../../../Path';
import { FaHospitalUser } from 'react-icons/fa';

const DashBoradProfileHire = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const Navigate=useNavigate();
    const {id}=useParams();
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
      

      const data=[
            {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"gaurav",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"gaurav",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"gaurav",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"kk",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"ll",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"gaurav",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"dd",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        },
        {"img":"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            "name":"lklk",
            "level":"Top rated",
            "desc" :"I will Create 2D animation explainer video and sales video",
            "rating":"5",
            "price":"10,000"
        }
]
const totalPages=Math.ceil(data.length/itemsPerPage);

const handlePageChange=(page)=>{
    setCurrentPage(page);
}

const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  function calculateItemsPerPage() {
    if(window.innerWidth>1440){
           return 3;
    }
    else if(window.innerWidth>640){
        return 2;
    }
    else{
      return 1;
    }
    // return window.innerWidth < 768 ? 1 : 3; // Adjust as needed
  }

  const autoclosepop = (id)=>{
    handleActive(id)
    onClose(onClose)
  }

  // Update itemsPerPage when the window size changes
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(calculateItemsPerPage());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [itemsPerPage]);

  const handleAdd=()=>{
    Navigate(`/JobPost/${id}`);
  }


  const[avatarname,setavatarname] = useState('');
      const[trimmedname,settrimmedname] = useState('');



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
       <div className='flex  '>
       <div className=" text-white hidden md:flex sm:h-[95vmin] sm:w-[30vmin]  pt-3 px-3 bg-[#053B50] opacity-90 relative"  >
              <div  className='flex flex-col items-start gap-5'>
                <div className='flex gap-2 items-center'>
                        {/* <p className=' rounded-full  bg-white w-10 h-10 flex justify-center items-center  cursor-pointer'>
                                <svg className='fill-black  ' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                        </p> */}
                        <Avatar name={trimmedname} src="https://example.com/jane.jpg" size={'md'} />
                        <p className='hover:text-[#176B87] cursor-pointer'>{trimmedname}</p>
                </div>
                <div className='flex flex-col items-start gap-3 p  '>
                <div
                        className={` ${Active==0?'text-black':'text-white'} bg-${Active==0?'white opacity-30 ':''   } pl-2 pr-4 flex justify-between gap-1 items-center py-2 w-36 md:w-48    `}
                        onClick={()=>handleActive(0)}
                        >
                       <BiChart size={'25'}/>
                         
                        <p className={`    text-sm  cursor-pointer text-right`}>DashBoard</p>      
                    </div>     
                    <div
                        className={` ${Active==1?'text-black':'text-white'} bg-${Active==1?'white opacity-30 ':''   } pl-2 pr-4 flex justify-between gap-1 items-center py-2 w-36 md:w-48    `}
                        onClick={()=>handleActive(1)}
                        >
                          <RiHandbagFill size={'25'} />
                         
                         <p className={`  text-sm  cursor-pointer text-right`}>Assignments</p>      
                    </div>
                    
                    <div
                        className={` ${Active==2?'text-black':'text-white'} bg-${Active==2?'white opacity-30 ':''   } pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36 md:w-48    `}
                        onClick={()=>handleActive(2)}
                        >
                          <BiCheck size={'25'}/>
                         <p className={`  text-sm  cursor-pointer text-right`}>Assigned</p>      
                    </div>
                    <div
                        className={` ${Active==5?'text-black':'text-white'} bg-${Active==5?'white opacity-30 ':''   } pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36 md:w-48    `}
                        onClick={()=>handleActive(5)}
                        >
                         <BiCheckCircle size={'25'}/>
                         
                         <p className={`  text-sm  cursor-pointer text-right`}>Complete</p>      
                    </div>
                    <div
                        className={` ${Active==3?'text-black':'text-white'} bg-${Active==3?'white opacity-30 ':''   } pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36 md:w-48    `}
                        onClick={()=>handleActive(3)}
                        >
                         <BiCog size={'25'}/>
                         <p className={`  text-sm  cursor-pointer text-right`}>Setting</p>      
                    </div>
                    <div
                        className={` ${Active==4?'text-black':'text-white'} bg-${Active==4?'white opacity-30 ':''   }  cursor-pointer pl-2 pr-7 flex justify-between gap-2 items-center py-2 w-36 md:w-48 text-right   `}
                        onClick={()=>handleAdd()}
                        >
                        <FiFilePlus size={'25'}/> 
                         <p className={`  text-sm  cursor-pointer text-right`}>Add Job</p>      
                    </div>
                    
                    
                   
                </div>
               
              </div>
              

              

           </div>
           <div className='absolute block md:hidden   '>
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
    <VStack spacing={'4'} align="stretch" alignItems={'center'}>
    <FaHospitalUser size={'45'}/>
     <Text fontWeight={'bold'} letterSpacing={'widest'}>Profile</Text>
      <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}  onClick={()=>autoclosepop(0)} >DashBoard</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(1)}>Assignment</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(2)}>Assigned</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(5)}>Complete</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(3)}>Settings</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>handleAdd()}>Add job</Button>
  
 
    
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
         
            

    
  {/* <Avatar  name={trimmedname} src="https://example.com/jane.jpg" size={'md'}onClick={onOpen} m={'4'} />

      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={'sm'}
       
      >
        <AlertDialogOverlay  />

        <AlertDialogContent bg={'white'}  borderRadius={'2xl'}>
          <AlertDialogHeader textColor={'black'} bg={'white'} shadow={'md'}  borderTopRadius={'2xl'}>{trimmedname}</AlertDialogHeader>
          <AlertDialogCloseButton color={'black'}/>
          <AlertDialogBody>
          <RadioGroup defaultValue='1'>
  <Stack justifyContent={'center'} alignItems={'center'} >
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}  onClick={()=>autoclosepop(0)} >DashBoard</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(1)}>Assignment</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(2)}>Assigned</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(5)}>Complete</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>autoclosepop(3)}>Settings</Button>
    <Button w={'50%'} bg={'none'} textColor={'black'}  border={'1px solid'}   onClick={()=>handleAdd()}>Add job</Button>

  </Stack>
</RadioGroup>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog> */}
            </span>

                  </div>
                   

                        

           </div>
           
           <DashBoardHireRight Active={Active}/>
       </div>

    </div>
  )
}

export default DashBoradProfileHire