import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Preloader from '../shared/Preloader/Preloader';
import { authPropTypes } from '@helpers/proptypes';

/**
 * @function Authenticator
 * @param {object} props
 * @return {JSX} - MyComponent|Preloader|Redirect
 */
const Authenticator = (props) => {
    const {
        MyComponent,
        authenticating,
        isAuthenticated,
        location
    } = props;

    return (
        <Fragment>
            {authenticating &&
                <div className="flex w-full h-screen items-center justify-center bg-gray-300">
                    <Preloader
                        type="page"
                        style="Plane"
                        height={50}
                        width={50}
                        color="indigo"
                    />
                </div>
            }
            {!authenticating && isAuthenticated && <MyComponent {...props} />}
            {!authenticating && !isAuthenticated && <Redirect
                to={{
                    pathname: '/auth/login',
                    state: { from: location }
                }}
            />}
        </Fragment>
    );
};

Authenticator.propTypes = {
    ...authPropTypes,
    authenticating: PropTypes.bool,
    MyComponent: PropTypes.oneOfType([
        PropTypes.func, PropTypes.object
    ])
};

export default Authenticator;