import PropTypes from 'prop-types';

const renderAuthPropTypes = {
    type: PropTypes.string.isRequired
};

const authPropTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    working: PropTypes.bool.isRequired
};


export default {
    renderAuthPropTypes,
    authPropTypes,
};
