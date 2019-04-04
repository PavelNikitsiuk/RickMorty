import React from 'react'
import Episode from "../Episode";
import { shallow } from 'enzyme'

describe('Episode', () => {
	const props = {
		episodeData: {
			name: "string",
			episode: "string"
		}
	};

	const shallowEpisode = shallow(<Episode {...props} />);

	it('Episode renders properly', () => {
		expect(shallowEpisode).toMatchSnapshot();
	});
});