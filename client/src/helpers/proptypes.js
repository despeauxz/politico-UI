import PropTypes from 'prop-types';

const renderAuthPropTypes = {
    type: PropTypes.string.isRequired
};

const authPropTypes = {
    auth: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    working: PropTypes.bool.isRequired
};


export {
    renderAuthPropTypes,
    authPropTypes,
};
