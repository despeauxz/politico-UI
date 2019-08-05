import { connect } from 'react-redux';
import PetitionOffice from '@components/shared/Form/Office/PetitionOffice';
import { petitionOffice } from '@actions/office';

const mapStateToProps = state => ({
    loading: state.office.loading,
    errors: state.office.errors
});

export default connect(mapStateToProps, { petitionOffice })(PetitionOffice);
