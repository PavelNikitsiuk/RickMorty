import React, {Component} from 'react';
import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { withRouter } from 'react-router-dom'
import {fetchCharacters} from "../constants/CharactersActions";

export class CharacterScrollContainer extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		let clientHeight = document.documentElement.clientHeight || window.innerHeight;
		let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
		let {next} = this.props.info;

		if (scrolledToBottom && next) this.props.dispatch(fetchCharacters(next));
	};

	render() {

		return (
			<div onScroll={this.handleScroll}>
				<Characters characters={this.props.characters}/>
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


export default withRouter(connect(mapStateToProps)(CharacterScrollContainer));
