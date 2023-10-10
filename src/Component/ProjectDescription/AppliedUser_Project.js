import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { Backend_Url } from '../../Path';
import axios from 'axios';

const AppliedUser_Project = ({data , amount}) => {
  
  const [details, setdetails] = useState([])
  const role=localStorage.getItem('role');
  // const firstpayment=10;
  const [firstPay, setfirstPay] = useState();
  const{id}=useParams();
  console.log(id);
  let projectId=id;

  const moneyamount=Number(amount);
  useEffect(() => {
    async function fetchFirstPay() {
      try {
        

        const response = await fetch(`${Backend_Url}/0auth/getFirstPay`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const result = await response.json();
        const nres=Number(result.firstpay);
        // console.log("ashu");
        // console.log(nres);
        console.log(typeof(nres));
        setfirstPay(nres);
      
        console.log("changed"+firstPay);
 
      } catch (err) {
        console.error(err);
      }
    }

    fetchFirstPay();

    // Return a cleanup function
    return () => {
      
    };
  }, []);

  useEffect(() => {
    console.log(data)
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/showDeveloperProfileById/${data}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
       
         
         setdetails(result[0])
        //  console.log(result[0].name)
         
         
       
        
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();

    // Return a cleanup function
    return () => {
      
    };
  }, []);


    const Navigate=useNavigate();
    const handleclick=()=>{
      
       Navigate(`/DeveloperProfile/${details.userId}`)
    }

    // const handleAssign=()=>{
    //   window.location.href = 'https://www.paypal.com/paypalme/oragepayments?country.x=IN&locale.x=en_GB';
    // }


  const checkoutHandler=async(amount)=>{
      const {data:{key}}=await axios.get(`${Backend_Url}/0auth/getrazerkey`) 
      
      // const {data:{order}}=await axios.post("http://localhost:5000/0auth/checkout",{
      //   amount , userId:details.userId , 
      //  })
      const requestData = {
        amount,
        userId: details.userId,
        projectId,
      };
      const {data:{order}}= await axios.post(`${Backend_Url}/0auth/checkout`, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Axios uses withCredentials for credentials
      });
      
  
       const options = {
        key, 
        amount: order.amount, 
        currency: "INR",
        name: "Orage Tech",
        description: "Test Transaction",
        image: "",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/0auth/paymentverification",
        prefill: {
            name: "Gaurav Gangola",
            email: "gaurav.gangola444@gmail.com",
            contact: "9810654125"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#053B50"
        }
    };
    const razor =  window.Razorpay(options);
   
    razor.open();
    
  }

    
    

  return (
    <div className='flex justify-center  '>
        <div className='flex  justify-between px-6 w-[70vw] sm:w-[50vw] rounded-lg py-3 bg-[#053B50] opacity-90'>
            <p className='text-lg font-semibold text-[#EEEEEE]'>{details?.name}</p>
            <div className='flex gap-3'>
                  {role=='Hire'?<p className='text-white bg-[#64CCC5] px-2 py-1 rounded-lg cursor-pointer'
                onClick={()=>checkoutHandler((moneyamount/100)*firstPay)}
                >Assign</p>
                
                :<></>}
                <p className='text-white bg-[#64CCC5] px-2 py-1 rounded-lg cursor-pointer'
                onClick={()=>handleclick()}
                >Check Profile</p>
            </div>
            

        </div>

    </div>
  )
}

export default AppliedUser_Project