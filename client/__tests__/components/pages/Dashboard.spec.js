import React from 'react';
import toJson from 'enzyme-to-json';
import Dashboard from '@components/pages/Dashboard';

const Adminprops = {
    isAuthenticated: true,
    user: {
        isAdmin: true
    }
};

const Userprops = {
    isAuthenticated: true,
    user: {
        isAdmin: null
    }
};

describe('<Dashboard/>', () => {
    it('renders Admin Dashboard page component without crashing', () => {
        const shallowWrapper = shallow(<Dashboard { ...Adminprops } />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Admin')).toBeTruthy();

    });

    it('renders Home page component without crashing', () => {
        const shallowWrapper = shallow(<Dashboard { ...Userprops } />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Home')).toBeTruthy();
    });
});