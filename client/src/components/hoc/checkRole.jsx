import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


const checkRole = (props) => {
    const {
        MyComponent, user, authenticating
    } = props;
    
    return (
        <Fragment>
            {!authenticating && user.isAdmin !== true && <Redirect to="/home" />}
            {!authenticating && user.isAdmin === true && <MyComponent {...props} />}
        </Fragment>
    );
};

checkRole.propTypes = {
    user: PropTypes.object.isRequired,
    authenticating: PropTypes.bool.isRequired,
    MyComponent: PropTypes.func.isRequired
};

export default checkRole;
