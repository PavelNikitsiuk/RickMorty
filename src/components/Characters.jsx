import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import style from './Characters.module.css';

class Characters extends PureComponent {
	static propTypes = {
		characters: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				image: PropTypes.string,
			}),
		)
	};

	render() {
		const { characters } = this.props;

		return (
			<div className={style.container}>
				{characters.map((character, id) => (
					<Character key={id} character={character}/>
				))}
			</div>
		);
	}
}

export default Characters;
