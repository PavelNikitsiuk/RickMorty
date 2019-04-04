import React from 'react'
import CharacterScrollContainer from "../CharacterContainer";
import { shallow } from 'enzyme'

describe('CharacterScrollContainer', () => {
	const props = {
			characters: [],
			info: {next: "https://rickandmortyapi.com/api/character/"},
			loading: false
	};

	const shallowCharacterScrollContainer = shallow(<CharacterScrollContainer {...props} />);

	it('CharacterScrollContainer renders properly', () => {
		expect(shallowCharacterScrollContainer).toMatchSnapshot();
	});
});