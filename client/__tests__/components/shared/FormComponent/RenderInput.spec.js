import React from 'react';
import RenderInput from '@components/shared/FormComponent/RenderInput';

const props = {
    name: 'name',
    label: 'Name',
    placeholder: 'Name',
    type: 'text',
    error: "",
    value: '',
    className: '',
    id: 'name',
    handleChange: jest.fn(),
};

describe('Render Input', () => {
    it('should render the RenderInput component when used', () => {
        const shallowWrapper = shallow(<RenderInput {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('RenderInput')).toBeTruthy();
    });
});
