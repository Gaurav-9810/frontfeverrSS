import React, { useEffect, useState } from 'react'
import ProfileHeader from '../Component/Profile/ProfileHeader'
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer'
import ProfileRest from '../Component/Profile/ProfileRest'
import { useParams } from 'react-router-dom'
import { Backend_Url } from '../Path'

const Profile = () => {
  const{id}=useParams();
  const [ProfileData, setProfileData] = useState({})
 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${Backend_Url}/0auth/showDeveloperProfileById/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
         
         setProfileData(result)
         console.log(result);
       
        
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();

    // Return a cleanup function
    return () => {
      // Perform any cleanup actions here if needed
    };
  }, []);
   


  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      
          {ProfileData[0]?<>
          <ProfileHeader ProfileData={ProfileData}  />
          <ProfileRest ProfileData={ProfileData}/>
        
        </>:<></>}
      
      
      
      <Footer/>
    </div>
  )
}

export default Profile