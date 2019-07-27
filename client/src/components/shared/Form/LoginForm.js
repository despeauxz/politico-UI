/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '@components/shared/Preloader/Preloader';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import { authPropTypes } from '@helpers/proptypes';
import classNames from 'classnames';
import { validation, syncValidate, validateRequiredFormFields } from '@helpers/validations';
import { auth } from '@actions/auth';
import './Form.scss';


class LoginFrom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {},
            formErrors: {},
            formValid: false
        };
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        const values = {
            email: this.state.email,
            password: this.state.password
        };

        const errors = syncValidate(values, validation.login);
        const isValid = validateRequiredFormFields(errors);
        this.setState({
            [name]: value,
            formErrors: errors,
            formValid: isValid
        });
    }

    handleFocus() {

    }

    handleSubmit(event) {
        event.preventDefault();
        
        const values = {
            email: this.state.email,
            password: this.state.password,
        };
                
        this.props.auth('login', values, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { isLoading } = this.props;
        const { errors, formErrors, formValid } = this.state;

        return (
            <Fragment>
                { typeof errors === 'string' ? 
                    <div className="bg-red-200 rounded p-4 text-left text-red-800">
                        <p>{errors}</p>
                    </div> : ''
                }
                <form className="mt-4" onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <div className="d-flex-col">
                        <RenderInput
                            name="email"
                            label="Email Address"
                            id="email"
                            type="email"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.email })}
                            placeholder="example@email.com"
                            value={this.state.email}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.email}
                            required
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.password })}
                            placeholder="************"
                            value={this.state.password}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.password}
                            required
                        />
                    </div>

                    <button className={classNames('w-1/4 p-4 border rounded-lg my-4 hover:text-white border-purple-600 hover:bg-purple-600', { 'bg-purple-600': isLoading })} disabled={isLoading || !formValid} type="submit">
                        {isLoading === true ?
                            <Preloader
                                type="button"
                                style="TailSpin"
                                height={15}
                                width={15}
                                color="white"
                            />
                            : 'Login'}
                    </button>
                </form>

                <div className="addon_info">
                    <p>
                        Don&apos;t have an account,  
                        <Link to="/auth/signup" className="text-purple-600"> Create Account</Link>
                    </p>
                    <p>
                        <Link to="/auth/forgot_password" className="text-purple-600">Forgot Password</Link>
                    </p>
                </div>
            </Fragment>
        );
    }
}

LoginFrom.propTypes = {
    ...authPropTypes
};

LoginFrom.defaultProps = {
    loading: false,
    working: false
};

const mapStateToProps = state => ({
    errors: state.auth.errors,
    isLoading: state.auth.loading,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { auth })(withRouter(LoginFrom));
