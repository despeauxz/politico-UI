import React from 'react';
import Auth from '@components/pages/Auth';

const props = {
    isAuthenticated: false,
    user: {},
    location: {
        state: ''
    }
};


const userProps = {
    user: {
        isAdmin: null
    }
};

const adminProps = {
    user: {
        isAdmin: true
    }
};

describe('Auth Pages', () => {
    it('should render the sign up page based on props ~ type', () => {
        const shallowWrapper = shallow(<Auth type="signup" {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('SignupForm')).toBeTruthy();
    });

    it('should render the home page if user is logged in and is a nominal user', () => {
        const shallowWrapper = shallow(<Auth type="signup" {...props} isAuthenticated="true" {...userProps} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Home')).toBeTruthy();
    });

    it('should render the dashboard if user is logged in and is an admin user', () => {
        const shallowWrapper = shallow(<Auth type="signup" {...props} isAuthenticated="true" {...adminProps} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Dashboard')).toBeTruthy();
    });

    it('should render the login page based on props ~ type', () => {
        const shallowWrapper = shallow(<Auth type="login" {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('LoginForm')).toBeTruthy();
    });
});
