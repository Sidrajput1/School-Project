// import React from 'react'
// import Marquee from "react-fast-marquee";


// function NoticePage() {
//   return (
//     <div>
//     <div className='w-full bg-black text-center '>
//        <Marquee pauseOnHover='true' className='text-[#f7ec11] text-2xl z-50'>
//             Notice:St Marx school
//        </Marquee>
//       <p>Notice From St Marx Academy</p>
//     </div>
//   </div>
//   )
// }

// export default NoticePage
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function NoticePage() {
  // const [notices, setNotices] = useState([]);

  // Function to fetch notices from the server
  // const fetchNotices = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/v1/admin/noticelist');
  //     const latest = notices.length < 0 ? notices[0] : '';
  //     console.log(latest)
  //    // setNotices(response.data.notices);
  //    setNotices(latest)
  //     console.log(response.data.notices)

  //   } catch (error) {
  //     console.error('Error fetching notices:', error);
  //   }
  // };

  // Fetch notices on component mount
  // useEffect(() => {
  //   fetchNotices();
    
  // }, []);
  const [latestNotice, setLatestNotice] = useState(null);

  useEffect(() => {
    // Fetch notices from the backend
    axios.get('http://localhost:5000/api/v1/admin/noticelist')
      .then(response => {
        // Extract the latest notice from the response data
        const notices = response.data.notices;
        if (notices.length > 0) {
          const latest = notices[notices.length-1];
          setLatestNotice(latest);
        }
      })
      .catch(error => {
        console.error('Error fetching notices:', error);
      });
  }, []); 

  
  return (
    <div>
      <div className="w-full bg-black text-center">
        <Marquee pauseOnHover={true} className="text-[#f7ec11] text-2xl z-50 px-3">
        {/* {notices.map((notice) => (
            <div key={notice._id} className="inline-block px-4">
              <h2 className="text-lg font-bold">{notice.title}</h2>
              <p className="text-sm">{notice.details}</p>
            </div>
          ))} */}
          {/* {
            notices && (
              <div>
              <h2 className="text-lg font-bold">{notices.title}</h2>
              <p className="text-sm">{notices.details}</p>
            </div>
            )
          } */}
          {/* {latestNotice ? `Notice: ${latestNotice.title}` : 'No notice available'} */}
            <br />
          {latestNotice?`Notice: ${latestNotice.details}`:'No details available'}
          
        </Marquee>
        <Link to={'/show/notice'}><p>Notice From St Marx Academy Click Me to Know More</p></Link>
        {/* <div className="mt-4">
          {notices.map((notice) => (
            <div key={notice._id} className="border border-gray-200 p-4 mb-4">
              <h2 className="text-lg font-bold">{notice.title}</h2>
              <p className="text-sm">{notice.details}</p>
              <p className="text-xs">Date: {notice.createdAt}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default NoticePage;
