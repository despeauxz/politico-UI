/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../actions/auth';
import { withToastManager } from 'react-toast-notifications';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    return valid;
};

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        };

        const { toastManager } = this.props;
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

        let formErrors = this.state.formErrors;

        switch (name) {
        case "firstname":
            formErrors.firstname =
                value.length < 3 ? "minimum of 3 characters required" : "";
            break;
        case "lastname":
            formErrors.lastname =
                value.length < 3 ? "minimum of 3 characters required" : "";
            break;
        case "email":
            formErrors.email =
                emailRegex.test(value)
                    ? ""
                    : "Invalid email address";
            break;
        case "password":
            formErrors.password =
                value.length < 6 ? "minimum 6 characters required" : "";
            break;
        case "confirmPassword":
            formErrors.confirmPassword = value !== this.state.confirmPassword ? "Passwords don't match" : "";
            break;
        default:
            break;
        }

        this.setState({ formErrors, [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const values = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirmPassword
        };

        this.props.signup('signup', values);
    }
    render() {
        const { formErrors } = this.state;
        const errorMessage = {
            color: 'crimson',
            fontSize: '12px',
            textAlign: 'left',
            display: 'block'
        };

        return (
            <Fragment>
                <form role="signup" className="auth_form" method="POST" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
                    <div className="d-flex-lg">
                        <div className="form-group">
                            <label htmlFor="firstname" className="control-label">First name</label>
                            <input 
                                type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="First name"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.firstname}
                            />
                            {formErrors.firstname.length > 0 && 
                                <span style={errorMessage}>{formErrors.firstname}</span>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="control-label">Last name</label>
                            <input 
                                type="text"
                                name="lastname"
                                className="form-control"
                                placeholder="Last name"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.lastname}
                            />
                            {formErrors.lastname.length > 0 && 
                                <span style={errorMessage}>{formErrors.lastname}</span>
                            }
                        </div>
                    </div>
                    <div className="d-flex-col">
                        <div className="form-group">
                            <label htmlFor="email" className="control-label">Email Address</label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="exampe@email.com"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.email}
                            />
                            {formErrors.email.length > 0 && 
                                <span style={errorMessage}>{formErrors.email}</span>
                            }
                        </div>
                    </div>
                    <div className="d-flex-col">
                        <div className="form-group">
                            <label htmlFor="password" className="control-label">Password</label>
                            <input 
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="*********"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.password}
                            />
                            {formErrors.password.length > 0 && 
                                <span style={errorMessage}>{formErrors.password}</span>
                            }
                        </div>
                    </div>
                    <div className="d-flex-col">
                        <div className="form-group">
                            <label htmlFor="confirm-password" className="control-label">Confirm Password</label>
                            <input 
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="********"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.confirmPassword}
                            />
                            {formErrors.confirmPassword.length > 0 && 
                                <span style={errorMessage}>{formErrors.confirmPassword}</span>
                            }
                        </div>
                    </div>
    
                    <button className="btn btn-block btn-primary" disabled={this.props.isLoading} type="submit">Sign Up</button>
                </form>
    
                <div className="addon_info">
                    <p>By clicking the "Sign Up" button, you have agreed to our 
                        <Link to="#" className="link"> Privacy Policy</Link>, 
                        <Link to="#" className="link"> Terms and Conditions</Link> and you are a Nigerian
                    </p>
                    <p>Already have an account, Login <Link to="/auth/login" className="link">here</Link></p>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    errors: state.auth.error,
    isLoading: state.auth.loading,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default withToastManager(connect(mapStateToProps, { signup: auth })(SignupForm));