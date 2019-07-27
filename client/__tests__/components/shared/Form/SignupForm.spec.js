import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SignupForm from '@components/shared/Form/SignupForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('SignupForm', () => {
    it('should render the Sign up component correctly', () => {
        const shallowWrapper = shallow(<Provider store={store}>
            <SignupForm />
        </Provider>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
    });
});