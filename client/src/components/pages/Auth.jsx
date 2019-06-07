import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupForm from '../shared/Form/SignupForm';
import Header from '../shared/Header/HomeHeader';

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
            return 'Login';
        }
    }

    render() {
        const title = this.getFormTitle();
        const field = this.getFormField();
        
        return (
            <Fragment>
                <div className="container">
                    <Header />

                    <div className="main-wrapper auth-wrapper">
                        <div className="auth text-center">
                            <h2>{ title }</h2>
                            <hr />
                            
                            { field }
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Auth;
