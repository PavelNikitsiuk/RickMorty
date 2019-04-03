import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CharacterDetails extends PureComponent {
	static propTypes = {
		detailInfo: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			location: PropTypes.shape({
				name: PropTypes.string
			}),
			episodes: PropTypes.array
		}),
	};

	render() {
		const {characterData, episodes} = this.props;

		return (
			<div className="detailsList">
				<div>
					<span>Name</span>
					<span>{characterData.name}</span>
				</div>
				<div>
					<span>Location Name</span>
					<span>{characterData.location.name}</span>
				</div>
				<div>
					{episodes.map((episode, id) => (
						<div key={id}>
							<span>{episode.name}</span>
							<span>{episode.episode}</span>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default CharacterDetails;
