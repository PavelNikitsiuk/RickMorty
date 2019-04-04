import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import styles from './Character.module.css';

class Character extends PureComponent {
	static propTypes = {
		character: PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
		})
	};

	onDetailsPressed(id) {
		this.props.history.push(`/${id}`)
	};

	render() {
		const { character } = this.props;

		return (
			<div className={`${styles.button} ${styles.card}`} onClick={this.onDetailsPressed.bind(this, character.id)}>
				<img src={character.image} alt={character.name}/>
				<h2>{character.name}</h2>
			</div>
		);
	}
}

export default withRouter(Character);
