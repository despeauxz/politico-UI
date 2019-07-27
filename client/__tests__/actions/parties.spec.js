/* eslint-disable max-len */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import moxios from 'moxios';
import instance from '@config/axios';

import {
    isLoading,
    addPartySuccess,
    addPartyFailure,
    fetchPartiesSuccess,
    fetchPartiesFailure,
    editPartySuccess,
    editPartyFailure,
    deletePartySuccess,
    deletePartyFailure,
    createParty,
    getParties,
    editParty,
    deleteParty
} from '@actions/parties';

const url = 'https://cryptic-escarpment-28116.herokuapp.com/api/v1/parties';
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

    describe('addPartySuccess', () => {
        it('should return an object with type ADD_PARTY_SUCCESS', () => {
            const party = { id: 1, name: 'APC' };
            const action = addPartySuccess(party);

            expect(action).toEqual({ type: 'ADD_PARTY_SUCCESS', payload: { id: 1, name: 'APC' } });
        });
    });

    describe('addPartyFailure', () => {
        it('should return an object with type ADD_PARTY_FAILURE', () => {
            const error = { error: 'Error' };
            const action = addPartyFailure(error);

            expect(action).toEqual({ type: 'ADD_PARTY_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('editPartySuccess', () => {
        it('should return an object with type EDIT_PARTY_SUCCESS', () => {
            const party = { id: 1, name: 'APC' };
            const action = editPartySuccess(party);

            expect(action).toEqual({ type: 'EDIT_PARTY_SUCCESS', payload: { id: 1, name: 'APC' } });
        });
    });

    describe('editPartyFailure', () => {
        it('should return an object with type EDIT_PARTY_FAILURE', () => {
            const error = { error: 'Error' };
            const action = editPartyFailure(error);

            expect(action).toEqual({ type: 'EDIT_PARTY_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('fetchPartiesSuccess', () => {
        it('should return an object with type GET_PARTIES_SUCCESS', () => {
            const party = [{ id: 1, name: 'APC' }];
            const action = fetchPartiesSuccess(party);

            expect(action).toEqual({ type: 'GET_PARTIES_SUCCESS', payload: [{ id: 1, name: 'APC' }] });
        });
    });

    describe('fetchPartiesFailure', () => {
        it('should return an object with type GET_PARTIES_FAILURE', () => {
            const error = { error: 'Error' };
            const action = fetchPartiesFailure(error);

            expect(action).toEqual({ type: 'GET_PARTIES_FAILURE', payload: { error: 'Error' } });
        });
    });

    describe('deletePartySuccess', () => {
        it('should return an object with type DELETE_PARTY_SUCCESS', () => {
            const party = { id: 1, name: 'APC' };
            const action = deletePartySuccess(party);

            expect(action).toEqual({ type: 'DELETE_PARTY_SUCCESS', payload: { id: 1, name: 'APC' } });
        });
    });

    describe('deletePartyFailure', () => {
        it('should return an object with type DELETE_PARTY_FAILURE', () => {
            const error = { error: 'Error' };
            const action = deletePartyFailure(error);

            expect(action).toEqual({ type: 'DELETE_PARTY_FAILURE', payload: { error: 'Error' } });
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
                const expectedActions = ['LOADING', 'ADD_PARTY_SUCCESS', 'TOGGLE_MODAL'];

                mockReq.onPost(url).reply(201, {
                    id: 1,
                    name: 'AC',
                    fullname: 'Action Congress',
                    hqaddress: 'abuja, Wuse'
                });

                return store.dispatch(createParty()).then(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return error from an endpoint', () => {
                const expectedActions = ['LOADING', 'ADD_PARTY_FAILURE'];

                mockReq.onGet(url).reply(401, { errors: 'Error' });

                return store.dispatch(createParty()).catch(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return data correctly from fetch all parties endpoint', () => {
                const expectedActions = ['LOADING', 'GET_PARTIES_SUCCESS'];

                mockReq.onGet(url).reply(200, [
                    {
                        id: 1,
                        name: 'AC',
                        fullname: 'Action Congress',
                        hqaddress: 'abuja, Wuse'
                    }
                ]);

                return store.dispatch(getParties()).then(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return error from fetch all parties endpoint', () => {
                const expectedActions = ['LOADING', 'GET_PARTIES_FAILURE'];

                mockReq.onGet(url).reply(401, { errors: 'Error' });

                return store.dispatch(getParties()).catch(() => {
                    const dispatchedActions = store.getActions();
    
                    const actionTypes = dispatchedActions.map(action => action.type);
    
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            // it('should return data correctly from an endpoint', () => {
            //     const expectedActions = ['LOADING', 'EDIT_PARTY_SUCCESS', 'TOGGLE_MODAL'];

            //     mockReq.onPatch(url).reply(200, {
            //         id: 1,
            //         name: 'AC',
            //         fullname: 'Action Congress',
            //         hqaddress: 'abuja, Wuse'
            //     });

            //     return store.dispatch(editParty()).then(() => {
            //         const dispatchedActions = store.getActions();
    
            //         const actionTypes = dispatchedActions.map(action => action.type);
    
            //         expect(actionTypes).toEqual(expectedActions);
            //     });
            // });

            // it('should return data correctly from an endpoint', () => {
            //     const expectedActions = ['LOADING', 'DELETE_PARTY_SUCCESS', 'TOGGLE_MODAL'];

            //     mockReq.onDelete(`${url}/1`).reply(200, {
            //         id: 1,
            //         name: 'AC',
            //         fullname: 'Action Congress',
            //         hqaddress: 'abuja, Wuse'
            //     });

            //     return store.dispatch(deleteParty(1)).then(() => {
            //         const dispatchedActions = store.getActions();
  
            //         const actionTypes = dispatchedActions.map(action => action.type);
  
            //         expect(actionTypes).toEqual(expectedActions);
            //     });
            // });
        });
    });
});