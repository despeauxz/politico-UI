import React from 'react';
import Auth from '@components/pages/Auth';


describe('Auth Pages', () => {
    it('should render the sign up page based on props ~ type', () => {
        const shallowWrapper = shallow(<Auth type="signup" />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('SignupForm')).toBeTruthy();
    });

    it('should render the login page based on props ~ type', () => {
        const shallowWrapper = shallow(<Auth type="login" />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('LoginForm')).toBeTruthy();
    });
});
