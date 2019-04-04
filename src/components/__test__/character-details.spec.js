import React from 'react'
import CharacterDetails from "../CharacterDetails";
import { shallow } from 'enzyme'

describe('CharacterDetails', () => {
	const props = {
		characterData: {
			name: "string",
			location: {
				name: "string"
			},
		},
		episodes: []
	};

	const shallowCharacterDetails = shallow(<CharacterDetails {...props} />);

	it('CharacterDetails renders properly', () => {
		expect(shallowCharacterDetails).toMatchSnapshot();
	});
});