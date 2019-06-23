import React from 'react';
import WelcomeComponent from '@components/pages/Welcome';

const props = {
    user: {},
    isAuthenticated: false,
    authenticating: false
};

describe('Welcome', () => {
    it('should render the Welcome component correctly when unauthenticated', () => {
        const shallowWrapper = shallow(<WelcomeComponent {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Welcome')).toBeTruthy();
    });
});