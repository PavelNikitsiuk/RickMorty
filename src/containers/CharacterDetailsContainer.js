import React, {Component} from 'react';
import { connect } from 'react-redux';
import CharacterDetails from '../components/CharacterDetails';
import { withRouter } from 'react-router-dom'
import { storeCharacterData, fetchEpisodes } from "../constants/CharacterDetailsActions";

export class CharacterDetailsContainer extends Component {
	componentDidMount() {
		let { state } = this.props.history.location;

		// this.props.dispatch(storeCharacterData(state));
		this.props.dispatch(fetchEpisodes(this.props.characterData.episode));
	}

	render() {
		const { characterData, episodes} = this.props;
		return (
			<div>
				<CharacterDetails characterData={characterData} episodes={episodes} />
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) => {
	let id = +ownProps.match.params.id;
	return {
		episodes: state.characterDetailsReducer.episodes,
		characterData: state.charactersReducer.characters.find(characters => characters.id === id)

	};
};


export default withRouter(connect(mapStateToProps)(CharacterDetailsContainer));
