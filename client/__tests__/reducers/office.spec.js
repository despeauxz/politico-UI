import reducer from '@reducers/office';

const state = {
    errors: {},
    loading: false,
    offices: [{ id: 1, name: 'President' }]
};

describe('Offices Reducers', () => {
    it('should return initial State', () => {
        const newState = reducer(state, {});

        expect(newState).toEqual(state);
    });

    it('should handle LOADING action', () => {
        const newState = reducer(state, {
            type: 'LOADING'
        });

        expect(newState).toEqual({ ...state, loading: true });
    });

    it('should handle ADD_OFFICE_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'ADD_OFFICE_SUCCESS',
            payload: { id: 1, name: 'President' },
        });
  
        expect(newState).toEqual({
            ...state,
            loading: false,
            offices: [{ id: 1, name: 'President' }, { id: 1, name: 'President' }]
        });
    });

    it('should handle ADD_PARTY_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'ADD_OFFICE_FAILURE',
            payload: 'Error',
        });
  
        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });

    it('should handle GET_OFFICES_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'GET_OFFICES_SUCCESS',
            payload: [
                {
                    id: 1,
                    name: 'President'
                }
            ],
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            offices: [{
                id: 1,
                name: 'President'
            }]
        });
    });

    it('should handle GET_OFFICES_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'GET_OFFICES_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });

    it('should handle EDIT_OFFICE_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'EDIT_OFFICE_SUCCESS',
            payload: { id: 1, name: 'President' },
        });
        
        expect(newState).toEqual({
            ...state,
            loading: false,
            offices: [{ id: 1, name: 'President' }]
        });
    });

    it('should handle EDIT_OFFICE_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'EDIT_OFFICE_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: 'Error'
        });
    });

    it('should handle DELETE_OFFICE_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'DELETE_OFFICE_SUCCESS',
            payload: { id: 2, name: 'APC' },
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            offices: [{ id: 1, name: 'President' }]
        });
    });

    it('should handle DELETE_OFFICE_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'DELETE_PARTY_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: {}
        });
    });

    it('should handle ASPIRE_OFFICE_SUCCESS action', () => {
        const newState = reducer(state, {
            type: 'ASPIRE_OFFICE_SUCCESS',
            payload: { name: 'APC' },
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
        });
    });

    it('should handle ASPIRE_OFFICE_FAILURE action', () => {
        const newState = reducer(state, {
            type: 'ASPIRE_PARTY_FAILURE',
            payload: 'Error',
        });

        expect(newState).toEqual({
            ...state,
            loading: false,
            errors: {}
        });
    });
});