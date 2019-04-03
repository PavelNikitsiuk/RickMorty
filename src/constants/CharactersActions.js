const INITIAL_SERVICE_URL = "https://rickandmortyapi.com/api/character/";

const loadCharacters = url => {
	return fetch(url)
		.then(handleErrors)
		.then(res => res.json());
};

export const fetchCharacters = (url = INITIAL_SERVICE_URL) => {
	return dispatch => {
		dispatch(fetchCharactersBegin());
		return loadCharacters(url)
			.then(json => {
				dispatch(fetchCharactersSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchCharactersFailure(error))
			);
	};
};

const handleErrors = response => {
	if (!response.ok) throw Error(response.statusText);
	return response;
};

export const FETCH_CHARACTERS_BEGIN = 'FETCH_CHARACTERS_BEGIN';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharactersBegin = () => ({
	type: FETCH_CHARACTERS_BEGIN
});

export const fetchCharactersSuccess = ({info, results}) => ({
	type: FETCH_CHARACTERS_SUCCESS,
	payload: { info, results }
});

export const fetchCharactersFailure = error => ({
	type: FETCH_CHARACTERS_FAILURE,
	payload: { error }
});