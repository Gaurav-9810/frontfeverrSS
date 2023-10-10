// import React, { useEffect, useState } from 'react';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, fbProvider } from '../Firebase/FirebaseConfig.js';
// import { useNavigate } from 'react-router-dom';

// const FbTest = () => {
//   const [email, setemail] = useState('');
//   const [username, setuserName] = useState('');
//   const Navigate=useNavigate();
  
//   const [error, setError] = useState(null); // New state for handling errors

//   const handleSubmit = async (email, username) => {
//     console.log(email);
//     try {
//       const response = await fetch('http://localhost:5000/0auth/registerfacebook', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email }),
//         withCredentials: true,
//       });
  
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//         console.log('Login by facebook successful');
//         Navigate('/home');
//       } else {
//         // Handle non-200 response status (e.g., display an error message)
//         console.error('Failed to register:', response.status, response.statusText);
//         // Optionally, you can parse the error response if available
//         const errorResponse = await response.json().catch(() => ({}));
//         console.error('Error details:', errorResponse);
//         window.alert('Failed to register');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle network errors or other unexpected errors
//       window.alert('An unexpected error occurred');
//     }
//   };
  
  
//   useEffect(() => {
//     console.log(email); // This will log the updated email value
//      if(email!='')
//        handleSubmit(email,username);
  
//   }, [email,username]);

//   const handleFacebookLogin = () => {
//     signInWithPopup(auth, fbProvider)
//       .then((result) => {
//         const u = result.user;
//         console.log("User object from Facebook:", u);
  
//         // Check if the email is present
//         if (u.email) {
//           setemail(u.email);
//           setuserName(u.displayName);
//           setError(null);
//         } else {
//           setError("Email not available in the Facebook user object.");
//         }
//       })
//       .catch((err) => {
//         // Check if the error is due to user closing the popup
//         if (err.code === "auth/popup-closed-by-user") {
//           setError("Authentication popup was closed by the user.");
//         } else {
//           setError(err.message);
//         }
//       });
//   };
  

//   const handleLogout = () => {
//     setemail('');
//     setuserName('');
//   };

//   return (
//     <div>
//       <div>
//         {email ? (
//           <>
//             <button onClick={handleLogout}>Logout</button>
//             <h3>Welcome, {username}</h3>
//             <p>{email}</p>
//           </>
//         ) : (
//           <div>
//             <button className="" onClick={handleFacebookLogin}>
//               Sign In with Facebook
//             </button>
//             {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if present */}
//              <p>{email}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FbTest;
