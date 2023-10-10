import React, { useEffect } from 'react';
import NavBar from '../Component/NavBar';
import LoginC from '../Component/LoginComponent/LoginC';
import Footer from '../Component/Footer';
import { checkAccessToken } from '../Utils/Checkacesstoken';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const Navigate=useNavigate();
    useEffect(() => {
       if(checkAccessToken()){
            Navigate('/');
         } 
        return () => {
            
        };
    });
    
    return (
        <div>
            {/* <NavBar/> */}
            <LoginC/>
           
        </div>
        
    );
}