import React, { useEffect, useState } from 'react'
import 'flowbite-react'
import logo from '../assets/school_pics/logo.png'

import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
// import './nav.css';

function Navbar2() {
    // const [isOpen, setIsOpen] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScroll, setIsScrolled] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropDown = () => {
        setIsDropdownOpen(false)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

     useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if(scrollTop>30){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        };
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

     },[]);

    
    return (
       

        <nav className={` opacity-80 text-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 ${isScroll? `bg-[#3F985E] `:`bg-[#3F985E] `} `}>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className=' overflow-auto'>
                        <img src={logo} className="w-14 object-fill brightness-100 contrast-150 " alt="Flowbite Logo" />
                    </div>
                    <span id='st-marx' className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">St Marx Academy</span>
                </a>
                {/* <button data-collapse-toggle="mega-menu-full-image" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-image" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    // aria-controls="mega-menu-full-image"
                    // aria-expanded={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full-image" className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'} `}>
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse ">
                        <li>
                            <Link to={'/'} onClick={closeMobileMenu} className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                        </li>
                       

                        <li>
                            {/* <button id="mega-menu-full-cta-image-button" data-collapse-toggle="mega-menu-full-image-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button> */}
                            <button
                                id="mega-menu-full-cta-image-button"
                                data-collapse-toggle="mega-menu-full-image-dropdown"
                                className="flex items-center justify-between w-full py-2 px-3 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                onClick={toggleDropdown}
                            >
                                About
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <Link to={'/events'} onClick={closeMobileMenu} className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Events</Link>
                        </li>
                        <li>
                            <Link to={'/gallery'} onClick={closeMobileMenu} className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Gallery</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} onClick={closeMobileMenu} className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="mega-menu-full-image-dropdown" className={`mt-1 bg-[#355E3B] border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-white dark:text-white md:grid-cols-3 md:px-6">
                    <ul className=" mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                        <li>
                            <Link to={'/about'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to={'/tetimonial'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                What Parents Says About us
                            </Link>
                        </li>
                        <li>
                            <Link to={'/vision'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                Our vision
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admisson'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                Admissons
                            </Link>
                        </li>
                    </ul>
                    <ul className="mb-4 space-y-4 md:mb-0">
                        <li>
                            <Link to={'/about/uniform'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                               Uniform
                            </Link>
                        </li>
                        <li>
                            <Link to={'/rules'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                Rules & Regulations
                            </Link>
                        </li>
                        <li>
                            <Link to={'/calendar'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                Calendar
                            </Link>
                        </li>
                        <li>
                            <Link to={'/results'} onClick={closeDropDown} className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                Results
                            </Link>
                        </li>
                    </ul>
                    {/* <a to="#" className="p-8 bg-local bg-yellow-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken z-50" >
                        <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">We Are St Marx Acadmey</p>
                        
                        <Link to={'/about'}><button className='inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700'>
                            Get started
                        </button></Link>
                    </a> */}
                </div>
            </div>
        </nav>







    )
}

export default Navbar2

