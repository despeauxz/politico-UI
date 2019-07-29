/* eslint-disable max-len */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import moxios from 'moxios';
import instance from '@config/axios';

import {
    isLoading,
    addOfficeSuccess,
    addOfficeFailure,
    fetchOfficesSuccess,
    fetchOfficesFailure,
    editOfficeSuccess,
    editOfficeFailure,
    deleteOfficeSuccess,
    deleteOfficeFailure,
    aspireOfficeSuccess,
    aspireOfficeFailure,
    createOffice,
    getOffices,
    editOffice,
    deleteOffice,
    aspireOffice
} from '@actions/office';

const url = 'https://cryptic-escarpment-28116.herokuapp.com/api/v1/offices';
const mockReq = new MockAdapter(instance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
    loading: false,
    parties: [],
    errors: {}
});

describe('Actions action', () => {
    describe('loading', () => {
        it('should return an object with type LOADING', () => {
            const action = isLoading();

            expect(action).toEqual({ type: 'LOADING' });
        });
    });

    describe('addOfficeSuccess', () => {
        it('should return an object with type ADD_PARTY_SUCCESS', () => {
            const party = { id: 1, name: 'APC' };
            const action = addOfficeSuccess(party);

            expect(action).toEqual({ type: 'ADD_OFFICE_SUCCESS', payload: { id: 1, name: 'APC' } });
        });
    });

    describe('addOfficeFailure', () => {
        it('should return an object with type ADD_OFFICE_FAILURE', () => {
            const error = { error: 'Error' };
            const action = addOfficeFailure(error);

            expect(action).toEqual({ type: 'ADD_OFFICE_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('editOfficeSuccess', () => {
        it('should return an object with type EDIT_OFFICE_SUCCESS', () => {
            const party = { id: 1, name: 'APC' };
            const action = editOfficeSuccess(party);

            expect(action).toEqual({ type: 'EDIT_OFFICE_SUCCESS', payload: { id: 1, name: 'APC' } });
        });
    });

    describe('editOfficeFailure', () => {
        it('should return an object with type EDIT_OFFICE_FAILURE', () => {
            const error = { error: 'Error' };
            const action = editOfficeFailure(error);

            expect(action).toEqual({ type: 'EDIT_OFFICE_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('fetchOfficesSuccess', () => {
        it('should return an object with type GET_OFFICES_SUCCESS', () => {
            const party = [{ id: 1, name: 'APC' }];
            const action = fetchOfficesSuccess(party);

            expect(action).toEqual({ type: 'GET_OFFICES_SUCCESS', payload: [{ id: 1, name: 'APC' }] });
        });
    });

    describe('fetchOfficesFailure', () => {
        it('should return an object with type GET_OFFICES_FAILURE', () => {
            const error = { error: 'Error' };
            const action = fetchOfficesFailure(error);

            expect(action).toEqual({ type: 'GET_OFFICES_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('deleteOfficeSuccess', () => {
        it('should return an object with type DELETE_OFFICE_SUCCESS', () => {
            const party = { id: 1, name: 'APC' };
            const action = deleteOfficeSuccess(party);

            expect(action).toEqual({ type: 'DELETE_OFFICE_SUCCESS', payload: { id: 1, name: 'APC' } });
        });
    });

    describe('deleteOfficeFailure', () => {
        it('should return an object with type DELETE_OFFICE_FAILURE', () => {
            const error = { error: 'Error' };
            const action = deleteOfficeFailure(error);

            expect(action).toEqual({ type: 'DELETE_OFFICE_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('aspireOfficeSuccess', () => {
        it('should return an object with type ASPIRE_OFFICE_SUCCESS', () => {
            const party = { id: 1, name: 2 };
            const action = aspireOfficeSuccess(party);

            expect(action).toEqual({ type: 'ASPIRE_OFFICE_SUCCESS', payload: { id: 1, name: 2 } });
        });
    });

    describe('aspireOfficeFailure', () => {
        it('should return an object with type ASPIRE_OFFICE_FAILURE', () => {
            const error = { error: 'Error' };
            const action = aspireOfficeFailure(error);

            expect(action).toEqual({ type: 'ASPIRE_OFFICE_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('Actions', () => {
        afterEach(() => {
            store.clearActions();
            localStorage.clear();
            jest.clearAllMocks();
        });

        describe('Fetching', () => {
            beforeEach(() => {
                moxios.install(axios);
            });

            afterEach(() => {
                moxios.uninstall(axios);
            });

            it('should return data correctly from an endpoint', () => {
                const expectedActions = ['LOADING', 'ADD_OFFICE_SUCCESS', 'TOGGLE_MODAL'];

                mockReq.onPost(url).reply(201, {
                    id: 1,
                    name: 'President',
                    type: 'Federal',
                    electionDate: null
                });

                return store.dispatch(createOffice()).then(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return error from an endpoint', () => {
                const expectedActions = ['LOADING', 'ADD_OFFICE_FAILURE'];

                mockReq.onGet(url).reply(401, { errors: 'Error' });

                return store.dispatch(createOffice()).catch(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return data correctly from fetch all parties endpoint', () => {
                const expectedActions = ['LOADING', 'GET_OFFICES_SUCCESS'];

                mockReq.onGet(url).reply(200, [
                    {
                        id: 1,
                        name: 'AC',
                        fullname: 'Action Congress',
                        hqaddress: 'abuja, Wuse'
                    }
                ]);

                return store.dispatch(getOffices()).then(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return error from fetch all offices endpoint', () => {
                const expectedActions = ['LOADING', 'GET_OFFICES_FAILURE'];

                mockReq.onGet(url).reply(401, { errors: 'Error' });

                return store.dispatch(getOffices()).catch(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return data correctly from an endpoint', (done) => {
                const expectedActions = ['LOADING', 'EDIT_OFFICE_SUCCESS', 'TOGGLE_MODAL'];

                mockReq.onPatch(`${url}/1/name`, { name: 'APC' }).reply(200, {
                    id: 1,
                    name: 'AC',
                    fullname: 'Action Congress',
                    hqaddress: 'abuja, Wuse'
                });

                store.dispatch(editOffice(1, { name: 'Presido' })).then(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });

                done();
            });

            it('should return error from edit a office endpoint', (done) => {
                const expectedActions = ['LOADING', 'EDIT_OFFICE_FAILURE'];

                mockReq.onPatch(`${url}/1`).reply(401, { errors: 'Error' });

                store.dispatch(getOffices()).catch(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });

                done();
            });

            it('should return data correctly from an endpoint', (done) => {
                const expectedActions = ['LOADING', 'DELETE_OFFICE_SUCCESS', 'TOGGLE_MODAL'];

                mockReq.onDelete(`${url}/1`).reply(200, {
                    id: 1,
                    name: 'AC',
                    fullname: 'Action Congress',
                    hqaddress: 'abuja, Wuse'
                });

                store.dispatch(deleteOffice(1)).then(() => {
                    const dispatchedActions = store.getActions();
  
                    const actionTypes = dispatchedActions.map(action => action.type);
  
                    expect(actionTypes).toEqual(expectedActions);
                });

                done();
            });

            it('should return error from delete a office endpoint', (done) => {
                const expectedActions = ['LOADING', 'DELETE_OFFICE_FAILURE'];

                mockReq.onDelete(`${url}/1`).reply(401, { errors: 'Error' });

                store.dispatch(deleteOffice(1)).catch(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });

                done();
            });

            it('should return data correctly from an endpoint', (done) => {
                const expectedActions = ['LOADING', 'ASPIRE_OFFICE_SUCCESS', 'TOGGLE_MODAL'];

                mockReq.onPost('https://cryptic-escarpment-28116.herokuapp.com/api/v1/office/1/register').reply(201, {
                    id: 1,
                    name: 'AC',
                    fullname: 'Action Congress',
                    hqaddress: 'abuja, Wuse'
                });

                store.dispatch(aspireOffice(1)).then(() => {
                    const dispatchedActions = store.getActions();
  
                    const actionTypes = dispatchedActions.map(action => action.type);
  
                    expect(actionTypes).toEqual(expectedActions);
                });

                done();
            });


            it('should return error from aspire for a office endpoint', (done) => {
                const expectedActions = ['LOADING', 'ASPIRE_OFFICE_FAILURE'];

                mockReq.onPost('https://cryptic-escarpment-28116.herokuapp.com/api/v1/office/1/register').reply(401, { errors: 'Error' });

                store.dispatch(aspireOffice(1)).catch(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });

                done();
            });
        });
    });
});