const loadEpisodes = episodeURLs => {
	// grab 5 latest episodes (episodes already sorted)
	let fiveLastEpisodes = episodeURLs.slice(-5);
	return Promise.all(fiveLastEpisodes.map(url => {
		return fetch(url)
			.then(handleErrors);
	}))
	.then(res => Promise.all(res.map(data => data.json())));
};

export const fetchEpisodes = (url)=> {
	return dispatch => {
		dispatch(fetchCharactersBegin());
		return loadEpisodes(url)
			.then(json => {
				dispatch(fetchCharactersSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchCharactersFailure(error))
			);
	};
};

const handleErrors = response => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};

export const CHARACTER_DETAILS_OPENED = 'CHARACTER_DETAILS_OPENED';

export const FETCH_EPISODES_BEGIN = 'FETCH_EPISODES_BEGIN';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';

export const  storeCharacterData = (characterData) => {
	return {
		type: CHARACTER_DETAILS_OPENED,
		payload: { characterData }
	};
};

export const fetchCharactersBegin = () => ({
	type: FETCH_EPISODES_BEGIN
});

export const fetchCharactersSuccess = (episodes) => ({
	type: FETCH_EPISODES_SUCCESS,
	payload: episodes
});

export const fetchCharactersFailure = error => ({
	type: FETCH_EPISODES_FAILURE,
	payload: { error }
});