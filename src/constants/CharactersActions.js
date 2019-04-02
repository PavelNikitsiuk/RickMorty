function getProducts() {
	return fetch("/products")
		.then(handleErrors)
		.then(res => res.json());
}

export function fetchProducts() {
	return dispatch => {
		dispatch(fetchCharactersBegin());
		return getProducts()
			.then(json => {
				dispatch(fetchCharactersSuccess(json.products));
				return json.products;
			})
			.catch(error => dispatch(fetchCharactersFailure(error))
			);
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export const FETCH_CHARACTERS_BEGIN = 'FETCH_CHARACTERS_BEGIN';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fetchCharactersBegin = () => ({
	type: FETCH_CHARACTERS_BEGIN
});

export const fetchCharactersSuccess = characters => ({
	type: FETCH_CHARACTERS_SUCCESS,
	payload: { characters }
});

export const fetchCharactersFailure = error => ({
	type: FETCH_CHARACTERS_FAILURE,
	payload: { error }
});