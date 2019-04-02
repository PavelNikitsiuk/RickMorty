import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import fetchCharacters from '../constants/CharactersActions';

class Characters extends PureComponent {
	static propTypes = {
		characters: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
				image: PropTypes.string,
			}),
		)
	};

	static defaultProps = {
		characters: [],
	};

	componentDidMount() {
		this.props.dispatch(fetchCharacters());
	}

	render() {
		const { characters, history } = this.props;

		return (
			<div className="todos">
				<ul>
					{characters.map((character, id) => (
						<Character history={history} key={id} character={character}/>
					))}
				</ul>
			</div>
		);
	}
}

export default Characters;
