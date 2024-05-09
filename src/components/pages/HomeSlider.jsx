import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import './home.css'
import Home from './Home'
import Navbar2 from '../Navbar2';
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
            <div className='min-h-[100vh]'>
                <Slider autoplay={3000} className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content "
                            style={{ background: `url('${item.image}') no-repeat center center `, height: '100vh', backgroundSize: 'cover', }}

                        >
                            <div className="inner">
                                <h1 >{item.title}</h1>
                                <p>{item.description}</p>
                                {/* <button className='bg-[#7CFC00]'><Link to={'/about'}> {item.button}</Link></button> */}
                            </div>
                        </div>
                    ))}
                    
                </Slider>
                <div className="slider-overlay ">
                    <h1 className='m-0 text-center py-5 text-3xl font-semibold'>We Are Welcoming You</h1>
                    <button className='enroll  '>ENROLL NOW</button>
                </div>
            </div>
            <Enroll/>
            <Home />
        </div>

    )
}

export default HomeSlider