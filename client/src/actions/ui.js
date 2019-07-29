import {
    TOGGLE_MODAL,
} from "@constant/actionTypes";

export const toggleModal = value => ({
    type: TOGGLE_MODAL,
    payload: value
});
