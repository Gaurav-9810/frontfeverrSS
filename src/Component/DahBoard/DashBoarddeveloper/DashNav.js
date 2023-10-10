import React, { useState , useEffect } from 'react';
import { useNavigate , Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Backend_Url } from '../../../Path.js';
import {BiMenuAltLeft,BiWindowClose,BiAtom, BiHome, BiUserPlus, BiMoney, BiCoinStack, BiCoin, BiUserCheck, BiNotification, BiPodcast, BiNotificationOff, BiMessageAdd, BiRadio, BiSpeaker, BiMailSend} from 'react-icons/bi'
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,useDisclosure,VStack,Flex ,DrawerFooter, Avatar, HStack, Text } from '@chakra-ui/react';
import api from '../../../Utils/api.js';
import DashBoardright from './DashBoardright';
import { FaBlogger } from 'react-icons/fa';

const NavBar = () => {
  const Role=localStorage.getItem('role');
  
      const [open, setOpen] = useState(0);
      const Navigate =useNavigate();
      const[avatarname,setavatarname] = useState('');
      const[trimmedname,settrimmedname] = useState('');
      const {isOpen , onOpen , onClose}=useDisclosure();
      let uid;

      const handleOpen = (id) =>{
        console.log(`running open${id}`);
        
        setOpen(id);
      } 
      const handleClose = () => setOpen(0);
      const{id}=useParams();
        
      const logout=async()=>{
        try {
          const response = await fetch(`${Backend_Url}/0auth/logout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
         
          
          

          
              Navigate(`/`)
            

          
        } catch (error) {
            console.log('error to logout ')
        }
      };

  let token = Cookies.get('accessToken');
  // let token =localStorage.getItem('accessToken');
  console.log(token+"dashboard");

 const handleDashboard=async()=>{
      try {
          const response = await fetch(`${Backend_Url}/0auth/getidOfDeveloper`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
         
          const { id ,role } = await response.json();
          if (id) {
            uid = id;
            console.log(id);
            
            if(role=='Hire'){
              Navigate(`/HireProfile/${uid}`)
            }
            else{
              Navigate(`/DeveloperProfile/${uid}`)
            }

          }
        } catch (error) {
            console.log('error to fetch id in handledashboard ')
        }
      };

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
 

  const handleProfile=()=>{
    handleDashboard();
    onClose(onClose);

  }
  
     

      

  return (
      <div className=' px-6 py-3  bg-white shadow-md static top-0'>

      
    <div className='    hidden md:flex justify-between text-black font-bold ' >
         <Link className='text-black hover:text-slate-600' to='/'>Home</Link>
         <div className='flex  gap-5 pr-4'>
         {token!=null && Role!='Hire' &&
              <Link to={`/walletDeveloper/${id}`} className='text-black hover:text-slate-600'>Balance</Link>
              
              }
         
              <Link to={`/Notification/${id}`} className='text-black hover:text-slate-600'>Notification</Link>
              
              
            
              <Link to="/contactUs" className='text-black hover:text-slate-600'>Contact Us</Link>
              
              
            
           
            <Link to="/AllBlogs" className='text-black hover:text-slate-600'>Blogs</Link>
             
            {token==null &&
               <Link to='/login' className='text-black hover:text-slate-600'>Login</Link>

            }
           { token ==null && 
             
              <Link to='/Register' className='text-black hover:text-slate-600'> Register</Link>
              }
              { token !=null && <p className=' cursor-pointer hover:text-slate-600'
                onClick={()=>handleDashboard()}
              >
              Profile
                        
              </p>}
              {
                token !=null && <p
                  onClick={()=>logout()}
                className=' cursor-pointer hover:text-slate-600'>
             
                 Logout
                </p>  
              }
      </div>
      </div>
       {/* phone resoponsive */}
       <div className='md:hidden flex justify-between m-1  '>
			<div className=" flex  justify-end  " >
                        <div className='flex items-center' onClick={onOpen}>
                                         <BiMenuAltLeft size={'25'}/>
                        </div>
                        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}  >
<DrawerOverlay >
    <DrawerContent>
        <DrawerCloseButton color={'black'}/>
        <DrawerHeader bg={'whiteAlpha.600'} shadow={'md'} textColor={'white'}><Text textColor={'black'}>🆂🅷🅾🆆🆁🅸🆃🆈</Text></DrawerHeader>
<DrawerBody bg={'whiteAlpha.300'} >
    <VStack spacing={'3'} align="stretch">
     <Button w={'-webkit-fit-content'}textColor={'black'} variant={'ghost'} onClick={onClose} >
     <Link to={'/'}>  <Flex alignItems="center">
       
     <HStack w={'full'} spacing={'4'}>
       <BiHome color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Home</Text>
       </HStack>
      </Flex></Link>
     </Button>
     {Role!='Hire' && <Button w={'-webkit-fit-content'} textColor={'black'} variant={'solid'} onClick={onClose} bg={'none'}>
     <Link to={`/walletDeveloper/${id}`}>
     <Flex alignItems="center">
     <HStack w={'full'} spacing={'4'}>
       <BiCoin color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>balance</Text>
       </HStack>    
   
      </Flex>
     </Link>
     </Button>}
     
     <Button w={'-webkit-fit-content'}textColor={'black'}variant={'ghost'} onClick={handleProfile} >
       <Flex alignItems="center">
     
     <HStack w={'full'} spacing={'4'}>
       <BiUserCheck color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Profile</Text>
       </HStack>
      </Flex>
     </Button>
     <Button w={'-webkit-fit-content'} textColor={'black'} variant={'ghost'} onClick={onClose}>
     <Link to={`/Notification/${id}`}>
     <Flex alignItems="center">
        
     <HStack w={'full'} spacing={'4'}>
       <BiMessageAdd color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Notification</Text>
       </HStack>
      </Flex>
     </Link>
     </Button>
     <Button w={'-webkit-fit-content'}textColor={'black'}variant={'ghost'} onClick={onClose} >
     <Link to={'/contactUs'}><Flex alignItems="center">
       
     <HStack w={'full'} spacing={'4'}>
       <BiMailSend color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Contact us</Text>
       </HStack>
      </Flex></Link>
     </Button>
     <Button w={'-webkit-fit-content'}textColor={'black'}variant={'ghost'} onClick={onClose} >
     <Link to={'/AllBlogs'}>  <Flex alignItems="center">
     
     <HStack w={'full'} spacing={'4'}>
       <FaBlogger color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Blogs</Text>
       </HStack>
      </Flex></Link>
     </Button>
    
    </VStack>
</DrawerBody>
<DrawerFooter bg={'cyan.900'}> 
          
            <Button bg={'#64CCC5'}  onClick={()=>{logout()}}>Log out</Button>
           
          </DrawerFooter>
    </DrawerContent>
</DrawerOverlay>
    </Drawer>
      
      
                                                     
                       

     
			</div>
                  <div className='w-10  '>
			      <span className='w-12 '><BiAtom size={'30'}/></span>

                  </div>
{/* for mobile  */}
            

		</div>
         

    </div>
    
  )
}

export default NavBar