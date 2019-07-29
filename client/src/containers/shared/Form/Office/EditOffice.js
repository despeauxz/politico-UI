import { connect } from 'react-redux';
import EditOffice from '@components/shared/Form/Office/EditOffice';
import { editOffice } from '@actions/office';

const mapStateToProps = state => ({
    loading: state.office.loading,
    errors: state.office.errors
});

export default connect(mapStateToProps, { editOffice })(EditOffice);