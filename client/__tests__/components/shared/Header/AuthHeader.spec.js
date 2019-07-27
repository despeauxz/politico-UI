import React from 'react';
import AuthHeader from '@components/shared/Header/AuthHeader';
import toJson from 'enzyme-to-json';


describe('<AuthHeader />', () => {
    it('render the Auth header component', () => {
        const shallowWrapper = shallow(<AuthHeader />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('AuthHeader')).toBeTruthy();
    });
});
