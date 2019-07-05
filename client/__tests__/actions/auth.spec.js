/* eslint-disable max-len */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import MockAdapter from 'axios-mock-adapter';
import instance from '../../src/config/axios';
import authAPI from '@utils/api/authAPI';

import {
    auth,
    authenticating,
    authenticationSuccess,
    authenticationFailure,
    signinSuccess,
    signinFailure,
    signupSuccess,
    signupFailure,
    clearAuthError,
    setAuthWorking,
    unsetAuthWorking,
    logout
} from '@actions/auth';

const url = 'https://cryptic-escarpment-28116.herokuapp.com/api/v1';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../src/utils/api/authAPI.js');

const store = mockStore({
    isAuthenticated: false,
    error: null,
    user: {},
    loading: false
});

const newUser = {
    user: {
        "firstname": "John",
        "lastname": "Doe",
        "email": "example@gmail.com",
        "phoneNo": null,
        "isAdmin": null,
        "modified_at": null
    }
};
const values = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@gmailcom',
    password: 'password',
    passwordConfirm: 'password'
};
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJvdGhlcm5hbWUiOm51bGwsImVtYWlsIjoiZXhhbXBsZUBnbWFpbC5jb20iLCJwaG9uZU5vIjpudWxsLCJhdmF0YXIiOiJodHRwczovL3d3dy50YW5uZXJmaW5hbmNpYWwuY2Evd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDEvcGVyc29uLXBsYWNlaG9sZGVyLW1hbGUtNS0xLTMwMHgzMDAtMjUweDI1MC5qcGciLCJpc0FkbWluIjpudWxsLCJwYXJ0eUlkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxOS0wNi0yMFQyMjoyODoyMy43NTFaIiwibW9kaWZpZWRfYXQiOm51bGx9LCJpYXQiOjE1NjEwNjk3MDN9.n7u_snOEc08NTB8hcVD10fEFTPKPUGbsVp9yaOmqGMY';

