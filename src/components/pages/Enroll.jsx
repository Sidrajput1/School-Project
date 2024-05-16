import React, { useEffect } from 'react'
import 'aos/dist/aos.css';

import Aos from 'aos';
function Enroll() {
    useEffect( ()=> {
        Aos.init({
            
        })
    },[])
    return (
        <div  className="image-container relative md:bottom-0 bottom-[-100px]" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img className='block w-[100%] h-auto md:object-contain ' style={{ filter: 'blur(2px)' }} src="https://img.freepik.com/free-photo/handwriting-paper-pen-pencil-nearby-generated-by-ai_188544-37370.jpg?t=st=1714651241~exp=1714654841~hmac=3eab1c46484282f61f5ec47ad104e3f251651a41b5491e9579c35f44bbca3b3e&w=1060" alt="Your Image" />
            <div className="absolute top-0  left-0 w-[100%] h-[100%]  bg-gradient-to-b from-blue-200 via-blue-200 to-blue-300 mix-blend-overlay">

            </div>
            <div className=" md:absolute relative md:top-[40%] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
                <div className=''>
                    <h1 className="md:text-7xl text-2xl tracking-widest font-bold text-[#008000] brightness-200 line-clamp-1 md:max-w-[60rem] max-w-sm md:py-4 py-0">ENROLL TODAY !</h1>
                    <p className="md:text-3xl text-sm  line-clamp-2 max-w-xl  md:py-8 pb-0 md:pb-16 py-3">Currently serving students in St Marx through 10th grade.</p>
                </div>
                <form className="md:p-6 p-0 xl:p-10  text-black md:overflow-auto  overflow-hidden ">
                    <div className="md:max-w-sm w-full md:flex md:flex-col  md:mx-auto mx-0 md:space-y-8 space-y-3">
                        <div>
                            <input type='text' placeholder='Name'
                                className="w-full  h-10 bg-gray-100 rounded-full py-3  px-6 text-sm outline-none" />
                        </div>
                        <div>
                            <input type='email' placeholder='Email'
                                className="w-full h-10 bg-gray-100 rounded-full py-3 px-6 text-sm outline-none" />
                        </div>
                        <div>
                            <input type='email' placeholder='Phone No.'
                                className="w-full h-10 bg-gray-100 rounded-full py-3 px-6 text-sm outline-none" />
                        </div>
                        <div>
                            <textarea placeholder='Message' rows="6"
                                className="w-full h-10 bg-gray-100 rounded-3xl px-6 text-sm pt-3 outline-none"></textarea>
                        </div>
                        <button type='button'
                            className="text-white w-full relative bg-blue-500 hover:bg-blue-600 font-semibold rounded-full text-sm px-6 py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </div>
                </form>


            </div>

        </div>
    )
}

export default Enroll