import {
    TOGGLE_MODAL,
    VISIBILITY
} from "@constant/actionTypes";

export const toggleModal = value => ({
    type: TOGGLE_MODAL,
    payload: value
});

export const changeVisisbility = value => ({
    type: VISIBILITY,
    payload: value
});
