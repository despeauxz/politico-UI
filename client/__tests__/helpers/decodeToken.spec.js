import jwt from 'jsonwebtoken';
import decodeToken from '@helpers/decodeToken';
import { userToken } from '../setup/mockData';

const { decode } = jwt.decode;

jwt.decode = jest.fn(() => ({
    officeName: 'President'
}));

const returnValue = {
    decoded: {
        officeName: 'President'
    },
    token: userToken
};

describe('Utils: decodeToken', () => {
    afterAll(() => {
        jwt.decode = decode;
    });

    it('should decode token', () => {
        localStorage.setItem('jwtToken', userToken);
        const check = decodeToken();

        expect(check).toEqual(returnValue);
    });
});


