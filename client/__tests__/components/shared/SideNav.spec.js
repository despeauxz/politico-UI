import React from 'react';
import SideNav from '@components/shared/SideNav';

const props = {
    user: {
        firstname: 'John',
        lastname: 'Doe'
    }
};

describe('<SideNav />', () => {
    it('render the side navigation component', () => {
        const shallowWrapper = shallow(<SideNav { ...props } />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('SideNav')).toBeTruthy();
    });
});
