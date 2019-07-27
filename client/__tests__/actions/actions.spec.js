import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import moxios from 'moxios';
import instance from '@config/axios';

import {
    isFetching,
    fetchDataCount,
    fetchDataError,
    appDataCount
} from '@actions/actions';

const url = 'https://cryptic-escarpment-28116.herokuapp.com/api/v1/auth/details';
const mockReq = new MockAdapter(instance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
    isFetching: false,
    data: {},
    errors: {}
});

describe('Actions action', () => {
    describe('isFetching', () => {
        it('should return an object with type IS_FETCHING', () => {
            const action = isFetching();

            expect(action).toEqual({ type: 'IS_FETCHING' });
        });
    });

    describe('fetchDataCount', () => {
        it('should return an object with type FETCHING_APP_COUNT', () => {
            const data = { users: 0 };
            const action = fetchDataCount(data);

            expect(action).toEqual({ type: 'FETCHING_APP_COUNT', payload: { users: 0 } });
        });
    });

    describe('fetchDataError', () => {
        it('should return an object with type IS_FETCHING_ERROR', () => {
            const data = { errors: 'Error' };
            const action = fetchDataError(data);

            expect(action).toEqual({ type: 'IS_FETCHING_ERROR', payload: { errors: 'Error' } });
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
                const expectedActions = ['IS_FETCHING', 'FETCHING_APP_COUNT'];

                mockReq.onGet(url).reply(200, {
                    users: 2,
                    offices: 0,
                    parties: 0,
                });

                return store.dispatch(appDataCount()).then(() => {
                    const dispatchedActions = store.getActions();
        
                    const actionTypes = dispatchedActions.map(action => action.type);
        
                    expect(actionTypes).toEqual(expectedActions);
                });
            });

            it('should return error from an endpoint', () => {
                const expectedActions = ['IS_FETCHING', 'IS_FETCHING_ERROR'];

                mockReq.onGet(url).reply(401, { errors: 'Error' });

                return store.dispatch(appDataCount()).catch(() => {
                    const dispatchedActions = store.getActions();
        
                    const actionTypes = dispatchedActions.map(action => action.type);
        
                    expect(actionTypes).toEqual(expectedActions);
                });
            });
        });
        
    });
});
