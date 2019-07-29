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
    const removeParty = (payload) => state.parties.filter(party => party.id !== payload.id);
    const editParty = (payload) => {
        const array = state.parties.slice();
        const index = array.findIndex(party => party.id === payload.id);
        array[index] = payload;

        return array;
    };
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
            parties: editParty(action.payload)
        };
    case DELETE_PARTY_SUCCESS:
        return {
            ...state,
            loading: false,
            parties: removeParty(action.payload),
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