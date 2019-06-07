import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://politicorish.herokuapp.com/api/v1',
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    config.headers.authorization = `Bearer ${token}`;
    return config;
});

instance.interceptors.response.use(
    response => response,
    (error) => {
        const { response: { status, data } } = error;

        if (status === 403 && data.error === 'Token is expired') {
            window.location.reload();
        }

        return Promise.reject(error);
    }
);

export default instance;