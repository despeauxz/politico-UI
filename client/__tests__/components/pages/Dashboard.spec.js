import React from 'react';
import toJson from 'enzyme-to-json';
import Dashboard from '@components/pages/Dashboard';


describe('<Dashboard/>', () => {
    it('renders Home page component without crashing', () => {
        const shallowWrapper = shallow(<Dashboard />);
        expect(toJson(shallowWrapper)).toMatchSnapshot();
    });
});