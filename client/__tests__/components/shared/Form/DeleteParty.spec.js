import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import DeleteParty from '@components/shared/Form/Party/DeleteParty';

const mockStore = configureMockStore();
const store = mockStore({});
const props = {
    party: {},
    deleteParty: jest.fn()
};

describe('Delete Party Form', () => {
    it('should render the delete party modal', () => {
        const shallowWrapper = shallow(<Provider store={store}>
            <DeleteParty {...props} />
        </Provider>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('DeleteParty')).toBeTruthy();
    });
});