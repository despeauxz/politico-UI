import {
    TOGGLE_MODAL,
    VISIBILITY
} from '@constant/actionTypes';

const initialState = {
    toggle: false,
    visibility: false
};

export default (state = initialState, action) => {
    switch(action.type) {
    case TOGGLE_MODAL:
        return {
            ...state,
            toggle: action.payload
        };
    case VISIBILITY:
        return {
            ...state,
            visibility: action.payload
        };
    default:
        return state;
    }
};
