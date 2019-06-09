/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '../../shared/Preloader/Preloader';
import { authPropTypes } from '../../../helpers/proptypes';
import classNames from 'classnames';
import { auth } from '../../../actions/auth';
import './Signup.scss';


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
        };
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const values = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        };

        this.props.auth('signup', values, this.props.history);
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
        const { errors } = this.state;
        return (
            <Fragment>
                <form role="signup" className="auth_form" method="POST" onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <div className="d-flex-lg">
                        <div className="form-group">
                            <label htmlFor="firstname" className="control-label">First name</label>
                            <input 
                                type="text"
                                name="firstname"
                                className={classNames('form-control', { 'error': errors.firstname })}
                                placeholder="First name"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.firstname}
                            />
                            {errors.firstname &&
                                <div className="error-text">
                                    {errors.firstname.msg}
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="control-label">Last name</label>
                            <input 
                                type="text"
                                name="lastname"
                                className={classNames('form-control', { 'error': errors.lastname })}
                                placeholder="Last name"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.lastname}
                            />
                            {errors.lastname &&
                                <div className="error-text">
                                    {errors.lastname.msg}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="d-flex-col">
                        <div className="form-group">
                            <label htmlFor="email" className="control-label">Email Address</label>
                            <input 
                                type="email"
                                name="email"
                                className={classNames('form-control', { 'error': errors.email })}
                                placeholder="exampe@email.com"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.email}
                            />
                            {errors.email &&
                                <div className="error-text">
                                    {errors.email.msg}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="d-flex-col">
                        <div className="form-group">
                            <label htmlFor="password" className="control-label">Password</label>
                            <input 
                                type="password"
                                name="password"
                                className={classNames('form-control', { 'error': errors.password })}
                                placeholder="*********"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.password}
                            />
                            {errors.password &&
                                <div className="error-text">
                                    {errors.password.msg}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="d-flex-col">
                        <div className="form-group">
                            <label htmlFor="confirm-password" className="control-label">Confirm Password</label>
                            <input 
                                type="password"
                                name="passwordConfirm"
                                className={classNames('form-control', { 'error': errors.passwordConfirm })}
                                placeholder="********"
                                onChange={this.handleChange.bind(this)}
                                value={this.state.passwordConfirm}
                            />
                            {errors.passwordConfirm &&
                                <div className="error-text">
                                    {errors.passwordConfirm.msg}
                                </div>
                            }
                        </div>
                    </div>
    
                    <button className="btn btn-block btn-primary" disabled={this.props.isLoading} type="submit">
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