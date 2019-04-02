import {
	FETCH_CHARACTERS_BEGIN,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE
} from '../constants/CharactersActions';

const initialState = [{
	characters: [],
	loading: false,
	error: false,
}];

export default function charactersReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_CHARACTERS_BEGIN:
			return {
				error: null,
				loading: true,
				...state
			};
		case FETCH_CHARACTERS_SUCCESS:
			return {
				info: action.payload.info,
				characters: action.payload.results,
				loading: false,
				...state
			};
			case FETCH_CHARACTERS_FAILURE:
			return {
				characters: [],
				loading: false,
				error: action.payload.error,
				...state
			};
		default:
			return state;
	}
}
