import reducer from '@reducers/auth';

const state = {
    isAuthenticated: false,
    errors: {},
    user: {},
    loading: false,
    working: false,
};

describe('Auth Reducers', () => {
    it('should return initial State', () => {
        const newState = reducer(undefined, {});

        expect(newState).toEqual(state);
    });

    it('should handle AUTHENTICATING action', () => {
        const newState = reducer(state, {
            type: 'AUTHENTICATING'
        });

        expect(newState).toEqual({ ...state, loading: true });
    });

    it('should handle SET_AUTH_WORKING action', () => {
        const newState = reducer(state, {
            type: 'SET_AUTH_WORKING'
        });

        expect(newState).toEqual({ ...state, working: true });
    });

    it('should handle UNSET_AUTH_WORKING action', () => {
        const newState = reducer({ ...state, working: true }, {
            type: 'UNSET_AUTH_WORKING'
        });

        expect(newState).toEqual({ ...state, working: false });
    });

    it('should handle SIGNIN_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'SIGNIN_SUCCESS',
            payload: { name: 'Berry' },
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: true,
            user: { name: 'Berry' },
            errors: {},
            loading: false
        });
    });
  
    it('should handle SIGNIN_ERROR action', () => {
        const newState = reducer(state, {
            type: 'SIGNIN_ERROR',
            payload: 'Error',
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: false,
            user: {},
            errors: 'Error',
            loading: false
        });
    });
  
    it('should handle CLEAR_AUTH_ERROR action', () => {
        const newState = reducer(state, {
            type: 'CLEAR_AUTH_ERROR'
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: false,
            user: {},
            errors: {},
            loading: false
        });
    });
  
    it('should handle AUTHENTICATED action', () => {
        const newState = reducer(state, {
            type: 'AUTHENTICATED',
            payload: { name: 'Berry' },
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: true,
            user: { name: 'Berry' },
            errors: {},
            loading: false
        });
    });
  
    it('should handle UNAUTHENTICATED action', () => {
        const newState = reducer(state, {
            type: 'UNAUTHENTICATED'
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: false,
            user: {},
            errors: {},
            loading: false
        });
    });
  
    it('should handle SIGNUP_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'SIGNUP_SUCCESS',
            payload: { name: 'Berry' },
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: true,
            user: { name: 'Berry' },
            errors: {},
            loading: false
        });
    });
  
    it('should handle SIGNUP_ERROR action', () => {
        const newState = reducer(state, {
            type: 'SIGNUP_ERROR',
            payload: 'Error',
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: false,
            user: {},
            errors: 'Error',
            loading: false
        });
    });
  
    it('should handle AUTHENTICATION_ERROR action', () => {
        const newState = reducer(state, {
            type: 'AUTHENTICATION_ERROR',
            payload: 'Error',
        });
  
        expect(newState).toEqual({
            ...state,
            isAuthenticated: false,
            user: {},
            errors: "Error",
            loading: false
        });
    });
  
});