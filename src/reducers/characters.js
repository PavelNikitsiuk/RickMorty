import {
	FETCH_CHARACTERS_BEGIN,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE
} from '../constants/CharactersActionsConstants';

export const initialState = {
	characters: [],
	info: {next: "https://rickandmortyapi.com/api/character/"},
	loading: false,
	error: null,
};

export const charactersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CHARACTERS_BEGIN:
			return {
				...state,
				loading: action.loading,
			};
		case FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				info: action.payload.info,
				characters: [...state.characters, ...action.payload.results],
				loading: action.loading,
			};
		case FETCH_CHARACTERS_FAILURE:
			return {
				...state,
				loading: action.loading,
				error: action.payload.error
			};
		default:
			return state;
	}
};
