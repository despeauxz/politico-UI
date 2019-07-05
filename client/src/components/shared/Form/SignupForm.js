/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '@components/shared/Preloader/Preloader';
import { authPropTypes } from '@helpers/proptypes';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import classNames from 'classnames';
import { validation, syncValidate, validateRequiredFormFields } from '@helpers/validations';
import { auth } from '@actions/auth';
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
            formErrors: {},
            formValid: false,
        };

        // this.isValid = this.isValid.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    handleChange(e) {
        e.preventDefault();
        const { firstname, lastname, email, password, passwordConfirm } = this.state;
        const { name, value } = e.target;

        const values = {
            firstname,
            lastname,
            email,
            password,
            passwordConfirm
        };

        const errors = syncValidate(values, validation.signup);
        const isValid = validateRequiredFormFields(errors);
        this.setState({
            [name]: value,
            formErrors: errors,
            formValid: isValid
        });
    }

    handleFocus() {
        this.setState({
            errors: Object.assign({}, this.state.errors, { [event.target.name]: '' })
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

        this.props.auth('signup', userDetails, this.props.history);


    }

    render() {
        const { isLoading } = this.props;
        const { formErrors, errors, formValid } = this.state;
        return (
            <Fragment>
                { typeof errors === 'string' ? 
                    <div className="alert-form">
                        <p>{errors}</p>
                    </div> : ''
                }
                <form role="signup" className="auth_form" method="POST" onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <div className="d-flex-lg">
                        <RenderInput
                            name="firstname"
                            label="First name"
                            id="firstname"
                            type="text"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.firstname })}
                            placeholder="First name"
                            value={this.state.firstname}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.firstname}
                        />
                        <RenderInput
                            name="lastname"
                            label="Last name"
                            id="lastname"
                            type="text"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.lastname })}
                            placeholder="First name"
                            value={this.state.lastname}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.lastname}
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="email"
                            label="Email Address"
                            id="email"
                            type="email"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.email })}
                            placeholder="Email Address"
                            value={this.state.email}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.email}
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.password })}
                            placeholder="***********"
                            value={this.state.password}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.password}
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="passwordConfirm"
                            label="Confirm Password"
                            id="passwordConfirm"
                            type="password"
                            className={classNames('w-full py-4 border-purple-600 border-b-2', { 'error': formErrors.passwordConfirm })}
                            placeholder="***********"
                            value={this.state.passwordConfirm}
                            handleChange={this.handleChange.bind(this)}
                            onFocus={this.handleFocus.bind(this)}
                            error={formErrors.passwordConfirm}
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
                            : 'Sign Up'}
                    </button>
                </form>
    
                <div className="addon_info">
                    <p>By clicking the &ldquo;Sign Up&rdquo; button, you have agreed to our 
                        <Link to="#" className="text-purple-600"> Privacy Policy</Link>, 
                        <Link to="#" className="text-purple-600"> Terms and Conditions</Link> and you are a Nigerian
                    </p>
                    <p>Already have an account, <Link to="/auth/login" className="text-purple-600"> Login</Link></p>
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