describe('Auth actions', () => {
    describe('authenticating', () => {
        it('should return an object with type AUTHENTICATING', () => {
            const authAction = authenticating();

            expect(authAction).toEqual({ type: 'AUTHENTICATING' });
        });
    });

    describe('authenticationSuccess', () => {
        it('should return an object with type AUTHENTICATED', () => {
            const userDetails = { name: 'Berry' };
            const authAction = authenticationSuccess(userDetails);
  
            expect(authAction).toEqual({ type: 'AUTHENTICATED', payload: { name: 'Berry' } });
        });
    });

    describe('authentication Failure', () => {
        it('should return an object with type AUTHENTICATION_ERROR', () => {
            const authAction = authenticationFailure('error');
  
            expect(authAction).toEqual({ type: 'AUTHENTICATION_ERROR', error: 'error' });
        });
    });

    describe('setAuthWorking', () => {
        it('should return an object with type SET_AUTH_WORKING', () => {
            const authAction = setAuthWorking();
  
            expect(authAction).toEqual({ type: 'SET_AUTH_WORKING' });
        });
    });

    describe('unsetAuthWorking', () => {
        it('should return an object with type UNSET_AUTH_WORKING', () => {
            const authAction = unsetAuthWorking();
  
            expect(authAction).toEqual({ type: 'UNSET_AUTH_WORKING' });
        });
    });

    describe('signinSuccess', () => {
        it('should return an object with type SIGNIN_SUCCESS', () => {
            const userDetails = { firstname: 'Malik' };
            const authAction = signinSuccess(userDetails);
  
            expect(authAction).toEqual({ type: 'SIGNIN_SUCCESS', payload: { firstname: 'Malik' } });
        });
    });
  
    describe('signinFailure', () => {
        it('should return an object with type SIGNIN_ERROR', () => {
            const authAction = signinFailure('error');
  
            expect(authAction).toEqual({ type: 'SIGNIN_ERROR', payload: 'error' });
        });
    });
  
    describe('signupSuccess', () => {
        it('should return an object with type SIGNUP_SUCCESS', () => {
            const userDetails = { name: 'Malik' };
            const authAction = signupSuccess(userDetails);
  
            expect(authAction).toEqual({ type: 'SIGNUP_SUCCESS', payload: { name: 'Malik' } });
        });
    });
  
    describe('signupFailure', () => {
        it('should return an object with type SIGNUP_ERROR', () => {
            const authAction = signupFailure('error');
  
            expect(authAction).toEqual({ type: 'SIGNUP_ERROR', payload: 'error' });
        });
    });
  
    describe('clearAuthError', () => {
        it('should return an object with type CLEAR_AUTH_ERROR', () => {
            const authAction = clearAuthError();
  
            expect(authAction).toEqual({ type: 'CLEAR_AUTH_ERROR' });
        });
    });


    describe('Auth Actions', () => {
        afterEach(() => {
            store.clearActions();
            localStorage.clear();
            jest.clearAllMocks();
        });

        describe('Authentication', () => {
            beforeEach(() => {
                moxios.install(axios);
            });
    
            afterEach(() => {
                moxios.uninstall(axios);
            });

            it('should dispatch AUTHENTICATING and SIGNIN_SUCCESS on successful login', async (done) => {
                const expectedActions = ['AUTHENTICATING', 'SIGNIN_SUCCESS'];

                authAPI.mockResolvedValue({
                    data: {
                        status: 200,
                        data: { token, ...newUser }
                    }
                });
                const history = { push: jest.fn() };
      
                await store.dispatch(auth('login', { email: 'example@gmail.com', password: 'password' }, history)).then(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
                    expect(actionTypes).toEqual(expectedActions);
                    expect(localStorage.getItem('jwtToken')).toEqual(token);
                });

                done();
            });

            it('should dispatch AUTHENTICATING and SIGNIN_ERROR on unsuccessful login', async (done) => {
                const expectedActions = ['AUTHENTICATING', 'SIGNIN_ERROR'];
      
                authAPI.mockResolvedValue({
                    data: {
                        status: 401,
                        error: 'Invalid Credentials'
                    }
                });
      
                await store.dispatch(auth('login', { email: 'bademail@gmail.com', password: 'password' }, null)).catch(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
                    expect(actionTypes).toEqual(expectedActions);
                    expect(localStorage.getItem('jwtToken')).toEqual(null);
                });

                done();
            });

            it('should dispatch AUTHENTICATING and SIGNUP_SUCCESS on successful signup', (done) => {
                const expectedActions = ['AUTHENTICATING', 'SIGNUP_SUCCESS'];
      
                authAPI.mockResolvedValue({
                    data: {
                        status: 201,
                        data: {
                            token,
                            ...newUser
                        }
                    }
                });

                store.dispatch(auth('signup', values, null)).then(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
      
                    expect(actionTypes).toEqual(expectedActions);
                    expect(localStorage.getItem('jwtToken')).toEqual(token);
                });
                
                done();
            });

            it('should dispatch AUTHENTICATING and SIGNUP_ERROR on unsuccessful signup', () => {
                const expectedActions = ['AUTHENTICATING', 'SIGNUP_ERROR'];
      
                moxios.stubRequest(`${url}/auth/signup`, {
                    status: 422,
                    error: 'Email already taken',
                }, 5);
      
                store.dispatch(auth('signup', values)).catch(() => {
                    const dispatchedActions = store.getActions();
      
                    const actionTypes = dispatchedActions.map(action => action.type);
      
      
                    expect(actionTypes).toEqual(expectedActions);
                    expect(localStorage.getItem('jwtToken')).toEqual(undefined);
                });
            });

            it('should dispatch UNAUTHENTICATED', () => {
                store.dispatch(logout());
      
                const expectedActions = ['UNAUTHENTICATED'];
      
                const dispatchedActions = store.getActions();
      
                const actionTypes = dispatchedActions.map(action => action.type);
      
      
                expect(actionTypes).toEqual(expectedActions);
                expect(localStorage.getItem('jwtToken')).toEqual(null);
            });
        });
    });
});
