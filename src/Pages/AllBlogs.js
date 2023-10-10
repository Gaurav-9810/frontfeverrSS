import React from 'react';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';
import ShowallBlogs from '../Component/Blog/ShowallBlogs';

const AllBlogs = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-between">
    <NavBar/>
     <ShowallBlogs/>
    <Footer/>
    </div>
  )
}

export default AllBlogs