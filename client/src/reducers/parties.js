import {
    LOADING,
    ADD_PARTY_SUCCESS,
    ADD_PARTY_FAILURE,
    GET_PARTIES_SUCCESS,
    GET_PARTIES_FAILURE,
    EDIT_PARTY_SUCCESS,
    EDIT_PARTY_FAILURE,
    DELETE_PARTY_SUCCESS,
    DELETE_PARTY_FAILURE
} from '@constant/actionTypes';


const initialState = {
    loading: false,
    errors: {},
    parties: []
};


export default (state = initialState, action) => {
    switch (action.type) {
    case LOADING:
        return {
            ...state,
            loading: true
        };
    case ADD_PARTY_SUCCESS:
        return {
            ...state,
            loading: false,
            parties: [...state.parties, action.payload]
        };
    case GET_PARTIES_SUCCESS:
        return {
            ...state,
            parties: action.payload,
            loading: false
        };
    case EDIT_PARTY_SUCCESS:
        return {
            ...state,
            loading: false,
        };
    case DELETE_PARTY_SUCCESS:
        return {
            ...state,
            parties: [
                ...state.parties.slice(0, action.payload.id),
                ...state.parties.slice(action.payload.id + 1)
            ],
        };
    case ADD_PARTY_FAILURE:
    case GET_PARTIES_FAILURE:
    case EDIT_PARTY_FAILURE:
    case DELETE_PARTY_FAILURE:
        return {
            ...state,
            loading: false,
            errors: action.payload
        };
    default:
        return state;
    }
};