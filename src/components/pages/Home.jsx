import React from 'react'
import './home2.css';
import SmallGalary from './SmallGalary';
import Message from './Message';
import NumberCount from '../NumberCount';
import Testimonial from './Testimonial';
import SliderGallery from './SliderGallery';
import ResultSlide from './ResultSlide';

function Home() {
    // const values = [500, 10, 25]
    return (
        // <div className='h-[90vh] w-full'>
        //     <div className="carousel w-full h-[90vh]">
        //         <h1 className='text-black font-3xl'>St Maxx Acadmey</h1>
        //         <div id="slide1" className="carousel-item relative w-full h-full">
        //             <img src="https://lh3.googleusercontent.com/p/AF1QipN8Ua6UsvNGOwQZsKqsa97kOKKj9mwl3hnLvTY6=s680-w680-h510" className="w-full" />

        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide4" className="btn btn-square">❮</a>
        //                 <a href="#slide2" className="btn btn-square">❯</a>
        //             </div>

        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full h-full">
        //             <img src="https://lh3.googleusercontent.com/p/AF1QipM1kiFOmZ5KvOApr-GYAJZxWmcN4u3omI6v2wXW=s680-w680-h510" className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-square">❮</a>
        //                 <a href="#slide3" className="btn btn-square">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full h-full">
        //             <img src="https://lh3.googleusercontent.com/p/AF1QipP_wtPrxKpNG4iIlY3ingY8b2-aIlsJs0o9BoEx=s680-w680-h510" className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-square">❮</a>
        //                 <a href="#slide4" className="btn btn-square">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide4" className="carousel-item relative w-full h-full border-2">
        //             <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide3" className="btn btn-square">❮</a>
        //                 <a href="#slide1" className="btn btn-square">❯</a>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div>
            <div  className='w-full min-h-[80vh] md:mt-0 mt-3 py-16 flex justify-around flex-col items-center'>
                <div className='wall py-8  w-full md:h-[30rem] h-auto  '>
                    <p id='paragraph' className='text-gray-200 md:pb-0 pb-16 md:mb-0 mb-16  relative md:mx-auto mx-0 font-semibold brightness-100 md:text-xl text-sm md:max-w-2xl max-w-xl md:line-clamp-6 line-clamp-8 md:text-justify text-center font-sans md:px-0 px-4'>
                        The St Marx School is one of the best private day schools in Patna. We are a coeducational elementary and middle school for children from early education through 10th grade. Our school is recognized for its supportive and engaging community that promotes academic excellence and creates a strong foundation for each child's future achievement.
                    </p>
                    <div className='sign md:top-[80%] absolute top-[80%] md:text-[6em] text-[4em]'>
                        {/* <h2 className='md:text-6xl text-3xl text-[#008000] text-center md:py-6 py-3 md:mt-0 mt-2 font-serif'>Our Toppers</h2> */}
                        <span className="fast-flicker">T</span>OPP<span className="flicker">E</span>RS
                    </div>
                </div>
                {/* <div className=' w-[90vh] h-[40vh] top-20'>
                        <ResultSlide/>
                    </div> */}
                <div className='text-center md:py-12 py-4'>
                    <ResultSlide />
                </div>

                {/* <marquee className='shadow-xl' width="100%" behavior="scroll" direction="left">
                    <div className='flex flex-row gap-10'>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://i.pinimg.com/736x/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg" />
                            <h1 className='text-lg text-white'>Avinash singh </h1>
                        </div>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" alt="" />
                            <h1 className='text-lg text-white'>Akansha singh </h1>
                        </div>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aRcAObtQMLMUJk22vVTCGs30ZfqQ0X1fTEojTUpn2iEp1DJ30pykeEXI-cOIg_RaaFE&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://kettocdn.gumlet.io/media/campaign/855000/855088/image/652915db09070.png?w=600&dpr=2.6" alt="" />
                        </div>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" alt="" />
                        </div>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" alt="" />
                        </div>
                        <div>
                            <img className='w-[120px] h-[150px]' src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" alt="" />
                        </div>
                    </div>
                </marquee> */}

            </div>

            <hr className='mt-0' />
            {/* <SmallGalary /> */}
            <Message />


            <SliderGallery />
            {/* <div className='flex justify-around items-center w-full h-[40vh] '>
                <NumberCount number={50} title="Faculty" />
                <NumberCount number={500} title="Students" />
                <NumberCount number={20} title="Subjects" />
                <NumberCount number={15} title="Programs" />


            </div> */}
            {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:h-[40vh] h-[120vh]'>
                <div className='col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1'>
                    <NumberCount number={50} title="Faculty" />
                </div>
                <div className='col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1'>
                    <NumberCount number={500} title="Students" />
                </div>
                <div className='col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1'>
                    <NumberCount number={20} title="Subjects" />
                </div>
                <div className='col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1'>
                    <NumberCount number={15} title="Programs" />
                </div>
            </div> */}


            <Testimonial />

        </div>
    )
}

export default Home;