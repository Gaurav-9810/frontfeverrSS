import React from 'react';
import { useNavigate , Link } from 'react-router-dom';

const ProfielNav = () => {
    const Navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem('token');
        Navigate('/home');
  }
  return (
    <div className='text-left  bg-[#EEEEEE] flex flex-col absolute w-32 right-6 top-12 p-2' >
        <div className='pl-2 pb-4 text-black'>
            <p><Link to='/setting' >Setting</Link></p>
            <p ><Link to='/Profile'>Profile</Link></p>
            <p
             onClick={()=>logout()}
            
            >Logout</p>

        </div>
        

    </div>
  )
}

export default ProfielNav