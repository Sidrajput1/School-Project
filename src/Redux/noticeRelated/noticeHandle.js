import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError
} from './noticeSlice2';

export const getAllNotices = () => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get('http://localhost:5000/api/v1/admin/noticecreate');
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}