import React from 'react';
import Parties from '@components/pages/Parties';

const props = {
    toggle: false,
    type: '',
    user: {
        isAdmin: true
    },
    parties: [],
    toggleModal: jest.fn(),
    getParties: jest.fn()
};

describe('Party Pages', () => {
    it('should render the index page based on props ~ type', () => {
        const shallowWrapper = shallow(<Parties {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Parties')).toBeTruthy();
    });

    it('should render the index page and New party modal based on props ~ type', () => {
        const shallowWrapper = shallow(<Parties {...props} type="create" toggle={true} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('NewPartyForm')).toBeTruthy();
    });

    it('should render the index page and Edit party modal based on props ~ type', () => {
        const shallowWrapper = shallow(<Parties {...props} type="edit" toggle={true} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('EditPartyForm')).toBeTruthy();
    });

    it('should render the index page and Delete party modal based on props ~ type', () => {
        const shallowWrapper = shallow(<Parties {...props} type="delete" toggle={true} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('DeletePartyForm')).toBeTruthy();
    });
});