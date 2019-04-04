import * as detailsTypes from "../constants/CharacterDetailsActionsConstants";

const loadEpisodes = episodeURLs => {
	// grab 5 latest episodes (episodes already sorted at the service side)
	let fiveLastEpisodes = episodeURLs.slice(-5);
	return Promise.all(fiveLastEpisodes.map(url => {
		return fetch(url).then(handleErrors);
	}))
	.then(res => Promise.all(res.map(data => data.json())));
};


const handleErrors = response => {
	if (!response.ok) throw Error(response.statusText);

	return response;
};

export const fetchEpisodes = (url)=> {
	return dispatch => {

		dispatch(fetchEpisodesBegin());

		return loadEpisodes(url)
			.then(json => dispatch(fetchEpisodesSuccess(json)))
			.catch(error => dispatch(fetchEpisodesFailure(error)));
	};
};

export const fetchEpisodesBegin = () => ({
	type: detailsTypes.FETCH_EPISODES_BEGIN,
	loading: true
});

export const fetchEpisodesSuccess = (episodes) => ({
	type: detailsTypes.FETCH_EPISODES_SUCCESS,
	payload: episodes,
	loading: false
});

export const fetchEpisodesFailure = error => ({
	type: detailsTypes.FETCH_EPISODES_FAILURE,
	payload: { error },
	loading: false
});