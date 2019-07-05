import { connect } from 'react-redux';
import Dashboard from '@components/pages/Dashboard';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(Dashboard);