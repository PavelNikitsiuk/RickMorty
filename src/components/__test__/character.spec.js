import React from 'react'
import Character from "../Character";
import { shallow } from 'enzyme'

describe('character', () => {
	const props = {
		character: {
			name: "string",
			image: "string",
		}
	};

	const shallowCharacter = shallow(<Character {...props} />);

	it('Character renders properly', () => {
		expect(shallowCharacter).toMatchSnapshot();
	});
});