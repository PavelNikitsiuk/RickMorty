import React, {Component} from 'react';
import {connect} from 'react-redux';
import Characters from '../components/Characters';
import {withRouter} from 'react-router-dom'
import {fetchCharacters} from '../actions/CharactersActions';
import styles from './CharacterContainer.module.css'
import 'intersection-observer';

export class CharacterScrollContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {prevY: 0};

		this.handleObserver = this.handleObserver.bind(this);
	}

	componentDidMount() {
		let options = {root: null, rootMargin: "0px", threshold: 1.0};

		this.observer = new IntersectionObserver(this.handleObserver, options);
		this.observer.observe(this.loaderRef);
	}

	handleObserver(entities) {
		const y = entities[0].boundingClientRect.y;
		let {info} = this.props;

		if (this.state.prevY > y && info.next) {
			this.props.dispatch(fetchCharacters(info.next));
		}

		this.setState({prevY: y});
	}

	render() {
		const {loading, info, characters} = this.props;
		const spinnerStyle = loading ? styles.ringSpinner : styles.hideSpinner;

		return (
			<div>
				<Characters nextRef={info.next} characters={characters}/>

				<div ref={loaderRef => (this.loaderRef = loaderRef)}
					 className={styles.loaderContainer}>
					<div className={spinnerStyle}/>
				</div>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		info: state.charactersReducer.info,
		characters: state.charactersReducer.characters,
		loading: state.charactersReducer.loading,
		error: state.charactersReducer.error
	};
};

const mapDispatchToProps = dispatch => ({
	fetchCharacters: next => dispatch(fetchCharacters(next)),
	dispatch
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterScrollContainer));
