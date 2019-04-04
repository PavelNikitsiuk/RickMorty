import * as charactypes from "../constants/CharactersActionsConstants";

const loadCharacters = url => {
	return fetch(url)
		.then(handleErrors)
		.then(res => res.json());
};

const handleErrors = response => {
	if (!response.ok) throw Error(response.statusText);
	return response;
};

export const fetchCharacters = (url = charactypes.INITIAL_SERVICE_URL) => {
	return dispatch => {
		dispatch(fetchCharactersBegin());
		return loadCharacters(url)
			.then(data => dispatch(fetchCharactersSuccess(data)))
			.catch(error => dispatch(fetchCharactersFailure(error)));
	};
};

export const fetchCharactersBegin = () => ({
	type: charactypes.FETCH_CHARACTERS_BEGIN,
	loading: true
});

export const fetchCharactersSuccess = ({info, results}) => ({
	type: charactypes.FETCH_CHARACTERS_SUCCESS,
	payload: { info, results },
	loading: false
});

export const fetchCharactersFailure = error => ({
	type: charactypes.FETCH_CHARACTERS_FAILURE,
	payload: { error },
	loading: false
});