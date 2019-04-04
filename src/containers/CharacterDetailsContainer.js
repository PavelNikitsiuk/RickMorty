import React, {Component} from 'react';
import {connect} from 'react-redux';
import CharacterDetails from '../components/CharacterDetails';
import {withRouter} from 'react-router-dom'
import {fetchEpisodes} from "../actions/CharacterDetailsActions";
import {memoize} from "../utils"
import styles from "./CharacterDetailsContainer.module.css";

export class CharacterDetailsContainer extends Component {
	componentDidMount() {
		const {characterData} = this.props;
		this.props.dispatch(fetchEpisodes(characterData.episode));
	}

	render() {
		const {characterData, episodes, history} = this.props;
		return (
			<div>
				<div className={styles.navButton} onClick={history.goBack}>
					<div className={styles.iconLeft}>{"<"}</div>
				</div>
				<CharacterDetails characterData={characterData} episodes={episodes}/>
			</div>
		)
	}

}

const findCharacter = (characters, id) => characters.find(characters => characters.id === id);
const mFindCharacter = memoize(findCharacter);

const mapStateToProps = (state, ownProps) => {
	let id = +ownProps.match.params.id;
	return {
		episodes: state.characterDetailsReducer.episodes,
		characterData: mFindCharacter(state.charactersReducer.characters, id)
	};
};

const mapDispatchToProps = dispatch => ({
	fetchEpisodes: next => dispatch(fetchEpisodes(next)),
	dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsContainer));
