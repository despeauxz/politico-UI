import {
    TOGGLE_MODAL
} from '@constant/actionTypes';

const initialState = {
    toggle: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
    case TOGGLE_MODAL:
        return {
            ...state,
            toggle: action.payload
        };
    default:
        return state;
    }
};
