import { connect } from 'react-redux';
import Profile from '@components/pages/Profile';
import { toggleModal } from '@actions/ui';


const mapStateToProps = state => ({
    authenticating: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    toggle: state.ui.toggle,
    user: state.auth.user
});

export default connect(mapStateToProps, { toggleModal })(Profile);