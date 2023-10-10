import React from 'react'

const ClientCard = ({data}) => {
  return (
    <div className='container w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/5 shadow-lg p-4 rounded-lg'>
        <div className='flex flex-col gap-1'>
            <img className='border-2 border-black' src={data.img}></img>
           <div className='flex flex-col pl-1 gap-2'>
                <div className='flex justify-between mb-2 '>
                        <p>{data.name}</p> 
                        <p className='bg-orange-300 px-2 py-1 rounded-lg text-orange-800 font-bold'>
                            {data.level}
                        </p> 
                    </div> 
                    <p className='text-left text-slate-700 font-medium'>{data.desc}</p>
                    <p className='text-left flex gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                           
                        {data.rating}.0
                    </p>
                    <p className='text-left'>From $ {data.price}</p>
           </div>
            
        </div>
    </div>
  )
}

export default ClientCard