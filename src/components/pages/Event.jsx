import React from 'react'
import ShortIntro from '../ShortIntro';

function Event() {

    const upcomingEvents = [
        {
            title: 'School Open House',
            description: 'Join us for a tour of our campus and meet our faculty and staff.',
            date: 'April 30, 2024',
            image: 'https://www.shutterstock.com/image-photo/graduation-college-school-degree-successful-600nw-521875054.jpg',
        },
        {
            title: 'Science Fair',
            description: 'Showcase your science projects and compete for prizes.',
            date: 'May 15, 2024',
            image: 'https://www.shutterstock.com/image-photo/graduation-college-school-degree-successful-600nw-521875054.jpg'
        },
        {
            title: 'Sports Day',
            description: 'Cheer on your classmates as they compete in various sports activities.',
            date: 'June 5, 2024',
            image: 'https://www.shutterstock.com/image-photo/graduation-college-school-degree-successful-600nw-521875054.jpg',
        },
    ];
    return (
        <div>
            <ShortIntro/>
            <div className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Upcoming Events</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Exciting Events You Don't Want to Miss
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Check out our upcoming events and mark your calendars!
                        </p>
                    </div>

                    <div className="mt-10">
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {upcomingEvents.map((event, index) => (
                                <li key={index} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div>
                                        <img className="h-64 w-full object-cover object-center rounded-t-lg" src={event.image} alt={event.title} />
                                    </div>
                                    <div className="w-full flex flex-col items-start justify-between p-6 space-y-4">
                                        <div className="flex-1">
                                            <h3 className="text-gray-900 text-lg font-medium">{event.title}</h3>
                                            <p className="mt-1 text-gray-500 text-sm">{event.description}</p>
                                            <p className="mt-1 text-gray-500 text-sm">{event.date}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Event