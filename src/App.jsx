

import './App.css'

import { Routes,Route, useLocation } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import HomeSlider from './components/pages/HomeSlider'
import About from './components/pages/About'
import Footer from './components/Footer'
import Galary from './components/pages/Galary'
import Navbar2 from './components/Navbar2'
import Contact from './components/pages/Contact'
import Vision from './components/pages/Vision'
import Uniform from './components/pages/Uniform'
import Event from './components/pages/Event'
import Calendar from './components/pages/Calendar'
import Testimonial from './components/pages/Testimonial'
import Header from './components/Header'
import Coming from './components/pages/Coming'
import Enroll from './components/pages/Enroll'
import logo from '../src/assets/school_pics/logo.png'
import MyLiveChat from './components/MyLiveChat'
import LoginPage from './components/admin/LoginPage'
import DashBoard from './components/admin/DashBoard'
import { useEffect, useState } from 'react'
import NoticePage from './components/Notice/NoticePage'
import CreateNotice from './components/admin/CreateNotice'
import UploadImage from './components/admin/UploadImage'
import CreateNoticeForm from './components/admin/Notice'
import ShowNotice from './components/admin/ShowNotice'
import ShowGallery from './components/admin/ShowGallery'
import RequireAuth from './auth/RequireAuth'





function App() {
  const location = useLocation();
  const navbarPaths = ['/', '/about', '/gallery', '/events', '/contact', '/vision', '/about/uniform', '/tetimonial', '/enroll'];
  const shouldRenderNavbar = navbarPaths.includes(location.pathname);
  
  const events = [
    { title: 'Event 1', date: '2024-04-28' },
    { title: 'Event 2', date: '2024-04-30' },
    {title:'Summer Holiday', date:'2024-05-15'}
  ]
  // const initialOptions = {
  //   "client-id": "AbKr4QlHgxgo1VG80TJRT8HIwOs4oemBr56goGd9UJILDVn0Hcl4HOOqwjFoDn8qxZ61orhzxlew_1kZ",
  //   currency: "INR",
  //   intent: "capture",
  // };
  const [showNotice,setShowNotice] = useState(true);

  useEffect( () => {
    const timeout = setTimeout(()=>{
      setShowNotice(false)
    },40000)

    return () => clearTimeout(timeout)
  },[]);

  const hideNotice = () => {
    setShowNotice(false)
  }
  

  // useEffect(()=>{
  //   const timeout = setTimeout(()=>{
  //          setShowModal(false)
  //        },5000)
    
  //        return () => clearTimeout(timeout)
       
  // },[]);

  

  return (
   
    <>
      
      <Header/>
      {shouldRenderNavbar && <Navbar2 />}
      {showNotice && <NoticePage onClick={hideNotice} />}
      <Routes>
        <Route path='/' element={<HomeSlider/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/gallery' element={<Galary/>}></Route>
        <Route path='/events' element={<Event/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/vision' element={<Vision/>}></Route>
        <Route path='/about/uniform' element={<Uniform/>}></Route>
        <Route path='/calendar' element={<>
          <h1 className="text-2xl font-bold text-center mt-4">School Calendar</h1>
          <Calendar events={events} />
        </>} />
        <Route path='/tetimonial' element={<Testimonial/>}></Route>
        <Route path='*' element={<Coming/>}></Route>
        <Route path='/enroll' element={<Enroll/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
       
       <Route path='/show/notice' element={<ShowNotice/>}></Route>
       <Route path='/show/gallery' element={<ShowGallery/>}></Route>

       <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
        <Route path='/admin/dashboard' element={<DashBoard/>}></Route>
        <Route path='/notice/create' element={<CreateNoticeForm/>}></Route>
        <Route path='/upload/image' element={<UploadImage/>}></Route>
       </Route>
      </Routes>
      <FloatingWhatsApp 
        phoneNumber='919308467268'
        accountName='St Marx Academy'
        placeholder='Send Message'
        avatar={logo}
        darkMode='true'
      />
      <div >
        <MyLiveChat/>
      </div>
     {shouldRenderNavbar && <Footer/>}
      </>
       
   
  )
}

export default App
