/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '@components/shared/Preloader/Preloader';
import { authPropTypes } from '@helpers/proptypes';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import classNames from 'classnames';
import { auth } from '@actions/auth';
import validation from '@helpers/validations/validation';
import formValidator from "@helpers/validations/validateRequiredFormFields";
import './Form.scss';

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {},
            formErrors: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }
        };
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        // switch(name) {
        // case "firstname":
        //     formErrors.firstname = value.length < 3
        //         ? "minimum 3 characters required" : "";
        //     break;
        // case "lastname":
        //     formErrors.lastname = value.length < 3
        //         ? "minimum 3 characters required": "";
        //     break;
        // case "email":
        //     formErrors.email = emailRegex.test(value)
        //         ? "": "Invalid email address";
        //     break;
        // case "password":
        //     formErrors.password = value.length < 6
        //         ? "Password must be 6 characters long": "";
        //     break;
        // // case "passwordConfirm":
        // //     formErrors.passwordConfirm = value !== this.state.passwordConfirm
        // //         ? "Passwords don't match": "";
        // //     break;
        // default:
        //     break;
        // }

        this.setState({
            formErrors, [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { firstname, lastname, email, password, passwordConfirm } = this.state;

        const userDetails = {
            firstname,
            lastname,
            email,
            password,
            passwordConfirm
        };

        const validForm = formValid(this.state.formErrors);

        if (validForm) {
            this.props.auth('signup', userDetails, this.props.history);
        }
    }

    componentDidMount() {
        if (this.props.isAuthenticated) {
            if (this.props.user.isAdmin) {
                this.props.history.push('/dashboard');
            } else {
                this.props.history.push('/home');
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const { isLoading } = this.props;
        const { formErrors, error } = this.state;
        return (
            <Fragment>
                { typeof errors === 'string' ? 
                    <div className="alert-form">
                        <p>{error}</p>
                    </div> : ''
                }
                <form role="signup" className="auth_form" method="POST" onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <div className="d-flex-lg">
                        <RenderInput
                            name="firstname"
                            label="First name"
                            id="firstname"
                            type="text"
                            className={classNames('form-control', { 'error': formErrors.firstname })}
                            placeholder="First name"
                            value={this.state.firstname}
                            handleChange={this.handleChange.bind(this)}
                            error={formErrors.firstname}
                        />
                        <RenderInput
                            name="lastname"
                            label="Last name"
                            id="lastname"
                            type="text"
                            className={classNames('form-control', { 'error': formErrors.lastname })}
                            placeholder="First name"
                            value={this.state.lastname}
                            handleChange={this.handleChange.bind(this)}
                            error={formErrors.lastname}
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="email"
                            label="Email Address"
                            id="email"
                            type="email"
                            className={classNames('form-control', { 'error': formErrors.email })}
                            placeholder="Email Address"
                            value={this.state.email}
                            handleChange={this.handleChange.bind(this)}
                            error={formErrors.email}
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            className={classNames('form-control', { 'error': formErrors.password })}
                            placeholder="***********"
                            value={this.state.password}
                            handleChange={this.handleChange.bind(this)}
                            error={formErrors.password}
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="passwordConfirm"
                            label="Confirm Password"
                            id="passwordConfirm"
                            type="password"
                            className={classNames('form-control', { 'error': formErrors.passwordConfirm })}
                            placeholder="***********"
                            value={this.state.passwordConfirm}
                            handleChange={this.handleChange.bind(this)}
                            error={formErrors.passwordConfirm}
                        />
                    </div>
    
                    <button className="btn btn-block btn-primary" disabled={isLoading} type="submit">
                        {isLoading === true ?
                            <Preloader
                                type="button"
                                style="TailSpin"
                                height="15"
                                width="15"
                                color="white"
                            />
                            : 'Sign Up'}
                    </button>
                </form>
    
                <div className="addon_info">
                    <p>By clicking the &ldquo;Sign Up&rdquo; button, you have agreed to our 
                        <Link to="#" className="link"> Privacy Policy</Link>, 
                        <Link to="#" className="link"> Terms and Conditions</Link> and you are a Nigerian
                    </p>
                    <p>Already have an account, <Link to="/auth/login" className="link"> Login</Link></p>
                </div>
            </Fragment>
        );
    }
}

SignupForm.propTypes = {
    ...authPropTypes
};

SignupForm.defaultProps = {
    loading: false,
    working: false
};

const mapStateToProps = state => ({
    errors: state.auth.errors,
    isLoading: state.auth.loading,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { auth })(withRouter(SignupForm));