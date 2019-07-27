import React from 'react';
import Footer from '@components/shared/Footer';
import toJson from 'enzyme-to-json';


describe('<Footer />', () => {
    it('render the Footer component', () => {
        const shallowWrapper = shallow(<Footer />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Footer')).toBeTruthy();
    });
});
