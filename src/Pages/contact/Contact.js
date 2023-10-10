import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backend_Url } from "../../Path";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import { useToast } from "@chakra-ui/react";


const Contact = () => {

  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [msg, setmsg] = useState('');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const isValidEmail = emailPattern.test(email);


  const [Loading, setLoading] = useState(false);
  const [toastmsg, settoastmsg] = useState('');
  const Navigate=useNavigate();
  
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    try {
      if (name == '' || email == '' || msg == '' ) {
        settoastmsg('please fill all data  😢')
        console.log("no data");
      
        return;
      }
 
      if(isValidEmail ){
        const response = await fetch(`${Backend_Url}/0auth/SendNotificationtoAdmin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email , msg  }),
          credentials: 'include',
        });
        
        const {NotificationSend} = await response.json();
        if (response.ok) {
          console.log('Data sent successfully:', NotificationSend);
          setname('');
          setemail('');
          setmsg('');
    
          showToast('Email sent successfully ','success');
          console.log('Email sent successfully');
          
          

        }
      }
      else {
        // Handle error (e.g., show an error message)

        console.error('Failed to send email');
        showToast('Invalid email','error');
        
      } 
    } catch (error) {
      console.error('Error:', error);
      
    }
    finally {
      setTimeout(() => {
        
        settoastmsg('');
      }, 2000);
    }
  };

  const toast = useToast();
  const showToast = (text,color) => {
    toast({
      title: text,
      position: 'top',
      isClosable: true,
      status:color,
      
    })
  };


  return (
    <>
      


    <NavBar/>
   
          <div className=" flex flex-col   pb-10">
              <div className="w-screen h-40 bg-center bg-no-repeat bg-cover flex items-center justify-center  opacity-90" >
                <div className="text-4xl text-[#053B50] font-bold" >
                  Contact Us
                </div>
              </div>

            <div className="flex justify-center  ">
                <div className="w-3/4  md:w-2/5 my-2 border-1 p-4 rounded-lg bg-white">
                              <form className="mt-6" onSubmit={handleSubmit}>
                          <div className="mb-2">
                              <label
                                  for="email"
                                  className="text-left ml-4 block text-sm font-semibold text-gray-800"
                              >
                                  Email 
                              </label>
                              <input
                              required={true}
                                  onChange={(e)=>setemail(e.target.value)}
                                  className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                  
                              />
                          </div>
                          <div className="mb-2">
                              <label
                                  for="password"
                                  className="text-left ml-4  block text-sm font-semibold text-gray-800"
                              >
                                  Name
                              </label>
                              <input
                              required={true}
                              onChange={(e)=>setname(e.target.value)}
                                  className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                              />
                          </div>
                          <div>
                          <label
                                  for="msg"
                                  className="text-left ml-4  block text-sm font-semibold text-gray-800"
                              >
                                  Message
                              </label>
                              <textarea
                              required={true}
                                className={`block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40
                            ${msg ? '' : ''}
                            `}
                                id="exampleFormControlTextarea1"
                                rows={3}
                                placeholder="Your message"
                                defaultValue={""}
                                value={msg}
                                onChange={(e) => setmsg(e.currentTarget.value)}
                              />
                          </div>
                          <div className="mt-6">
                              <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                                  Submit
                              </button>
                          </div>
                      </form>
                </div>

            </div>

        </div>
    
        
    <Footer/>
    
    </>
   
  
  );
};

export default Contact;