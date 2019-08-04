import instance from '@config/axios';
import { toast } from 'react-toastify';
import { toggleModal } from './ui';
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
    ASPIRE_OFFICE_FAILURE,
    PETITION_OFFICE_SUCCESS,
    PETITION_OFFICE_FAILURE
} from '@constant/actionTypes';


export const isLoading = () => ({
    type: LOADING
});

export const addOfficeSuccess = party => ({
    type: ADD_OFFICE_SUCCESS,
    payload: party
});

export const addOfficeFailure = error => ({
    type: ADD_OFFICE_FAILURE,
    payload: error
});

export const fetchOfficesSuccess = parties => ({
    type: GET_OFFICES_SUCCESS,
    payload: parties
});

export const fetchOfficesFailure = error => ({
    type: GET_OFFICES_FAILURE,
    payload: error
});

export const editOfficeSuccess = party => ({
    type: EDIT_OFFICE_SUCCESS,
    payload: party
});

export const editOfficeFailure = error => ({
    type: EDIT_OFFICE_FAILURE,
    payload: error
});

export const deleteOfficeSuccess = party => ({
    type: DELETE_OFFICE_SUCCESS,
    payload: party
});

export const deleteOfficeFailure = error => ({
    type: DELETE_OFFICE_FAILURE,
    payload: error
});

export const aspireOfficeSuccess = candidate => ({
    type: ASPIRE_OFFICE_SUCCESS,
    payload: candidate
});

export const aspireOfficeFailure = error => ({
    type: ASPIRE_OFFICE_FAILURE,
    payload: error
});

export const petitionOfficeSuccess = () => ({
    type: PETITION_OFFICE_SUCCESS
});

export const petitionOfficeFailure = error => ({
    type: PETITION_OFFICE_FAILURE,
    payload: error
});

export const createOffice = (values) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.post('/offices', values);
        dispatch(addOfficeSuccess(response.data.data));
        dispatch(toggleModal(false));
        toast.success('Office created!');
    } catch (error) {
        dispatch(addOfficeFailure(error.response.data.errors));
    }
};

export const getOffices = () => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.get('/offices');
        dispatch(fetchOfficesSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchOfficesFailure(error.response.data.errors));
    }
};

export const editOffice = (id, data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.patch(`/offices/${id}`, data);
        dispatch(editOfficeSuccess(response.data.data));
        dispatch(toggleModal(false));
        toast.success('Party Updated!');
    } catch (error) {
        dispatch(editOfficeFailure(error.response.data.error));
        toast.error(`${error.response.data.error}`);
    }
};

export const deleteOffice = (id) => async (dispatch) => {
    try {
        dispatch(isLoading());

        await instance.delete(`/offices/${id}`);
        dispatch(deleteOfficeSuccess({ id }));
        dispatch(toggleModal(false));
        toast.success('Office Deleted!');
    } catch (error) {
        dispatch(deleteOfficeFailure(error.response.data.error));
        toast.error(`${error.response.data.error}`);
    }
};

export const aspireOffice = (userId, officeId, partyId) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.post(`/office/${userId}/register`, { officeId, partyId });

        dispatch(aspireOfficeSuccess(response.data.data));
        dispatch(toggleModal(false));
        toast.success('Please wait for a confirmation mail by Electoral body');
    } catch (error) {
        dispatch(aspireOfficeFailure(error.response.data.errors));
    }
};

export const petitionOffice = (values, officeId) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await instance.post('/petition', { ...values, officeId });
        dispatch(petitionOfficeSuccess());
        dispatch(toggleModal(false));
        toast.success(response.data.message);
    } catch (error) {
        dispatch(petitionOfficeFailure(error.response.data.errors));
    }
};
