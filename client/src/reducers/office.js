import {
    LOADING,
    ADD_OFFICE_SUCCESS,
    ADD_OFFICE_FAILURE,
    GET_OFFICES_SUCCESS,
    GET_OFFICES_FAILURE,
    EDIT_OFFICE_SUCCESS,
    EDIT_OFFICE_FAILURE,
    DELETE_OFFICE_SUCCESS,
    DELETE_OFFICE_FAILURE,
    ASPIRE_OFFICE_SUCCESS,
    ASPIRE_OFFICE_FAILURE
} from '@constant/actionTypes';


const initialState = {
    loading: false,
    errors: {},
    offices: []
};


export default (state = initialState, action) => {
    const removeOffice = (payload) => state.offices.filter(office => office.id !== payload.id);
    const editOffice = (payload) => {
        const array = state.offices.slice();
        const index = array.findIndex(office => office.id === payload.id);
        array[index] = payload;

        return array;
    };

    switch (action.type) {
    case LOADING:
        return {
            ...state,
            loading: true
        };
    case ADD_OFFICE_SUCCESS:
        return {
            ...state,
            loading: false,
            offices: [...state.offices, action.payload]
        };
    case GET_OFFICES_SUCCESS:
        return {
            ...state,
            offices: action.payload,
            loading: false
        };
    case EDIT_OFFICE_SUCCESS:
        return {
            ...state,
            loading: false,
            offices: editOffice(action.payload)
        };
    case ASPIRE_OFFICE_SUCCESS:
        return {
            ...state,
            loading: false,
        };
    case DELETE_OFFICE_SUCCESS:
        return {
            ...state,
            loading: false,
            offices: removeOffice(action.payload),
        };
    case ADD_OFFICE_FAILURE:
    case GET_OFFICES_FAILURE:
    case EDIT_OFFICE_FAILURE:
    case DELETE_OFFICE_FAILURE:
    case ASPIRE_OFFICE_FAILURE:
        return {
            ...state,
            loading: false,
            errors: action.payload
        };
    default:
        return state;
    }
};