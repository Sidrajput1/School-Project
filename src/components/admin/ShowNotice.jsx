import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import '../Notice/notice.css'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function ShowNotice() {
    const [notices, setNotices] = useState([]);
    const navigate = useNavigate();
    const fetchNotices = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/admin/noticelist');
            setNotices(res.data.notices)
            await toast.success('Notice fetched successfully')

        } catch (error) {
            console.error('Error fetching notices:', error);
            toast.error('Failed to fetch notices. Please try again later.');
        }

    };

    const deleteNotice = async (noticeId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/v1/admin/noticedelete/${noticeId}`)
            console.log(response)
            if(response.status===200 && response.data.success){
                setNotices(notices.filter((notice) => notice._id !== noticeId));
                await toast.success('Notice delete Successfully')
            }else{
                toast.error('Failed to delete Notice')
                console.error('Failed to delete notice:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting notice:', error.message);
        }
    }
        

    useEffect(() => {
        fetchNotices();
    }, [])
    return (
        <div>
            <div className='notice-board'>
                <h2>Notice Board</h2>
                <button 
                         className="absolute left-2 text-xl text-green-500"
                         onClick={() => navigate(-1)}
                        >
                             <AiOutlineArrowLeft/>

                        </button>
                {notices.length > 0 ? (
                    <ul>
                        {notices.map((notice) => (
                            <li key={notice._id}>
                                <h3>{notice.title}</h3>
                                <p>{notice.details}</p>
                                <p>Created at: {new Date(notice.createdAt).toLocaleString()}</p>
                                <button className='btn bg-red-400' onClick={()=>deleteNotice(notice._id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No notices found</p>
                )}
            </div>
        </div>
    )
}

export default ShowNotice