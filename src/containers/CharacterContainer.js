import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
	characters: state.charactersReducer.characters,
	loading: state.charactersReducer.loading,
	error: state.charactersReducer.error
});


export default withRouter(connect(mapStateToProps)(Characters));
