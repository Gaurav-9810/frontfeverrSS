import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../../Path';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../Utils/api';


import { Badge, HStack, Heading, Image, Stack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { BiArrowBack, BiSolidImageAdd,BiPhoneCall,BiMailSend, BiSolidPencil} from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'

const ProfileHire = () => {
    const [ProfileData, setProfileData] = useState({})
  const Navigate=useNavigate();
    
  
     
  const {id} =useParams();
    useEffect(() => {

       async function fetchData() {
         try {
           const response = await api.get(`${Backend_Url}/0auth/showCompanyProfileById/${id}`, {
             method: 'GET',
             headers: {
               'Content-Type': 'application/json',
             },
             credentials: 'include',
           });
           console.log(response);
           const result = await response.data;
           console.log(result);
            
            setProfileData(result)
            console.log(result);
          
           
         } catch (err) {
           console.error(err);
         }
       }
   
       fetchData();
   
       // Return a cleanup function
       return () => {
         // Perform any cleanup actions here if needed
       };
     }, []);
 
     const ChangeProfileDetails=()=>{
      Navigate(`/HireProfileForm/${id}`)
    }
  
    const [result, setResult] = useState(null);
    const [isvalid,setisvalid]=useState()
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`${Backend_Url}/0auth/checkifValidchange/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });

          
          
          console.log(response);
          const res = await response.json();
      
           
          setisvalid(res.verify);
          console.log(isvalid);
        
         
          
        } catch (err) {
          console.error(err);
        }
      }
  
      fetchData();
  
     
      return () => {
       
      };
    }, []);
  


    
 
 
 
 
     return (
 
      <Stack justifyContent={'space-around'} mt={'8'} direction={['column','column','row']}spacing={['16','16','0']}>
      <VStack w={'full'}>
            <HStack pl={'4'} w={'full'}><BiArrowBack size={'45'}/></HStack>
      <Image
        borderRadius='full'
        boxSize='150px'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
        shadow={'md'}
      />
      <HStack w={'full'} justifyContent={'center'}  mt={'-7'} >
        <BiSolidImageAdd size={'45'} opacity={'.8'} cursor={'pointer'}/>
      
        </HStack>
        <VStack >
      <Text mt={'8'} fontWeight={'medium'} fontSize={'2xl'} letterSpacing={'wider'}>{ProfileData[0]?.name || 'Name'}</Text>
        
        </VStack>
      <HStack mt={'4'}><ImLocation size={'25'}/> <Text fontFamily={'mono'}>{ProfileData[0]?.city +","+ ProfileData[0]?.country}</Text></HStack>
      </VStack>
      <VStack  w={'full'} mb={'8'}>
      <Heading fontSize={'2xl'} letterSpacing={'wider'}>Details</Heading>
      <VStack w={'full'} alignItems={'start'}>
       <HStack w={'full'} justifyContent={'space-between'}>
       <Text mx={'8'} fontSize={'xl'}>About</Text>
    {isvalid &&
        <Text mx={'8'} fontSize={'xl'}><BiSolidPencil cursor={'pointer'} onClick={()=>ChangeProfileDetails()}/></Text>
    
    }
    
        </HStack> 
      <Text mx={'16'} textAlign={'start'} p={'4'} w={'70%'} borderRadius={'2xl'} bg={'#EEEEEE'} overflowY={'auto'} h={'30vh'}> {ProfileData[0]?.summary}</Text>
        </VStack>
        
      
        <VStack w={'full'} alignItems={'start'}>
        <Text mx={'8'} fontSize={'xl'}>Contacts</Text>
      <Text mx={'16'} textAlign={'start'} p={'4'} w={'70%'} borderRadius={'2xl'} bg={'#EEEEEE'} >
      <p><BiPhoneCall/>{ProfileData[0]?.mobile}</p>
      <p><BiMailSend/>{ProfileData[0]?.email}</p>
      </Text>
        </VStack>
      </VStack>
          </Stack>
          
     
     
   )
}

export default ProfileHire