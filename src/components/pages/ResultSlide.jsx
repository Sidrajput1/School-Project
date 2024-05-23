import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';



function ResultSlide() {
    useEffect( ()=> {
        Aos.init({
            debounceDelay:1000,
            duration:500,
            delay:300,
            easing:'ease-in-out'
        })
    },[])
    return (
        <div data-aos="flip-down" className="carousel   carousel-center md:max-w-[80rem] max-w-[20rem] border-2 p-4 space-x-4 bg-black rounded-box">
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://i.pinimg.com/736x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg" className="rounded-box h-64" />
                <div className='text-white'>
                    <p >Rakesh Kumar</p>
                    <p className=''>Marks:97%</p>
                    <p className=''>Position: <span>1st</span></p>
                </div>
                
            </div>
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" className="rounded-box h-64" />
                <div className='text-white'>
                    <p >AkanSha Kumari</p>
                    <p className=''>Marks:96%</p>
                    <p className=''>Position: <span>2nd</span></p>
                </div>
            </div>
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aRcAObtQMLMUJk22vVTCGs30ZfqQ0X1fTEojTUpn2iEp1DJ30pykeEXI-cOIg_RaaFE&usqp=CAU" className="rounded-box h-64" />
                <div className='text-white '>
                    <p >Madhukar Kumar </p>
                    <p className=''>Marks:94%</p>
                    <p className=''>Position: <span>3rd</span></p>
                </div>
            </div>
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://kettocdn.gumlet.io/media/campaign/855000/855088/image/652915db09070.png?w=600&dpr=2.6" className="rounded-box h-64 w-52" />
                <div className='text-white '>
                    <p >Madhukar Kumar </p>
                    <p className=''>Marks:94%</p>
                    <p className=''>Position: <span>3rd</span></p>
                </div>
            </div>
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" className="rounded-box h-64" />
                <div className='text-white'>
                    <p >AkanSha Kumari</p>
                    <p className=''>Marks:96%</p>
                    <p className=''>Position: <span>2nd</span></p>
                </div>
            </div>
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://i.pinimg.com/736x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg" className="rounded-box h-64" />
                <div className='text-white'>
                    <p >Rakesh Kumar</p>
                    <p className=''>Marks:97%</p>
                    <p className=''>Position: <span>1st</span></p>
                </div>
                
            </div>
            <div className="carousel-item flex flex-col justify-around">
                <img src="https://kettocdn.gumlet.io/media/campaign/855000/855088/image/652915db09070.png?w=600&dpr=2.6" className="rounded-box h-64 w-52" />
                <div className='text-white '>
                    <p >Madhukar Kumar </p>
                    <p className=''>Marks:94%</p>
                    <p className=''>Position: <span>3rd</span></p>
                </div>
            </div>
        </div>
    )
}

export default ResultSlide