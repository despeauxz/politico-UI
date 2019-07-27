import { connect } from 'react-redux';
import Home from '@components/shared/Home';

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Home);
