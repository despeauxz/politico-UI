import { connect } from 'react-redux';
import NewOffice from '@components/shared/Form/Office/NewOffice';
import { createOffice } from '@actions/office';

const mapStateToProps = state => ({
    loading: state.office.loading,
    errors: state.office.errors
});

export default connect(mapStateToProps, { createOffice })(NewOffice);