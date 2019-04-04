import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from './Episodes.module.css';

class Episode extends PureComponent {
	static propTypes = {
		episodeData: PropTypes.shape({
			name: PropTypes.string,
			episode: PropTypes.string
		})
	};

	render() {
		const {episodeData} = this.props;

		return (
			<div className={styles.button}>
				<div className={styles.name}>{episodeData.name}</div>
				<div>{episodeData.episode}</div>
			</div>
		);
	}
}

export default Episode;
