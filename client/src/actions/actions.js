import {
    FETCHING_APP_COUNT,
    IS_FETCHING,
    IS_FETCHING_ERROR
} from "@constant/actionTypes";
import instance from "@config/axios";

export const isFetching = () => ({
    type: IS_FETCHING
});

export const fetchDataCount = data => ({
    type: FETCHING_APP_COUNT,
    payload: data
});

export const fetchDataError = error => ({
    type: IS_FETCHING_ERROR,
    payload: error
});

export const appDataCount = () => async (dispatch) => {
    try {
        dispatch(isFetching);

        const response = await instance.get('/auth/details');

        dispatch(fetchDataCount(response.data.data));
    } catch (error) {
        dispatch(fetchDataError(error.response.data));
    }
};
