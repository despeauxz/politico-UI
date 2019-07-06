import PropTypes from 'prop-types';

const renderAuthPropTypes = {
    type: PropTypes.string.isRequired
};

const authPropTypes = {
    auth: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    working: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
};

const userPropType = PropTypes.shape({
    id: PropTypes.number,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    othername: PropTypes.string,
    email: PropTypes.string,
    phoneNo: PropTypes.number,
    avatar: PropTypes.string,
    isAdmin: PropTypes.bool,
    partyId: PropTypes.number
}).isRequired;


export {
    renderAuthPropTypes,
    authPropTypes,
    userPropType
};
