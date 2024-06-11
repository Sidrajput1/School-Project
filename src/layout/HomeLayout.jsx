import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';

function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogedIn = useSelector((state)=> state?.auth?.isLoggedIn)
    //const role = useSelector((state)=> state?.auth?.role);

    const changeWidth = () => {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "auto";
    };
    const hideDrawer = () => {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        //changeWidth();
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "0";
    }

    const handleLogOut = async(e) => {
        e.preventDefault()
        const res = await dispatch(logout());
        if(res?.payload?.success){
            navigate("/");
        }else{
            console.error("Logout failed:", res.payload);
        }
    }
    return (
        <div className='min-h-[100vh] bg-black'>
            <div className='drawer absolute left-0 z-50 w-fit'>
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-white m-4"
                        />
                    </label>
                </div>
                <div className='drawer-side w-0'>
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">School Home</Link>
                        </li>
                        <li>
                            <Link to={'/admin/dashboard'}>Admin Home</Link>
                        </li>
                        <li>
                            <Link to={'/notice/create'}>Notice</Link>
                        </li>
                        <li>
                            <Link to={'/upload/image'}>Gallery</Link>
                        </li>
                        {/* <li className="absolute top-44 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                                    <Link to={"/login"}>Login</Link>
                                </button>
                                <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                                    <Link to={""}>Signup</Link>
                                </button>
                            </div>
                        </li> */}

                        <li className="absolute top-[45rem] w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className="btn-primary bg-green-500 px-4 py-1 font-semibold rounded-md w-full">
                                    <Link to={""}>Profile</Link>
                                </button>
                                <button className="btn-secondary bg-red-500 px-4 py-1 font-semibold rounded-md w-full">
                                    <Link onClick={handleLogOut} >Logout</Link>
                                </button>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
            {children}

        </div>
    )
}

export default HomeLayout