import React from 'react';
import NewPartyForm from '@components/shared/Form/Party/NewParty';

const props = {
    loading: false,
    createParty: jest.fn()
};

describe('New Party Form', () => {
    it('should render the inew party modal', () => {
        const shallowWrapper = shallow(<NewPartyForm {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('NewPartyForm')).toBeTruthy();
    });
});