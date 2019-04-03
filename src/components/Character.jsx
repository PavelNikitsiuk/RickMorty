import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";

class Character extends PureComponent {
	static propTypes = {
		name: PropTypes.string,
		image: PropTypes.string,
	};

	onDetailsPressed(id) {
		this.props.history.push(`/${id}`)
	};

	render() {
		const {id, name, image} = this.props.character;

		return (
			<div className="card" onClick={this.onDetailsPressed.bind(this, id)}>
				<img src={image} alt={name}/>
				<h2>{name}</h2>
			</div>
		);
	}
}

export default withRouter(Character);
