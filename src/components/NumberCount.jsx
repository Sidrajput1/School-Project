import React, { useEffect, useState } from 'react'
import CountUp from "react-countup";
// import '../components/pages/count.css';

function NumberCount({ number, title }) {

    // const [currentValueIndex, setCurrentValueIndex] = useState(0);
    // const [currentValue, setCurrentvalue] = useState(values[0]);

    // useEffect(() => {

    //     if (currentValueIndex < values.length - 1) {
    //         const interval = setInterval(() => {
    //             setCurrentValueIndex(prevIndex => prevIndex + 1)
    //             setCurrentvalue(values[currentValueIndex + 1])
    //         }, 2000)

    //         return () => clearInterval(interval)
    //     }

    // }, [values, currentValueIndex])


    return (
        // <div>
        //     <div className="number-counter">
        //         <span className="counter ">{currentValue}</span>
        //     </div>
        // </div>
        // <div className="number text-4xl mr-3 ml-3 border-2 rounded-3xl p-6 bg-lime-400">
        //     <CountUp duration={10} className="counter italic font-bold mx-0 my-1" end={number} />
        //     <span>+</span>
        //     <br />
        //     <span>{title}</span>
        // </div>
        <div className="number text-4xl md:mt-10 mt-0 mr-3 ml-3 border-2 rounded-3xl p-4 bg-lime-400 text-center md:text-left md:flex md:flex-col md:items-center md:justify-center">
            <CountUp duration={10} className="counter italic font-bold mx-0 my-1" end={number} />
            <span className="">+</span>
            <br className="md:hidden" />
            <span>{title}</span>
        </div>

    )
}

export default NumberCount