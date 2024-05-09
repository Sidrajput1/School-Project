import React from 'react'
import { Link } from 'react-router-dom'

function SmallGalary() {
    return (
        <div id='box1' className='w-full min-h-[90vh] py-6'>
            <div className="carousel carousel-center rounded-box gap-2 mt-16">
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipNOJ4r_Ptsxbs4_MecIhlGGIUNGoc9mcvoJ3Em_=s680-w680-h510" alt="Pizza" />
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipPjsvxv495sE4z6RosTlK8We6X29Y5ylqvHlzeu=s680-w680-h510" alt="pic2" />
                </div>
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoors1MSccgLEGSOp5LPdDQK7Gg8qk7wpbxQWGXvwenw&s" alt="pic3" />
                    <img className='w-auto h-[15rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoors1MSccgLEGSOp5LPdDQK7Gg8qk7wpbxQWGXvwenw&s" alt="pic4" />
                </div>
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSDDmtLVufd2RcSxcJuzv6DE3a1_G3WIbBUj7a7M_lg&s" alt="pic5" />
                    <img className='w-auto h-[15rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSDDmtLVufd2RcSxcJuzv6DE3a1_G3WIbBUj7a7M_lg&s" alt="pic6" />
                </div>
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipP70-EA14koasvYyBbEtpW_6nd7SHhPo5W2IZJy=s680-w680-h510" alt="Pic8" />
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipP70-EA14koasvYyBbEtpW_6nd7SHhPo5W2IZJy=s680-w680-h510" alt="Pic9" />
                </div>
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipM8jfYoPZ5MmqeQ35q5Y_7kDbBx1dTfk_LHPXFr=s680-w680-h510" alt="Pic10" />
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipM8jfYoPZ5MmqeQ35q5Y_7kDbBx1dTfk_LHPXFr=s680-w680-h510" alt="Pic11" />
                </div>
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipNPA7sPo2N-mUUuaFW11_WF_vcZkZv-dttS59Eo=s680-w680-h510" alt="pic12" />
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipNPA7sPo2N-mUUuaFW11_WF_vcZkZv-dttS59Eo=s680-w680-h510" alt="pic13" />
                </div>
                <div className="carousel-item flex flex-col">
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipPSZQ_u13C027OYCI92HUBhGUvYsc6nzdeudgpA=s680-w680-h510" alt="pic14" />
                    <img className='w-auto h-[15rem]' src="https://lh3.googleusercontent.com/p/AF1QipPSZQ_u13C027OYCI92HUBhGUvYsc6nzdeudgpA=s680-w680-h510" alt="pic15" />
                </div>
                <div className="carousel-item ">
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                    <span className="loading loading-spinner text-info"></span>
                    
                    <span className='mt-16 py-6'><Link to={'/galary'} className='btn text-white bg-slate-900 text-center m-auto top-10'>to Show More</Link></span>
                </div>
            </div>

        </div>
    )
}

export default SmallGalary