import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Helper/axiosInstance';
import toast from 'react-hot-toast';
const initialState = {
    galleries: [],
}

export const addPhotos = createAsyncThunk('/upload/image', async (data) => {
    const formData = new FormData()

    formData.append("title", data.title);
    formData.append('marks', data.marks);
    formData.append("description", data.description);
    formData.append('images', data.images)
    try {
        const res = axiosInstance.post(`/admin/upload`, formData)

        toast.promise(res, {
            loading: "Adding Photos...",
            success: "Photos added successfully",
            error: "Failed to add Photos",
        });

        const response = await res;

        return response.data;

    } catch (error) {
        toast.error(error?.response?.data?.message);

    }
});

export const getPhotos = createAsyncThunk('', async (data) => {

})

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.galleries = action?.payload?.galleries;
            })
            .addCase(addPhotos.fulfilled, (state, action) => {
                state.galleries = action?.payload?.galleries?.galleries;
            });
    }

});

export default gallerySlice.reducer