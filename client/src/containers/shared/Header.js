import { connect } from 'react-redux';
import Header from '@components/shared/Header';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(Header);
