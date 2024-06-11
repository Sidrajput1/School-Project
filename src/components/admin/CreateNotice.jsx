// import React, { useState } from 'react'
// import HomeLayout from '../../layout/HomeLayout'
// import { useDispatch } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { createNotice } from '../../Redux/noticeSlice';

// function CreateNotice() {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const { state } = useLocation();

//     const initialLectureData = state ? state.initialLectureData : {}

//     const [isDisabled,setIsDisabled] = useState(!initialLectureData?.newLecture)

//     const [userInput,setUserInput] = useState({
//         title: initialLectureData?.title || "",
//         description:initialLectureData?.description || "",
//         date:initialLectureData?.date || "",
//     })

//     function handleUserInput(e){
//         const { name, value } = e.target;
//         setUserInput({
//             ...userInput,
//             [name]: value,
//         });
//     }

//     async function handleFormSubmit(e){
//         e.preventDefault();

//         let res = undefined;

//         if(initialLectureData.newLecture){
//             if(!userInput.title ||!userInput.description || !userInput.date){
//                 toast.error('All Input fields are mandatory')
//                 return;

//             }
//             res = await dispatch(createNotice(userInput))
//         }else{
//             if(
//                 !userInput.title || !userInput.description || !userInput.date
//             ){
//                 toast.error("All fields are mandatory");
//                 //console.log(toast.error)
//                 return;
//             }
//         }
//         if(res?.payload?.sucess){
//             setUserInput({
//                 title:"",
//                 description:"",
//                 date:""
//             });
//             setIsDisabled(false)
//             navigate('/admin/dashboard')
//         }
//     }

//     return (
//         <HomeLayout>
//             <div className="flex items-center justify-evenly h-[100vh] ">
//                 <form
//                     onSubmit={handleFormSubmit}
//                     className="flex flex-col justify-around   gap-5 rounded-lg p-4 px-[2rem] text-white w-[700px] h-[600px] shadow-[0_0_10px_black] relative" noValidate>

//                     <h1 className="text-justify text-4xl font-bold ">Write
//                         <span className='px-4 text-red-600'>Notice</span>
//                     </h1>
//                     <main className="grid grid-cols-2 gap-x-0  text-start  w-full">
//                         <div className='space-y-6 '>
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-lg font-semibold " htmlFor="title">
//                                     Notice title

//                                 </label>
//                                 <input
//                                     required
//                                     type="text"
//                                     id="title"
//                                     name="title"
//                                     value={userInput.title}
//                                     onChange={handleUserInput}
//                                     placeholder="Enter the Course title"
//                                     className="bg-transparent px-2  py-1 border w-full"
//                                 // value={userInput.title}
//                                 // onChange={handleUserInput}
//                                 />
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label className="text-lg font-semibold" htmlFor="title">
//                                     Description

//                                 </label>
//                                 <textarea
//                                     required
//                                     type="text"
//                                     name="description"
//                                     id="description"
//                                     placeholder="Enter the course description"
//                                     className="bg-transparent px-2  py-1 border h-36 w-80 overflow-y-scroll resize-none"
//                                      value={userInput.description}
//                                     onChange={handleUserInput}
//                                 />
//                             </div>
//                             <div className='flex flex-col gap-1'>
//                                 <label className="text-lg font-semibold" htmlFor="title">
//                                     Date
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="date"
//                                     name="date"
//                                     placeholder='Please Enter the date in text Form'
//                                     value={userInput.date}
//                                     onChange={handleUserInput}
//                                     className="bg-transparent  px-2 py-1 border w-full"
//                                 />
//                             </div>

//                         </div>

//                     </main>
//                     <button
//                         className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
//                         type="submit"
//                     >
//                         Submit

//                     </button>
//                 </form>

//             </div>
//         </HomeLayout>
//     )
// }

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNotice } from '../../Redux/noticeSlice'; // Import createNotice action creator from noticeSlice
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

function CreateNotice() {
    const dispatch = useDispatch();
    //const history = useHistory();
    const navigate = useNavigate()
    const { isLoading, isError } = useSelector(state => state.notice); // Assuming you have isLoading and isError state in your notice slice

    const [userInput, setUserInput] = useState({
        title: "",
        details: ""
       
    });
    // function convertToISODate(dateString) {
    //     const [day, month, year] = dateString.split('-');
    //     const isoDateString = `${year}-${month}-${day}`;
    //     return isoDateString;
    // }
    
    // // Example usage:
    // const userInputDate = ''; // Assuming the user entered "1 June 2024"
    // const isoDate = convertToISODate(userInputDate);
    // console.log(isoDate); // Output: "2024-06-01"

    // function handleUserInput(e) {
    //     const { name, value } = e.target;
    //     setUserInput({
    //         ...userInput,
    //         [name]: value,
    //     });
    // }

    // async function handleFormSubmit(e) {
    //     e.preventDefault();

    //     try {
    //         const formattedDate = convertToISODate(userInput.date);
    //         if (!userInput.title || !userInput.details || !formattedDate) {

    //             throw new Error('All fields are mandatory');
    //         }

    //         // Dispatch createNotice action with userInput data
    //         await dispatch(createNotice({...userInput,date: formattedDate}));
            
    //         navigate('/admin/dashboard');
    //             // Redirect user to dashboard after successful submission
    //             //history.push('/admin/dashboard');
               
    //         } catch (error) {
    //             // Handle errors (e.g., show error message to user)
    //             console.error('Error creating notice:', error.message);
    //         }
    //         // if (res?.payload?.sucess) {
    //         //     setUserInput({
    //         //         title: "",
    //         //         description: "",
    //         //         date: ""
    //         //     });
    //         //     
    //         // }
    //     }
    // useEffect(() => {
    //     // Convert date format whenever userInput.date changes
    //     const formattedDate = convertToISODate(userInput.date);
    //     setUserInput(prevState => ({ ...prevState, date: formattedDate }));
       
    // }, []);

    // function convertToISODate(dateString) {
    //     const [day, month, year] = dateString.split('-');
    //     return `${year}-${month}-${day}`;
    // }

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            if (!userInput.title || !userInput.details) {
                throw new Error('All fields are mandatory');
            }

            await dispatch(createNotice(userInput));
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error creating notice:', error.message);
            // Handle error
        }
    }

    return (
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="title">Notice title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={userInput.title}
                    onChange={handleUserInput}
                    placeholder="Enter the notice title"
                />
                <label htmlFor="description">Description</label>
                <textarea
                    id="details"
                    name="details"
                    value={userInput.details}
                    onChange={handleUserInput}
                    placeholder="Enter the notice description"
                />
                {/* <label htmlFor="date">Date</label> */}
                {/* <input
                
                    type="date"
                    id="date"
                    name="date"
                    value={userInput.formattedDate}
                    onChange={handleUserInput}
                /> */}
                <button type="submit" disabled={isLoading}>Submit</button>
                {isError && <p>Error creating notice</p>}
                {isLoading && <p>Creating notice...</p>}
            </form>
        );
    }

    export default CreateNotice;


//export default CreateNotice