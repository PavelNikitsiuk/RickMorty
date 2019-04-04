import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Episode from './Episode';
import styles from './CharacterDetails.module.css';

class CharacterDetails extends PureComponent {
	static propTypes = {
		characterData: PropTypes.shape({
			name: PropTypes.string,
			location: PropTypes.shape({
				name: PropTypes.string
			}),
		}),
		episodes: PropTypes.array
	};

	render() {
		const {characterData, episodes} = this.props;

		return (
			<div>
				<div className={styles.introductionContainer}>
					<div className={styles.name}>
						<span>{characterData.name}</span>
					</div>
					<div className={styles.location}>
						<span>Current Location - {characterData.location.name}</span>
					</div>
				</div>
				<div className={styles.episodesContainer}>
					<div className={styles.episodesTitle}>Last Episodes</div>
					<div className={styles.cardContainer}>
						{episodes.map((episode, id) => (
							<Episode episodeData={episode} key={id}/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default CharacterDetails;
