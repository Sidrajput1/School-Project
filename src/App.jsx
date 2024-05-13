//import '@fullcalendar/core/main.css';
//import '@fullcalendar/daygrid/main.css';
//import '@fullcalendar/interaction/main.css';

import './App.css'

import { Routes,Route } from 'react-router-dom'

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

//import '@fullcalendar/interaction/main.css';

function App() {
  
  const events = [
    { title: 'Event 1', date: '2024-04-28' },
    { title: 'Event 2', date: '2024-04-30' },
    {title:'Summer Holiday', date:'2024-05-15'}
  ]

  return (
    <>
      <Header/>
      <Navbar2 />
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
      </Routes>
      <Footer/>
    </>
  )
}

export default App
