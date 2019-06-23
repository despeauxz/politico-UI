import React from 'react';
import toJson from 'enzyme-to-json';
import NotFound from '@components/pages/NotFound';


describe('<NotFoundPage/>', () => {
    it('renders 404(not found page) component without crashing', () => {
        const shallowWrapper = shallow(<NotFound />);
        expect(toJson(shallowWrapper)).toMatchSnapshot();
    });
});