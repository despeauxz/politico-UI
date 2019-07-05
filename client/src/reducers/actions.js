import {
    FETCHING_APP_COUNT,
    IS_FETCHING,
    IS_FETCHING_ERROR
} from '@constant/actionTypes';


const initialState = {
    data: [],
    errors: {},
    isFetching: false
};


export default (state = initialState, action) => {
    switch (action.type) {
    case IS_FETCHING:
        return {
            ...state,
            isFetching: true
        };
    case FETCHING_APP_COUNT:
        return {
            ...state,
            isFetching: false,
            data: action.payload
        };
    case IS_FETCHING_ERROR:
        return {
            ...state,
            isFetching: false,
            errors: action.payload
        }
    default:
        return state;
    }
};