import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from '../Redux/authSlice'
import noticeReducer from '../Redux/noticeRelated/noticeSlice2';
import gallerySliceReducer from '../Redux/gallerySlice';

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        notice:noticeReducer,
        gallery:gallerySliceReducer

    },

})

export default store;