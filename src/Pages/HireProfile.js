import React from 'react'
import NavBar from '../Component/DahBoard/DashBoardHire/DashNavHire'
import ProfileHire from '../Component/Profile/HireProfile/ProfileHire';
import Footer from '../Component/Footer';

const HireProfile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow">
        <ProfileHire />
      </div>

      <Footer />
    </div>
  )
}

export default HireProfile