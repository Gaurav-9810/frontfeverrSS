import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCookie } from '../Utils/getCookies';
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Text, Box, Heading, Avatar, Flex, HStack, Badge, VStack } from '@chakra-ui/react'
const SellerCard = ({data}) => {


  const img="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
const Navigate=useNavigate();
// const {id}=useParams();
  const handleClick=(id)=>{
    console.log(id);

    const refreshToken =getCookie('refreshToken')
    if(!refreshToken){
      window.location.href = '/login';
    }
    
      Navigate(`/DeveloperProfile/${id}`)
  }
const [SummaryDetails, setSummaryDetails] = useState('')
  useEffect(() => {
    if (data.summary) {
      // Split the summary into words
      const words = data.summary.split(' ');

      // Slice the array to include words 10 through 15 (0-based index)
      const selectedWords = words.slice(0, 15);

      // Join the selected words back into a string
      const slicedSummary = selectedWords.join(' ');

      // Update the state with the sliced summary
      setSummaryDetails(slicedSummary);
    }
  }, [data.summary]);
  

  
  return (
    // <div className='container w-3/4 sm:w-1/2 md:w-2/5 lg:w-[22%] shadow-lg p-4 rounded-lg cursor-pointer'
    //   onClick={()=>handleClick(data.userId)}
    // >
    //     <div className='flex flex-col gap-1'>
    //         <img className='border-2 border-black' src={img}></img>
    //        <div className='flex flex-col pl-1 gap-2 mt-2'>
    //             <div className='flex justify-between mb-2 '>
    //                     <p className='text-left font-bold font-sans'>{data.name}</p> 
    //                     <p className='bg-orange-300 px-2 py-1 rounded-lg text-orange-800 font-bold'>
    //                        {data.badges}
    //                     </p> 
    //                 </div> 
    //                 <p className='text-left text-slate-700 font-medium font-sans'>{SummaryDetails}</p> 
                    
    //        </div>
            
    //     </div>
    // </div>



<Card maxW='sm' onClick={()=>handleClick(data.userId)}>
  <CardHeader>
   <HStack w={'full'} justifyContent={'space-between'}>

        <Avatar name={data.name}  />
          <VStack >
          <Heading size='sm'>{data.name}</Heading>
         <HStack w={'full'} justifyContent={'end'}>
             <Badge px={'2'} bg={'orange.400'} borderRadius={'md'} textColor={'white'} fontSize={'12'} >{data.badges}</Badge>
          </HStack>
          </VStack>
   </HStack>

  </CardHeader>
  <CardBody >
    <Text textAlign={'start'} fontFamily={'sans-serif'} fontWeight={'semibold'} textColor={'slategray'}>
    {SummaryDetails}
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
    />


</Card>

   
    
  )
}

export default SellerCard