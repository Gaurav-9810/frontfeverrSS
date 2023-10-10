import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Payment = () => {
    const searchQuery=useSearchParams()[0];
    const RefrenceNo=searchQuery.get("reference");
  return (
    
<div className="bg-green-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md flex  flex-col items-center ">
        <div className='flex justify-center my-3'>
            <svg className='text-green-300 fill-green-600' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>

        </div>
        <h1 className="text-2xl font-bold mb-4">Payment Successful</h1>
        <p className="text-gray-700">Thank you for your payment. Your order is confirmed.</p>
        <p>Refrence:{RefrenceNo}</p>
        <div className='my-2'>
                <p className=' bg-[#053B50] text-[white] cursor-pointer px-3 py-2 rounded-lg   hover:text-black" '  ><Link className=" text-white hover:text-black" to="/">Back to home</Link></p>

        </div>
      </div>
    </div>
        
    
  )
}

export default Payment