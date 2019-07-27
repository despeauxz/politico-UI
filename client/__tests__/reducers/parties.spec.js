import reducer from '@reducers/parties';

const state = {
    errors: {},
    loading: false,
    parties: []
};

describe('Party Reducers', () => {
    it('should return initial State', () => {
        const newState = reducer(undefined, {});

        expect(newState).toEqual(state);
    });

    it('should handle LOADING action', () => {
        const newState = reducer(state, {
            type: 'LOADING'
        });

        expect(newState).toEqual({ ...state, loading: true });
    });

    it('should handle ADD_PARTY_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'ADD_PARTY_SUCCESS',
            payload: { name: 'APC' },
        });
  
        expect(newState).toEqual({
            ...state,
            loading: false,
            parties: [{
                name: 'APC'
            }]
        });
    });

    it('should handle ADD_PARTY_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'ADD_PARTY_FAILURE',
            payload: 'Error',
        });
  
        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });

    it('should handle GET_PARTIES_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'GET_PARTIES_SUCCESS',
            payload: [
                {
                    id: 1,
                    name: 'APC'
                }
            ],
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            parties: [{
                id: 1,
                name: 'APC'
            }]
        });
    });

    it('should handle GET_PARTIES_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'GET_PARTIES_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });

    it('should handle EDIT_PARTY_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'EDIT_PARTY_SUCCESS',
            payload: { name: 'APC' },
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            parties: []
        });
    });

    it('should handle EDIT_PARTY_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'EDIT_PARTY_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });

    it('should handle DELETE_PARTY_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'DELETE_PARTY_SUCCESS',
            payload: { name: 'APC' },
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            parties: []
        });
    });

    it('should handle DELETE_PARTY_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'DELETE_PARTY_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });
});