import React from 'react'
import CharacterDetailsContainer from "../CharacterDetailsContainer";
import { shallow } from 'enzyme'

describe('CharacterDetailsContainer', () => {
	const props = {
		characterData: {
			id: 1,
			name: "",
			location: {name: ""},
		},
		error: null,
		episodes: []
	};

	const shallowCharacterDetailsContainer = shallow(<CharacterDetailsContainer {...props} />);

	it('CharacterDetailsContainer renders properly', () => {
		expect(shallowCharacterDetailsContainer).toMatchSnapshot();
	});
});