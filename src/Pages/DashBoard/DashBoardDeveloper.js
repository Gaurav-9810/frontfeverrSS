import React, { useEffect } from 'react'
import NavBar from '../../Component/DahBoard/DashBoarddeveloper/DashNav'
import Footer from '../../Component/Footer'
import DashProfile from '../../Component/DahBoard/DashBoarddeveloper/DashProfile'
import { useParams } from 'react-router-dom'
import api from '../../Utils/api'


const DashBoard = () => {
  const { id } = useParams();

useEffect(() => {
  async function fetchData() {
    try {
      const response = await api.get(`/getDetailsByID/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          },
        credentials: 'include',
      });

      console.log('dashborad called'); // Check if "hello" is printed

      if (response.status === 200) {
        const { userData } = response.data;
        console.log(userData);
       
      } else {
        console.error('Response not OK:', response.status);
      }
    } catch (error) {
      console.error('Error:', error); // Log any errors
    }
  }

  fetchData(); // Call the fetchData function

  // Specify dependencies for the useEffect hook (e.g., id, apiBaseUrl)
}, [id]);


  return (
    <div className="flex flex-col min-h-screen">
         <NavBar/>  
          <DashProfile/> 
          <div className='mt-auto'>
              <Footer/>
          </div>
         
     </div>
  )
}

export default DashBoard