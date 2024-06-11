import React from 'react'
import ShortIntro from '../ShortIntro'

function Uniform() {
    return (
        <div>
            <ShortIntro />
            <div>
                <header className='w-full m-0 text-center  font-sans font-semibold '>
                    <h2 className='text-4xl text-gray-50 bg-orange-400'>School Uniform For Boys And Girls</h2>
                    <p className='text-lg font-semibold py-4'>Students are required to attend school in clean and complete uniform on all working days.</p>
                </header>
                <div className='py-16'>
                    <div className="flex flex-col ">
                        <h2 className="text-xl font-bold mb-4">Boys</h2>
                        <div className="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg mb-4">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Boys School
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Boys Uniform
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">St Marx Academy</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Dark Green Pant, White Shirt and Dark Green Tie</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>Black Shoes,White Shocks</td>
                                    </tr>
                                    {/* Add more rows for boys as needed */}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl font-bold my-4">Girls</h2>
                        <div className="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Girls School
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Girls Uniform
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">St Marx Academy</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Dark Green Skirt, White Shirt and Dark Green Tie</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>Black Shoes,White Shocks</td>
                                    </tr>
                                    {/* Add more rows for girls as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Uniform