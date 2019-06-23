/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Preloader from '@components/shared/Preloader/Preloader';
import RenderInput from '@components/shared/FormComponent/RenderInput';
import { authPropTypes } from '@helpers/proptypes';
import classNames from 'classnames';
import { auth } from '@actions/auth';
import './Form.scss';


class LoginFrom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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
            email: this.state.email,
            password: this.state.password,
        };

        this.props.auth('login', values, this.props.history);
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
                { typeof errors === 'string' ? 
                    <div className="alert-form">
                        <p>{errors}</p>
                    </div> : ''
                }
                <form role="signup" className="auth_form" method="POST" onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <div className="d-flex-col">
                        <RenderInput
                            name="email"
                            label="Email Adress"
                            id="email"
                            type="email"
                            className={classNames('form-control', { 'error': errors.email })}
                            placeholder="example@email.com"
                            value={this.state.email}
                            handleChange={this.handleChange.bind(this)}
                            error={errors.email}
                            required
                        />
                    </div>
                    <div className="d-flex-col">
                        <RenderInput
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            className={classNames('form-control', { 'error': errors.password })}
                            placeholder="************"
                            value={this.state.password}
                            handleChange={this.handleChange.bind(this)}
                            error={errors.password}
                            required
                        />
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
                            : 'Login'}
                    </button>
                </form>

                <div className="addon_info">
                    <p>
                        Don&apos;t have an account,  
                        <Link to="/auth/signup" className="link"> Create Account</Link>
                    </p>
                    <p>
                        <Link to="/auth/forgot_password" className="link">Forgot Password</Link>
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
