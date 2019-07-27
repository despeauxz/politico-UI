import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginForm from '@components/shared/Form/LoginForm';

const mockStore = configureMockStore();
const store = mockStore({});


describe('LoginForm', () => {
    it('should render the Login component correctly', () => {
        const shallowWrapper = shallow(<Provider store={store}>
            <LoginForm isAuthenticated="true" />
        </Provider>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('LoginForm')).toBeTruthy();
    });
});