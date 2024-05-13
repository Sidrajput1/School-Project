import React from 'react'

function ShortIntro() {
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
                    <div className="text-center md:p-[7rem] pt-[10rem]">
                        <h2 id='st-marx' className="text-2xl lg:text-8xl text-[#008000] z-50 font-extrabold tracking-wide mb-4">
                              St Marx Acadmey
                        </h2>
                        <p id='outline' className="text-lg lg:text-2xl mb-6">
                            Educating Minds, Empowering Lives
                        </p>
                        {/* <p className="text-lg lg:text-xl">
                            Discover our commitment to excellence in education and community
                            engagement.
                        </p> */}
                    </div>

                </div>

            </div>
    </div>
  )
}

export default ShortIntro