import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    noticeData:[]
}

// export const createNotice = createAsyncThunk('/notice/create',async(data)=>{
//     let res = await axiosInstance.post('/admin/noticecreate',data)
//     await toast.promise(res,{
//         loading:"Please Wait! Notice created",
//         success:(data)=>{
//             return data?.data?.message
//         },
//         error:"Notice Creation failed"
//     });
//         res = await res;
//         return res.data;
// })

// export const createNotice = createAsyncThunk('notice/create',async(data)=>{
//     try {
//         let formData = new FormData();
//         formData.append('title',data?.title)
//         formData.append('description',data?.description)
//         formData.append('date',data?.date);

//         console.log(formData)

//         const res = axiosInstance.post('/admin/noticecreate',formData);
//         console.log(res)

//         toast.promise(res,{
//             loading:"Creating Notice",
//             success:"Notice Create Successfully",
//             error:"failed to create notice"
//         })
        
//     } catch (error) {
//         toast.error(error?.response?.data?.message);

//     }
// });


// export const getAllNotice = createAsyncThunk('/notice/get',async(data)=>{
//     let res = await axiosInstance.get('/admin//noticelist',data)
//     await toast.promise(res,{
//         loading:"please Wait! Loading",
//         success:(data)=>{
//             return data?.data?.message
//         },
//         error:"Notice Not Found"
//     });
//     res = await res;
//     return res.data;
// })

// export const deleteNotice = createAsyncThunk('/notice/delete',async(data)=>{
//     try {
//         const res = axiosInstance.delete(``)

//         toast.promise(res, {
//             loading: "Deleting the Notice...",
//             success: "Notice deleted successfully",
//             error: "Failed to delete Notice",
//           });
    
//           const response = await res;
//           return response.data;
        
//     } catch (error) {
//         toast.error(error?.response?.data?.message);
//     }
// })


// const noticeSlice = createSlice({
//     name:"notice",
//     initialState,
//     reducers:{},
//     // extraReducers:(builder)=>{
//     //     builder
//     //         .addCase(addNotice.fulfilled,(state,action)=>{
//     //             state.notices = action?.payload?.notices;
//     //         })
//     //         .addCase(getNotices.fulfilled,(state,action)=>{
//     //             state.notices = action?.payload?.notices
//     //         })
//     // }
//     extraReducers:(buider)=>{
//             buider.addCase(createNotice.fulfilled,(state,action)=>{
//                 if(action.payload){
//                     console.log(action.payload)
//                     state.noticeData = [...action.payload];
//                 }
//             });

//     },
// });

export const createNotice = createAsyncThunk('/notice/create', async (data, thunkAPI) => {
    try {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('details', data.details);
        

        const response = await axiosInstance.post('/admin/noticecreate', formData);
        console.log(response);
        toast.success("Notice Created Successfully");
        return response.data;
    } catch (error) {
        console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

// export const getAllNotice = createAsyncThunk('notice/get', async () => {
//     try {
//         const response = await axiosInstance.get('/admin/noticelist');
//         return response.data;
//     } catch (error) {
//         toast.error("Notice Not Found");
//         return error?.response?.data;
//     }
// });

// export const deleteNotice = createAsyncThunk('notice/delete', async (noticeId, thunkAPI) => {
//     try {
//         const response = await axiosInstance.delete(`/admin/noticedelete/${noticeId}`);
//         toast.success("Notice Deleted Successfully");
//         return response.data;
//     } catch (error) {
//         toast.error("Failed to delete Notice");
//         return thunkAPI.rejectWithValue(error?.response?.data);
//     }
// });

const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNotice.fulfilled, (state, action) => {
                state.noticeData.push(action.payload); // Assuming payload is the new notice
            })
            // .addCase(getAllNotice.fulfilled, (state, action) => {
            //     state.noticeData = action.payload; // Assuming payload contains all notices
            // })
            // .addCase(deleteNotice.fulfilled, (state, action) => {
            //     state.noticeData = state.noticeData.filter(notice => notice._id !== action.payload._id); // Assuming payload contains the deleted notice
            // });
    },
});


export const {} = noticeSlice.actions
export default noticeSlice.reducer