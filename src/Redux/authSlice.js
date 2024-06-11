import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/axiosInstance";
import {toast} from 'react-hot-toast'
import axios from "axios";

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data:(()=>{
        const storedData = localStorage.getItem('data');
        if(storedData !==undefined){
            try {
                return JSON.parse(storedData)
            } catch (error) {
                console.error("Error parsing JSON for 'data':", error);
                return {}
            }
        }else{
            return {}
        }
    })()

};

export const login =createAsyncThunk("auth/login",async(data)=>{
    try {
        let res = axiosInstance.post('/admin/login',data);
        await toast.promise(res,{
            loading:"Please Wait...",
            success: (data)=>{
                return data?.data?.message
            },
            error:"Login Failed"
        });
        // getting response resolved here
        res = await res;
        return res.data;
        
    } catch (error) {
        toast.error(error.message);
        
    }

});

export const logout = createAsyncThunk("auth/logout",async() => {
    try {
        const res = axiosInstance.post('/admin/logout')
        await toast.promise(res,{
            loading:"Please Wait! Logout in Progress",
            success:(data)=>{
                return data?.data?.message
            },
            error:'failed to logout'
        });
        return (await res).data;
       
        
    } catch (error) {
        toast.error(error.message);
        throw error;
    }

})





const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        // for Admin Login
        .addCase(login.fulfilled , (state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.admin));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.admin?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.admin;
            state.role = action?.payload?.admin?.role;
        })

        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.data = {}
            state.isLoggedIn = false
            state.role = '';
        })
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer