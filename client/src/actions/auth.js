import instance from "../config/axios";
import errorHandler from '../helpers/errorHandler';
import authAPI from '../utils/api/authAPI';
import {
    AUTHENTICATING,
    AUTHENTICATED,
    IS_AUTHENTICATED,
    UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
    CLEAR_AUTH_ERROR,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SET_AUTH_WORKING,
    GET_CURRENT_USER,
    UNSET_AUTH_WORKING
} from "../constants/actionTypes";

export const authenticating = () => ({
    type: AUTHENTICATING
});

export const isAuthenticated = () => ({
    type: IS_AUTHENTICATED
});

export const getCurrentUser = user => ({
    type: GET_CURRENT_USER,
    payload: user
});

export const setAuthWorking = () => ({
    type: SET_AUTH_WORKING
});

export const unsetAuthWorking = () => ({
    type: UNSET_AUTH_WORKING
});

export const authenticationSuccess = user => ({
    type: AUTHENTICATED,
    payload: user
});

export const authenticationFailure = error => ({
    type: AUTHENTICATION_ERROR,
    error
});

export const clearAuthError = () => ({
    type: CLEAR_AUTH_ERROR
});

export const signinSuccess = user => ({
    type: SIGNIN_SUCCESS,
    payload: user
});

export const signinFailure = error => ({
    type: SIGNIN_ERROR,
    payload: error
});

export const signupSuccess = user => ({
    type: SIGNUP_SUCCESS,
    payload: user
});

export const signupFailure = error => ({
    type: SIGNUP_ERROR,
    payload: error
});

export const resetUser = () => ({
    type: UNAUTHENTICATED
});

export const auth = (type, user) => async (dispatch) => {
    try {

        dispatch(authenticating());
        const response = await authAPI(type, user);
        localStorage.setItem('jwtToken', response.data.data.token);

        const dispatchType = type === 'signup' ? signupSuccess : signinSuccess;
        dispatch(dispatchType(response.data.data.user));
    } catch (error) {
        const errorResponse = errorHandler(error);
        const dispatchType = type === 'signup' ? signupFailure : signinFailure;

        dispatch(dispatchType(errorResponse.response));
    }
};

export const authenticateUser = () => async (dispatch) => {
    try {
        dispatch(authenticating());
    
        const res = await instance.get('/auth/refresh_token');
    
        localStorage.setItem('jwtToken', res.data.token);
    
        dispatch(authenticationSuccess(res.data.user));
    } catch (error) {
        const errorResponse = errorHandler(error);
    
        localStorage.removeItem('jwtToken');
    
        dispatch(authenticationFailure(errorResponse.response));
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("jwtToken");
    dispatch(resetUser());
};
