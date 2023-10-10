import React from 'react'
import NavBar from '../Component/DahBoard/DashBoarddeveloper/DashNav'
import Footer from '../Component/Footer';
import ProfileDeveloper from '../Component/Profile/HireProfile/ProfileDeveloper';
const DeveloperProfile = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow">
        <ProfileDeveloper />
      </div>

      <Footer />
    </div>

</> 
  )
}

export default DeveloperProfile