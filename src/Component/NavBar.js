import React, { useState , useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Backend_Url } from '../Path';
import {BiMenuAltLeft,BiSolidContact, BiHome,BiSolidPlusCircle,BiUserCircle, BiUser, BiLogoAndroid, BiLogoPlayStore} from 'react-icons/bi';
import {FaBlogger} from 'react-icons/fa'
import {MdDashboardCustomize} from 'react-icons/md'
import { Drawer,Divider,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,useDisclosure,VStack,Flex ,DrawerFooter, HStack, Text, AbsoluteCenter, Box, Badge } from '@chakra-ui/react';

const NavBar = () => {
  
      const [open, setOpen] = useState(0);
      const {isOpen , onOpen , onClose}=useDisclosure();
      const Navigate =useNavigate();
      let uid;

      const handleOpen = (id) =>{
        console.log(`running open${id}`);
        
        setOpen(id);
      } 
      const handleClose = () => setOpen(0);
        
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

 const handleDashboard=async()=>{
      try {
          const response = await fetch(`${Backend_Url}/0auth/getidOfDeveloper`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
         
          const { id , role } = await response.json();
          // console.log(role+"lklkj")
          if (id) {
            uid = id;
            console.log(id);

            if(role=='Hire'){
              Navigate(`/DashBoard/Hire/${uid}`)
            }
            else{
              Navigate(`/DashBoard/Developer/${uid}`)
            }
            

          }
        } catch (error) {
            console.log('error to fetch id in handledashboard ')
        }
      };
 

  
  
     

      

  return (
      <div className=' px-6 py-3  bg-white shadow-md static top-0'>

      
    <div className='    hidden md:flex justify-between text-black font-bold ' >
         <Link to='/' className='text-black hover:text-slate-600'><p className=' cursor-pointer hover:text-slate-600'>Home</p></Link>
         <div className='flex  gap-5 pr-4'>
            
            {token==null &&
            <Link to='/login' className='text-black hover:text-slate-600'>
            <p className=' cursor-pointer '>
               Login </p></Link>

           }
           { token ==null && 
             
              <Link to='/Register' className='text-black hover:text-slate-600'> Register</Link>
              }
              
              <Link to="/contactUs" className='text-black hover:text-slate-600'>Contact Us</Link>
              
             
            <Link to="/AllBlogs" className='text-black hover:text-slate-600'>
            
            Blogs</Link>
            
              { token !=null && <p className=' cursor-pointer hover:text-slate-600'
                onClick={()=>handleDashboard()}
              >
  DashBoard
                        
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
         <div className='md:hidden flex justify-between  '>
			<div className=" flex  justify-end  " >
                        <div className='flex items-center' onClick={onOpen}>
                        <BiMenuAltLeft size={'25'} color=''/>
                        </div>
                        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
<DrawerOverlay >
    <DrawerContent>
        <DrawerCloseButton color={'black'}/>
        <DrawerHeader bg={'whiteAlpha.400'} boxShadow="md" textColor={'white'}><Text textColor={'black'}>🆂🅷🅾🆆🆁🅸🆃🆈</Text></DrawerHeader>
<DrawerBody bg={'whiteAlpha.400'} >
    <VStack spacing={'3'} align="stretch">
    { token==null &&
  <Button w={'-webkit-fit-content'}textColor={'black'} variant={'ghost'} onClick={onClose} >
   <Link to={`/Register`}>
     <Flex alignItems="center"> 
     <HStack w={'full'} spacing={'4'}>
       <BiSolidPlusCircle color='#0D6EFD' size={'25'}/>
        <Text color='#0D6EFD'>Create an account</Text>
       </HStack>
      </Flex>
     </Link>
  </Button>
     }


{ token==null &&
  <Button w={'-webkit-fit-content'}textColor={'black'}variant={'ghost'} onClick={onClose} >
   <Link to={`/login`}>
     <Flex alignItems="center">
     <HStack w={'full'} spacing={'4'} >
       <BiUserCircle color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Login</Text>
       </HStack>
     
      </Flex>
     </Link>
  </Button>
     }

     <Button w={'-webkit-fit-content'} textColor={'black'} variant={'ghost'} onClick={onClose}       >
     <Link to={'/'}>  <Flex alignItems="center">
       <HStack w={'full'} spacing={'4'}>
       <BiHome color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Home</Text>
       </HStack>
      </Flex></Link>
     </Button>
     <Button w={'-webkit-fit-content'} textColor={'black'} variant={'ghost'} onClick={onClose}>
     <Link to={`/AllBlogs`}>
     <Flex alignItems="center">
        
     <HStack w={'full'} spacing={'4'}>
       <FaBlogger color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Blogs</Text>
       </HStack>
      </Flex>
     </Link>
     </Button>
     <Button w={'-webkit-fit-content'}textColor={'black'}variant={'ghost'} onClick={onClose} >
     <Link to={'/contactUs'}><Flex alignItems="center">
       
     <HStack w={'-webkit-fit-content'} spacing={'4'}>
       <BiSolidContact color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>Contact us</Text>
       </HStack>
      </Flex></Link>
     </Button>
     { token!=null &&
  <Button w={'-webkit-fit-content'}textColor={'black'}variant={'ghost'} onClick={onClose} >
  <p onClick={()=>handleDashboard()} >  <Flex alignItems="center" >
  
  <HStack w={'full'} spacing={'4'}>
       <MdDashboardCustomize color='#64CCC5' size={'25'}/>
        <Text color='#053B50'>DashBoard</Text>
       </HStack>
   </Flex></p>
  </Button>
     }

<Box position='relative' mt={'16'} padding='2'>
  <Divider style={{ height: "3px" }} />
  <AbsoluteCenter bg='white' px='4'>
    <Text fontFamily={'cursive'}>Download</Text> 
  </AbsoluteCenter>
</Box>
    <Badge bg={'black'} textColor={'white '} w={'-webkit-fit-content'} py={'1'} px={'3'}  borderRadius={'base'}>
      <HStack spacing={'-1'}>
      <BiLogoPlayStore size={'30'}/>
<VStack spacing={'-2.5'}>
  <Text fontSize={'10px'} fontWeight={'light'} fontFamily={'mono'} letterSpacing={'wider'}>Download on the</Text>
  <Text fontWeight={'bold'} fontSize={'15px'}>Playstore</Text>
</VStack>
      </HStack>
    
    </Badge>
    
    </VStack>
</DrawerBody>
<DrawerFooter bg={'cyan.900'}> 
      

           {
                token !=null && <p>
                <Button textColor={'black'} bg={'#64CCC5'} onClick={()=>{logout()}}>Log out</Button>
                </p>
              }
   
          </DrawerFooter>
    </DrawerContent>
</DrawerOverlay>
    </Drawer>
      
      
    
                                                
                       
          	 

     
			</div>
                  <div className='w-10  '>
			      <a className='w-12  ' href="index.html"><img className=' ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtY6c3JdpLzvwUE5T68DE8QV8IdOTKr_gkQ&usqp=CAU'/></a>

                  </div>

		</div>
         

    </div>
    
  )
}

export default NavBar