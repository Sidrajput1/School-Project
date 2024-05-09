import React from 'react'
import Photos from './Photos'
import GalaryPage from './GalleryPage'
import GalleryPage from './GalleryPage'

function Galary() {
    return (
        <div>
            <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <img
                    className="absolute inset-0 h-full w-full object-fill"
                    src="https://lh3.googleusercontent.com/p/AF1QipM1kiFOmZ5KvOApr-GYAJZxWmcN4u3omI6v2wXW=s680-w680-h510"
                    alt="School Building"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
                <div className="relative z-10 p-10 lg:p-20 text-white">
                    <div className="text-center p-[7rem]">
                        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight py-6">
                            Welcome to Our School Galary
                        </h2>
                        <p className="text-lg lg:text-xl mb-6">
                            Educating Minds, Empowering Lives
                        </p>
                        {/* <p className="text-lg lg:text-xl">
                            Discover our commitment to excellence in education and community
                            engagement.
                        </p> */}
                    </div>

                </div>

            </div>
            <GalleryPage/>
        </div>
    )
}

export default Galary