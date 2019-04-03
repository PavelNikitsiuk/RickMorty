import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

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

	render() {
		const { characters } = this.props;

		return (
			<div className="container">
				{characters.map((character, id) => (
					<Character key={id} character={character}/>
				))}
			</div>
		);
	}
}

export default Characters;
