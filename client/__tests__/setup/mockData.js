import jwt from 'jsonwebtoken';

const secret = process.env.SECRET || 'ilovejavascript';

export const initialState = {
    auth: {
        isAuthenticated: true,
        error: null,
        user: { firstname: 'John', lastname: 'Doe' },
        loading: false,
        working: false,
    },
    router: {
        location: {
            pathname: '/'
        }
    },
    toastr: {
        toastrs: [],
        confirm: null
    },
};

export const userToken = `Bearer ${jwt.sign({
    id: 1,
    email: 'example@gmail.com',
    isAdmin: false,
}, secret, { expiresIn: '1 hour' })}`;


export const adminToken = `Bearer ${jwt.sign({
    id: 2,
    email: 'admin@gmail.com',
    isAdmin: false,
}, secret, { expiresIn: '1 hour' })}`;

export const expiredToken = `Bearer ${jwt.sign({
    id: 3,
    email: 'expired@gmail.com',
    isAdmin: false,
}, secret, { expiresIn: -1 })}`;
