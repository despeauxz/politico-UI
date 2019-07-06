import { connect } from 'react-redux';
import AuthComponent from '../../components/pages/Auth';

const mapStateToProps = state => ({
    isLoading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.auth.errors
});

export default connect(mapStateToProps)(AuthComponent);