import React from 'react'
import Photos from './Photos'
import GalaryPage from './GalleryPage'
import GalleryPage from './GalleryPage'
import ShowGallery from '../admin/ShowGallery'

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
                    <div className="text-center md:p-[7rem] py-36">
                        <h2 id='st-marx' className="text-2xl lg:text-5xl font-extrabold tracking-tight md:py-6 py-1">
                            Welcome to Our Gallery
                        </h2>
                        <p id='outline' className="text-lg lg:text-2xl mb-6">
                            Managed By: PRABSIVG SAMAJ KALYAN EVUM SHIKSHAN SANSTHA
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