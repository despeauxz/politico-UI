import React from 'react';
import Plus from '@components/shared/Plus';
import toJson from 'enzyme-to-json';


describe('<Plus />', () => {
    it('render the Plus component', () => {
        const shallowWrapper = shallow(<Plus />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Plus')).toBeTruthy();
    });
});
