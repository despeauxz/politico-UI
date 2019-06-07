import connect from 'react-redux';
import auth from '../../../actions/auth';
import SignupForm from '../../../components/shared/Form/SignupForm';

const mapStateToProps = state => ({
    errors: state.error,
    isLoading: state.loading,
    user: state.user,
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { auth })(SignupForm);