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
import instance from '@config/axios';
import { toast } from 'react-toastify';
import { toggleModal } from './ui';

export const isLoading = () => ({
    type: LOADING
});

export const addPartySuccess = party => ({
    type: ADD_PARTY_SUCCESS,
    payload: party
});

export const addPartyFailure = error => ({
    type: ADD_PARTY_FAILURE,
    payload: error
});

export const fetchPartiesSuccess = parties => ({
    type: GET_PARTIES_SUCCESS,
    payload: parties
});

export const fetchPartiesFailure = error => ({
    type: GET_PARTIES_FAILURE,
    payload: error
});

export const editPartySuccess = party => ({
    type: EDIT_PARTY_SUCCESS,
    payload: party
});

export const editPartyFailure = error => ({
    type: EDIT_PARTY_FAILURE,
    payload: error
});

export const deletePartySuccess = party => ({
    type: DELETE_PARTY_SUCCESS,
    payload: party
});

export const deletePartyFailure = error => ({
    type: DELETE_PARTY_FAILURE,
    payload: error
});

export const createParty = (values) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.post('/parties', values);
        dispatch(addPartySuccess(response.data.data));
        dispatch(toggleModal(false));
        toast.success('Party created!');
    } catch (error) {
        if (error.response.data.error) {
            toast.error(`${error.response.data.error}`);
        }
        dispatch(addPartyFailure(error.response.data.errors));
    }
};

export const getParties = () => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.get('/parties');
        dispatch(fetchPartiesSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchPartiesFailure(error.response.data.errors));
    }
};

export const editParty = (id, data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.patch(`/parties/${id}/name`, data);
        dispatch(editPartySuccess(response.data.data));
        dispatch(toggleModal(false));
        toast.success('Party Updated!');
    } catch (error) {
        dispatch(editPartyFailure(error.response.data.error));
        toast.error(`${error.response.data.error}`);
    }
};

export const deleteParty = (id) => async (dispatch) => {
    try {
        await instance.delete(`/parties/${id}`);
        dispatch(deletePartySuccess({ id }));
        dispatch(toggleModal(false));
        toast.success('Party Deleted!');
    } catch (error) {
        dispatch(deletePartyFailure(error.response.data.error));
        toast.error(`${error.response.data.error}`);
    }
};
