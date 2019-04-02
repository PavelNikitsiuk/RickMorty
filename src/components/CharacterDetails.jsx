import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Characters extends PureComponent {
	static propTypes = {
		detailInfo: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			image: PropTypes.string,
		}),
	};

	static defaultProps = {
		detailInfo: {
			id: 1,
			name: "Test",
			image: "#"
		}
	};

	componentDidMount() {
		console.log(123);
	}

	render() {
		const {detailInfo} = this.props;

		return (
			<div className="todos">
				<span>Name</span>
				<span>{detailInfo.name}</span>
			</div>
		);
	}
}

export default Characters;
