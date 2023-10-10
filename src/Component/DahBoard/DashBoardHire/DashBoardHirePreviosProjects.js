import React, { useEffect, useState } from 'react'
import { Backend_Url } from '../../../Path';
import axios from 'axios';

const DashBoardHirePreviosProjects = ({data}) => {


const img="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"

const [ProjectDetails, setProjectDetails] = useState({});
const [UserDetails, setUserDetails] = useState({});
const [firstPay, setfirstPay] = useState();
const [value,onChange]=useState(1);


  useEffect(() => {
    let userID=data.userId;
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/showDeveloperProfileById/${userID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result.name);
         
        setUserDetails(result);
       
        
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


  const checkoutHandler=async(amount,value)=>{
    const {data:{key}}=await axios.get(`${Backend_Url}/0auth/getrazerkey`) 
    const requestData = {
      Projectid:data.Projectid,
      Hireid:data.Hireid,
      userId:data.userId,
      amount,
      ProjectSummary:data.ProjectSummary,
      ProjectMoney:data.ProjectMoney,
      estimateTime:data.estimateTime,
      rating:value,
      // userId: details.userId,
      // projectId,
    };
    
    const {data:{order}}= await axios.post(`${Backend_Url}/0auth/checkout90`, requestData, {
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
      callback_url: `${Backend_Url}/0auth/paymentverification90`,
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

   
    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })

 

    const emojis = ['😞',  '😀', '😁', '🤩', '🥳','🥳🥳'];
    const [IsOpen, setIsOpen] = useState(false)

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };



  return (
    <div className='relative  '>
          <div className='  shadow-lg p-4 rounded-lg '>
            <div className='flex flex-col gap-1'>
                <img className='border-2 border-black rounded-md' src={img}></img>
            <div className='flex flex-col pl-1 gap-2'>
                    <div className='flex  justify-between my-2 '>   
                            <p className='text-sm sm:text-[10px] lg:text-sm bg-green-200 px-2 py-1 rounded-lg text-slate-400 font-bold'>
                                Pending
                            </p>
                            <p className='text-sm sm:text-[10px] lg:text-sm text-slate-700 font-medium font-sans'>Amount paid ${data?.amount} </p> 
                        </div> 
                        <p className=' text-left text-slate-400 font-medium font-sans'>{data?.ProjectSummary.split(' ').slice(0, 15).join(' ')}</p>
                        <p className='text-left flex gap-2 items-center text-slate-500 font-medium font-sans'>
                            {data?.estimateTime} Time
                          </p>
                          <p className='text-left text-slate-400 font-medium font-sans'>Remaining Money $ {data?.ProjectMoney-data?.amount}</p>
                        <p className='text-left text-slate-500 text-lg font-sans font-semibold'>Assign to : {UserDetails[0]?.name}</p>
                        {/* <div className='flex justify-center'>
                          <p className='bg-[#053B50] text-[white] cursor-pointer px-3 py-2 rounded-lg' onClick={()=>checkoutHandler((((Number(data?.ProjectMoney))/100)*(100-firstPay)))}>Pay Rest</p>
                        </div> */}
            </div>
           
                
                        <div className='flex justify-center'>
                          <p className='bg-[#053B50] text-[white] cursor-pointer px-3 py-2 rounded-lg' onClick={()=>setIsOpen(true)} >Pay</p>
                        </div>
            </div>

        </div>
        { IsOpen && 
        <>
            
              <div className='bg-slate-300  w-full h-full pt-[50%]  absolute top-0  '>
                <svg onClick={()=>setIsOpen(false)} className='absolute top-5 fill-white right-3' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
                   <div className='flex flex-col  gap-8'>
                          <p className='text-[#053B50] font-bold font-sans text-2xl'>Please give your feed Back</p>
                        <div className="slider-parent">
                             <div className="text-4xl">
                                {emojis[value]}
                              </div> 
                              <input
                                type="range"
                                min="0"
                                max={emojis.length - 1}
                                value={value}
                                step="1"
                                onChange={handleInputChange}
                                className="w-3/4 "
                              />
                              
                      </div>
                    <div className='flex justify-center'>
                                  <p className='bg-[#053B50] text-[white] cursor-pointer px-3 py-2 rounded-lg' onClick={()=>checkoutHandler((((Number(data?.ProjectMoney))/100)*(100-firstPay)),value)}>Pay Rest</p>
                    </div>
                   </div>
                   
                    
              </div>
        
        </>
        
        }
        
    </div>
    
  )
}

export default DashBoardHirePreviosProjects