import React from 'react'
import DashNav from '../../Component/DahBoard/DashBoarddeveloper/DashNav'
import DeveloperWallet from '../../Component/Walllet/DeveloperWallet'
import Footer from '../../Component/Footer'

const DeveloperWalletPage = () => {
  return (
    <div className='flex flex-col gap-10 justify-between '>
      <DashNav/>
        <DeveloperWallet/>
        <Footer/>
    </div>
  )
}

export default DeveloperWalletPage