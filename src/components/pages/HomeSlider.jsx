import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import './home.css'
import Home from './Home'

import Enroll from './Enroll';



const content = [
    {
        title: "St Marx Academy",
        description: " St Marx Acadmey located at First building of Lane no. - 7 Gali, No.2, Chandmari Rd, Kankarbagh, Patna, Bihar 800020 ",
        button: "Read More",
        image: "https://github.com/VladaWebDev/stemdk_front/blob/master/src/images/hero.jpeg?raw=true",
    },
    {
        title: "",
        description: "",
        button: "",
        image: "https://lh3.googleusercontent.com/p/AF1QipPk2QKQErtUGANn0AV5PTY5laRJfZANOLiW-UU1=s680-w680-h510"
    },
    {
        title: "",
        description: "",
        button: "",
        image: "https://lh3.googleusercontent.com/p/AF1QipN8Ua6UsvNGOwQZsKqsa97kOKKj9mwl3hnLvTY6=s680-w680-h510"

    }
]



function HomeSlider() {
    return (

        <div>
            <div className='min-h-[150vh]'>
                <Slider autoplay={3000} className="animateOut slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content brightness-200 "
                            style={{ background: `url('${item.image}') no-repeat center center `, height: '100vh', backgroundSize: 'cover', }}

                        >
                            <div className="inner">
                                <h1 id='st-marx' >{item.title}</h1>
                                <p >{item.description}</p>
                                {/* <button className='bg-[#7CFC00]'><Link to={'/about'}> {item.button}</Link></button> */}
                            </div>
                        </div>
                    ))}

                </Slider>
                <div className="slider-overlay  ">
                    <h1  className='welcome welcome--shadow m-0 text-center py-5 md:text-3xl text-xl font-semibold tracking-wider' data-text="We Are Welcoming You">We Are Welcoming You</h1>
                    <Link to={'/enroll'}><button className='enroll md:text-lg text-sm md:ml-[rem] ml-0 w-full hover:bg-yellow-300 transition-all ease-in-out duration-300 cursor-pointer hover:w-[90%] hover:text-3xl '>ENROLL NOW</button></Link>
                    <div className='md:w-[90%] h-auto w-full md:flex md:flex-row  grid grid-flow-row grid-cols-2 py-3 px-4  items-center md:mx-16 mx-0 z-50'>
                        <div
                            className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full md:max-w-[17rem] max-w-[9rem] h-64 rounded-3xl font-[sans-serif] overflow-hidden mx-auto mt-4 ">
                            <div className="px-4 my-6">
                                <img src="https://html.merku.love/shelly/assets/img/icon5.png" className='inline pl-20 pb-2' alt="" />
                                <h3 className="text-lg font-semibold text-center">Awessom Teachers</h3>
                                <p className="mt-2 text-sm text-gray-400 text-center">Luckily, We have best Teachers in Our School
                                    arcu,
                                    at fermentum dui. Maecenas</p>
                                <Link to={'/teachers'}><button type="button"
                                    className="px-[6.5rem] py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 ">View</button></Link>
                            </div>
                        </div>
                        <div
                            className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full md:max-w-[17rem] max-w-[9rem] h-64 rounded-3xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                            <div className="px-4 my-6 ">
                                <img src="https://html.merku.love/shelly/assets/img/icon7.png" className='inline pl-20 pb-2 ' alt="" />
                                <h3 className="text-lg font-semibold text-center ">Global Certificate</h3>
                                <p className="mt-2 text-sm text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                                    arcu,
                                    at fermentum dui. Maecenas</p>
                                <Link to={'/certificate'}><button type="button"
                                    className="px-[6.5rem] py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button></Link>

                            </div>
                        </div>
                        <div
                            className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full md:max-w-[17rem] max-w-[9rem] h-64 rounded-3xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                            <div className="px-4 my-6">
                                <img src="https://html.merku.love/shelly/assets/img/icon8.png" className='inline pl-24 pb-2 ' alt="" />
                                <h3 className="text-lg font-semibold text-center">Best Facility</h3>
                                <p className="mt-2 text-sm text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                                    arcu,
                                    at fermentum dui. Maecenas</p>
                                <Link to={'/facility'}><button type="button"
                                    className="px-[6.5rem] py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button></Link>
                            </div>
                        </div>
                        <div
                            className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full md:max-w-[17rem] max-w-[9rem] h-64 rounded-3xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                            <div className="px-4 my-6">
                                <img src="https://html.merku.love/shelly/assets/img/icon9.png" className='inline pl-20 pb-2 ' alt="" />
                                <h3 className="text-lg font-semibold text-center">Student Support Services</h3>
                                <p className="mt-2 text-sm text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                                    arcu,
                                    at fermentum dui. Maecenas</p>
                                <Link to={'/student/support'}><button type="button"
                                    className="px-[6.5rem] py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 ">View</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Enroll />
            <Home />
        </div>

    )
}

export default HomeSlider