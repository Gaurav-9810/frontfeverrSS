import React from 'react'
import NavBar from '../Component/NavBar'
import Header from '../Component/Header'
import BlogContent from '../Component/Blog/BlogContent'
import Footer from '../Component/Footer'

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavBar/>
        <Header/>
        <BlogContent />
        <Footer/>

    </div>
  )
}

export default Blog