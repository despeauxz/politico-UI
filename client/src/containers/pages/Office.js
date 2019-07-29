import { connect } from 'react-redux';
import Office from '@components/pages/Office';
import { toggleModal } from '@actions/ui';
import { getOffices } from '@actions/office';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    toggle: state.ui.toggle,
    offices: state.office.offices,
    loading: state.office.loading
});

export default connect(mapStateToProps, { toggleModal, getOffices })(Office);