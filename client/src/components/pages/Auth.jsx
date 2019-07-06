import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupForm from '@components/shared/Form/SignupForm';
import LoginFrom from '@components/shared/Form/LoginForm';
import Header from '@components/shared/Header';
import { renderAuthPropTypes } from '@helpers/proptypes';

class Auth extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired
    };

    static defaultProps = {
        type: ''
    };

    getFormTitle = () => {
        switch (this.props.type) {
        case 'signup':
            return 'Get Registered Today';
        default:
            return 'Welcome Back';
        }
    }

    getFormField = () => {
        switch (this.props.type) {
        case 'signup':
            return <SignupForm />;
        default:
            return <LoginFrom />;
        }
    }

    render() {
        const title = this.getFormTitle();
        const field = this.getFormField();
        const { from } = this.props.location.state ? this.props.location.state : { from: { pathname: '/' } };
        const newLocation = this.props.type === 'login' ? from : '/';

        if (this.props.isAuthenticated) {
            return <Redirect to={newLocation} />;
        }
        
        return (
            <Fragment>
                <Header />
                <div className="container mx-auto">

                    <div className="w-3/4 mx-auto mt-8 sm:w-11/12 md:w-3/5 lg:w-3/5 xl:w-1/2">
                        <div className="text-center">
                            <h2 className="text-md font-bold mb-10">{ title }</h2>
                            <hr />
                            
                            { field }
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

Auth.propTypes = {
    ...renderAuthPropTypes,
};

Auth.defaultProps = {
    type: null
};

export default Auth;
