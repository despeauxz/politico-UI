import { connect } from 'react-redux';
import SideNav from '@components/shared/SideNav';
import { logout } from '@actions/auth';

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(SideNav);
