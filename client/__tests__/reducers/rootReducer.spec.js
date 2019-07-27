import rootReducer from '@reducers/rootReducer';
import { initialState } from '../setup/mockData';

describe('Root Reducer', () => {
    it('should return initial state', () => {
        const store = rootReducer(initialState, '');
        

        expect(store).toEqual(initialState);
    });

    it('should dispatch the UNAUTHENTICATED on reset', () => {
        const store = rootReducer({
            ...initialState,
            auth: {
                loading: true
            }
        }, { type: 'UNAUTHENTICATED' });

        expect(store.auth.loading).toBeFalsy();
    });
});
