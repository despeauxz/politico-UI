import React from 'react';
import BreadCrumbs from '@components/shared/BreadCrumbs';


describe('<BreadCrumbs />', () => {
    it('render the breadcrumbs component', () => {
        const shallowWrapper = shallow(<BreadCrumbs>
            <h3>Hello World</h3>
        </BreadCrumbs>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('BreadCrumbs')).toBeTruthy();
    });
});
