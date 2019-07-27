import authAPI from "@utils/api/authAPI";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockReq = new MockAdapter(axios);

describe('authAPI', () => {
    it.only('should return an axios return function', () => {
        const result = mockReq.onPost(authAPI('login', {})).reply(200, { });

    });
});
