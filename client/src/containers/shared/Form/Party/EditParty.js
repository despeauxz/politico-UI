import { connect } from 'react-redux';
import EditParty from '@components/shared/Form/Party/EditParty';
import { editParty } from '@actions/parties';

const mapStateToProps = state => ({
    loading: state.party.loading,
    errors: state.party.errors
});

export default connect(mapStateToProps, { editParty })(EditParty);