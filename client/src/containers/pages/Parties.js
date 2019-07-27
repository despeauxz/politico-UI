import { connect } from 'react-redux';
import Parties from '@components/pages/Parties';
import { toggleModal } from '@actions/ui';
import { getParties } from '@actions/parties';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    toggle: state.ui.toggle,
    parties: state.party.parties,
    loading: state.party.loading
});

export default connect(mapStateToProps, { toggleModal, getParties })(Parties);