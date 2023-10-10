import logo from './logo.svg';
import './App.css';
import SpinnerLoader from './Component/LoaderC/SpinnerLoader';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { lazy ,Suspense } from 'react';
import { HStack } from '@chakra-ui/react';
const Home = lazy(() => import('./Pages/Home'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const Register = lazy(() => import('./Pages/Register'));
const DashBoardDeveloper = lazy(() => import('./Pages/DashBoard/DashBoardDeveloper'));
const Blog = lazy(() => import('./Pages/Blog'));
const Profile = lazy(() => import('./Pages/Profile'));
const DashBoardHire = lazy(() => import('./Pages/DashBoard/DashBoardHire'));
const ProjectHire = lazy(() => import('./Pages/ProjectDetail/ProjectHire'));
const OtpVerify = lazy(() => import('./Pages/OtpVerify'));
const Contact = lazy(() => import('./Pages/contact/Contact'));
const HireProfileForm = lazy(() => import('./Component/Form/HireProfileForm'));
const DeveloperForm = lazy(() => import('./Component/Form/DeveloperForm'));
const NewProjectForm = lazy(() => import('./Component/Form/NewProjectForm'));
const HireProfile = lazy(() => import('./Pages/HireProfile'));
const DeveloperProfile = lazy(() => import('./Pages/DeveloperProfile'));
const AllDeveloper = lazy(() => import('./Pages/AllDevloperPage/AllDeveloper'));
const AllBlogs = lazy(() => import('./Pages/AllBlogs'));
const ParticularBlog = lazy(() => import('./Pages/ParticularBlog'));
const AllJobPage = lazy(() => import('./Pages/AllJobs/AllJobPage'));
const PasswordCreate = lazy(() => import('./Googleauth/PasswordCreate'));
const Notification = lazy(() => import('./Pages/Notification/Notification'));
const Payment = lazy(() => import('./Pages/Payment/Payment'));
const DeveloperWallet = lazy(() => import('./Pages/Walllet/DeveloperWalletPage'));
const HireWalletPage = lazy(() => import('./Pages/Walllet/HireWalletPage'));
const NotFoundPage = lazy(() => import('./Pages/PageNotFoun/NotFoundPage'));
const ForgetPasswordP = lazy(() => import('./Pages/ForgetPassword/ForgetPasswordP'));
const OtpForget = lazy(() => import('./Component/OtpVerify/OtpForget'));
const SetPassword = lazy(() => import('./Pages/SetPassword/SetPassword'));




const AnotherLoader = ()=>{
  return <h1>loading</h1>
}




function App() {
  return (
    <div className="App">
       <BrowserRouter>
                                                      
            <Routes>
                <Route path='/' element={(
              <Suspense fallback={<SpinnerLoader/>}>
                <Home />
              </Suspense>
            )}></Route>

              
                <Route path='/Login' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <LoginPage />
              </Suspense>
            )}></Route>
                <Route path='/Register'
                element={(
                  <Suspense fallback={<AnotherLoader/>}>
                  
                    <Register/>
                  </Suspense>
                )}
                ></Route>
                
                <Route path='/DashBoard/Developer/:id'element={(
              <Suspense fallback={<AnotherLoader/>}>
                <DashBoardDeveloper />
              </Suspense>
            )}></Route>
                <Route path='/Blog' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <Blog />
              </Suspense>
            )}></Route>
                <Route path='/profile/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <Profile />
              </Suspense>
            )}></Route>
                <Route path='/DashBoard/Hire/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <DashBoardHire />
              </Suspense>
            )}></Route>
                <Route path='/ProjectDetails/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <ProjectHire />
              </Suspense>
            )} ></Route>
                <Route path='/otp/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <OtpVerify />
              </Suspense>
            )} ></Route>
                <Route path='/otpForget/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <OtpForget />
              </Suspense>
            )} ></Route>
                <Route path='/contactUs'element={(
              <Suspense fallback={<AnotherLoader/>}>
                <Contact />
              </Suspense>
            )}></Route>
                <Route path='/HireProfileForm/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <HireProfileForm />
              </Suspense>
            )}></Route>
                <Route path='/DeveloperProfileForm/:id'element={(
              <Suspense fallback={<AnotherLoader/>}>
                <DeveloperForm />
              </Suspense>
            )}></Route>
                <Route path='/HireProfile/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <HireProfile />
              </Suspense>
            )}></Route>
                <Route path='/DeveloperProfile/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <DeveloperProfile />
              </Suspense>
            )}></Route>
                <Route path='/Blogs' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <Blog />
              </Suspense>
            )}></Route>

                <Route path='/JobPost/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <NewProjectForm />
              </Suspense>
            )}></Route>
                <Route path='/AllDeveloper'element={(
              <Suspense fallback={<AnotherLoader/>}>
                <AllDeveloper />
              </Suspense>
            )}></Route>
                <Route path='/AllBlogs' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <AllBlogs />
              </Suspense>
            )}></Route>
                <Route path='/Blog/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <ParticularBlog />
              </Suspense>
            )}></Route>
                <Route path='/AllJobs' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <AllJobPage />
              </Suspense>
            )}></Route>
                <Route path='/PasswordCreate/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <PasswordCreate />
              </Suspense>
            )}></Route>
                <Route path='/Notification/:id'element={(
              <Suspense fallback={<AnotherLoader/>}>
                <Notification />
              </Suspense>
            )}></Route>
                
                <Route path='/paymentsuccess' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <Payment />
              </Suspense>
            )}></Route>
                <Route path='/walletDeveloper/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <DeveloperWallet />
              </Suspense>
            )}></Route>
                <Route path='/walletHire/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <HireWalletPage />
              </Suspense>
            )}></Route>
                <Route path='/forgetPassword' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <ForgetPasswordP />
              </Suspense>
            )}></Route>
                <Route path='/SetPassword/:id' element={(
              <Suspense fallback={<AnotherLoader/>}>
                <SetPassword />
              </Suspense>
            )}></Route>
                
               
                <Route path="*" element={(
              <Suspense fallback={<AnotherLoader/>}>
                <NotFoundPage />
              </Suspense>
            )} />
            
            
            </Routes>
          
       </BrowserRouter>
    </div>
  );
}

export default App;








