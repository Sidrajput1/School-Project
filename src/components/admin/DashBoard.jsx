import React from 'react'
import HomeLayout from '../../layout/HomeLayout'
import { Link } from 'react-router-dom'
import admin1 from '../../assets/admin1.png'

function DashBoard() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        WelCome To
                        <span className="text-yellow-500 font-bold">
                            Admin DashBoard
                        </span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        You are the Admin. You can do anything from here
                    </p>
                    {/* for butons */}
                    <div className="space-x-6">
                        <Link to={"/upload/image"}>
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-blue-600 ease-in-out transition-all duration-300">
                                Update Gallery
                            </button>
                        </Link>
                        <Link to={"/notice/create"}>
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-300 ease-in-out transition-all duration-300">
                                Set Notice
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <img src={admin1} alt="homepage_image" />

                </div>

            </div>

        </HomeLayout>

    )
}

export default DashBoard