import React from 'react'
import Characters from "../Characters";
import { shallow } from 'enzyme'

describe('characters', () => {
	const props = {
		characters: [
			{
				name: "string1",
				image: "src1"
			},
			{
				name: "string2",
				image: "src2"
			}
		]
	};

	const shallowCharacters = shallow(<Characters {...props} />);

	it('Characters renders properly', () => {
		expect(shallowCharacters).toMatchSnapshot();
	});
});