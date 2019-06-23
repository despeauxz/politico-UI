import React from 'react';
import HomeHeader from '@components/shared/Header/HomeHeader';
import toJson from 'enzyme-to-json';


describe('<HomeHeader />', () => {
    it('render the home header component', () => {
        const shallowWrapper = shallow(<HomeHeader />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('HomeHeader')).toBeTruthy();
    });
});
