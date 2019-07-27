import reducer from '@reducers/actions';

const state = {
    data: {},
    errors: {},
    isFetching: false
};

describe('Actions Reducers', () => {
    it('should return initial State', () => {
        const newState = reducer(undefined, {});

        expect(newState).toEqual(state);
    });

    it('should handle IS_FETCHING action', () => {
        const newState = reducer(state, {
            type: 'IS_FETCHING'
        });

        expect(newState).toEqual({ ...state, isFetching: true });
    });

    it('should handle FETCHING_APP_COUNT action', () => {
        const newState = reducer(state, {
            type: 'FETCHING_APP_COUNT',
            payload: { users: 0 },
        });
  
        expect(newState).toEqual({
            ...state,
            isFetching: false,
            data: {
                users: 0
            }
        });
    });

    it('should handle IS_FETCHING_ERROR action', () => {
        const newState = reducer(state, {
            type: 'IS_FETCHING_ERROR',
            payload: 'Error',
        });
  
        expect(newState).toEqual({
            ...state,
            isFetching: false,
            errors: 'Error'
        });
    });
});