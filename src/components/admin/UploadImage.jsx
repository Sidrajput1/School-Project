import React, { useEffect, useState } from 'react'
import HomeLayout from '../../layout/HomeLayout'
import { useDispatch } from 'react-redux'
import { addPhotos } from '../../Redux/gallerySlice'
import { useLocation, useNavigate } from 'react-router-dom'

function UploadImage() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const PhotoDetails = useLocation().state
    const [userInput, setUserInput] = useState({
        title: "",
        marks:"",
        description: "",
        images: null,
       

    })
   


    function handleChange(e) {
        const { name, value } = e.target
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    const getImage = (e) => {
        e.preventDefault();
        const uploadImage = e.target.files[0];
        console.log(uploadImage)

        if (uploadImage) {
            setUserInput({ ...userInput, images: uploadImage })
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    images: uploadImage
                });
            });
        }
    }

    async function onSubmit(e){
        e.preventDefault();
        if(!userInput.title  ){
            toast.error('All fields are mandatory')
            return;

        }

        const res = await dispatch(addPhotos(userInput));
        console.log(res.payload)
        if(res?.payload?.success){
            setUserInput({
                
                title:"",
                marks:"",
                description:"",
                images:undefined,
                previewImage:''
               

            })
            navigate('/admin/dashboard')
        }
    }
    // useEffect( ()=>{
    //     if(!PhotoDetails) navigate("/")
    // },[])
    return (
        <HomeLayout>
            <div className="flex items-center justify-evenly h-[100vh] ">
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col justify-around   gap-5 rounded-lg p-4  text-white w-[700px] h-[600px] shadow-[0_0_10px_black] relative">
                    <h1 className="text-justify text-2xl font-bold ">Upload
                        <span className='px-4 text-red-600'>Image</span>
                    </h1>
                    <main className="grid grid-cols-2 gap-x-10  text-start  w-full">
                        <div className='space-y-6 '>
                            <div>
                                <label className="cursor-pointer" htmlFor="image_uploads">
                                    <div className="w-full h-44 m-auto flex items-center justify-center border">
                                        <h1 className="font-bold text-lg">
                                            Upload your Image Here
                                        </h1>
                                    </div>
                                </label>
                                {/* <img
                                    className="w-full h-44 m-auto border"
                                    // src={userInput.previewImage}
                                    alt="Preview Image"
                                /> */}

                                <input
                                    className=""
                                    onChange={getImage}
                                    type="file"
                                    id="image_uploads"
                                    name="image_uploads"
                                    accept=".jpg,.jpeg,.png"
                                // disabled={isDisabled}

                                />


                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold " htmlFor="title">
                                     Title

                                </label>
                                <input

                                    type="name"
                                    id="title"
                                    name="title"
                                    value={userInput.title}
                                    onChange={handleChange}
                                    placeholder="Enter the Name"
                                    className="bg-transparent px-2  py-1 border w-full"
                                // value={userInput.title}
                                // onChange={handleUserInput}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="marks">Marks</label>
                                <input 
                                type="number" id='marks' name='marks' value={userInput.marks} onChange={handleChange} 
                                className="bg-transparent px-2  py-1 border w-full"
                                />

                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Description

                                </label>
                                <textarea
                                    
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter the course description"
                                    className="bg-transparent px-2  py-1 border h-24 w-80 overflow-y-scroll resize-none"
                                    value={userInput.description}
                                    onChange={handleChange}
                                />
                            </div>


                        </div>

                    </main>
                    <button
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                        type="submit"
                    >
                        Submit

                    </button>
                </form>

            </div>

        </HomeLayout>

    )
}

export default UploadImage