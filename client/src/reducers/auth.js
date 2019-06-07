import { 
    AUTHENTICATING,
    AUTHENTICATED,
    UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
    CLEAR_AUTH_ERROR,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SET_AUTH_WORKING,
    UNSET_AUTH_WORKING,
} from "../constants/actionTypes";

const initialState = {
    isAuthenticated: !!localStorage.getItem('jwtToken'),
    error: null,
    user: {},
    loading: false,
    working: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case AUTHENTICATING:
        return { 
            ...state,
            loading: true
        };
    case SET_AUTH_WORKING:
        return {
            ...state,
            working: true
        };
    case UNSET_AUTH_WORKING:
        return {
            ...state,
            working: false
        };
    case AUTHENTICATED:
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
            error: null,
            loading: false
        };
    case UNAUTHENTICATED:
    case CLEAR_AUTH_ERROR:
        return {
            ...state,
            isAuthenticated: false,
            error: null,
            loading: false
        };
    case AUTHENTICATION_ERROR:
    case SIGNIN_ERROR:
    case SIGNUP_ERROR:
        return {
            ...state,
            isAuthenticated: false,
            user: {},
            error: action.payload,
            loading: false
        };
    default:
        return state;
    }
};