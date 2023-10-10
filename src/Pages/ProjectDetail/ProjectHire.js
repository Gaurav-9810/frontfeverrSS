import React, { useEffect } from 'react'

import Footer from '../../Component/Footer'
import ProjectDetails from '../../Component/ProjectDescription/ProjectDetails'
import NavBar from '../../Component/DahBoard/DashBoarddeveloper/DashNav'
import api from '../../Utils/api'
import { useParams } from 'react-router-dom'

const ProjectHire = () => {
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
    <div className="flex flex-col h-[100vh] justify-between ">
      
        <NavBar/>
       <ProjectDetails/> 
      
      
      <Footer/>
    </div>
  )
}

export default ProjectHire