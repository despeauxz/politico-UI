import { connect } from 'react-redux';
import NewParty from '@components/shared/Form/Party/NewParty';
import { createParty } from '@actions/parties';

const mapStateToProps = state => ({
    loading: state.party.loading,
    errors: state.party.errors
});

export default connect(mapStateToProps, { createParty })(NewParty);