import {
	FETCH_CHARACTERS_BEGIN,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE
} from '../constants/CharactersActions';

const initialState = {
	characters: [],
	info: {next: "https://rickandmortyapi.com/api/character/"},
	loading: false,
	error: false,
};

export default function charactersReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_CHARACTERS_BEGIN:
			return {
				...state,
				error: null,
				loading: true,
			};
		case FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				info: action.payload.info,
				characters:  [...state.characters, ...action.payload.results],
				loading: false,
			};
		case FETCH_CHARACTERS_FAILURE:
			return {
				...state,
				characters: [],
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
}
