import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class NotFound extends PureComponent {
	static propTypes = {
		name: PropTypes.string,
	};

	static defaultProps = {
		name: '',
	};

	render() {
		return (
			<h2>Sorry, {this.props.name} page not found</h2>
		);
	}
}

export default NotFound;
