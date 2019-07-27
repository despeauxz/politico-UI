import { connect } from 'react-redux';
import Admin from '@components/shared/Admin';
import { appDataCount } from '@actions/actions';

const mapStateToProps = state => ({
    data: state.actions.data,
    errors: state.actions.errors,
    isLoading: state.actions.isFetching
});

export default connect(mapStateToProps, { appDataCount })(Admin);
