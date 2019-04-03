import {
	CHARACTER_DETAILS_OPENED,
	FETCH_EPISODES_BEGIN,
	FETCH_EPISODES_SUCCESS,
	FETCH_EPISODES_FAILURE
} from "../constants/CharacterDetailsActions";

const initialState = {
	characterData: {
		id: 1,
		name: "",
		location: {name: ""},
	},
	episodes: []
};

export default function characterDetailsReducer(state = initialState, action) {
	switch (action.type) {
		case CHARACTER_DETAILS_OPENED:
			return {
				...state,
				characterData: action.payload.characterData
			};
		case FETCH_EPISODES_BEGIN:
			return {
				...state,
				error: null,
				loading: true,
			};
		case FETCH_EPISODES_SUCCESS:
			return {
				...state,
				episodes: action.payload
			};
		case FETCH_EPISODES_FAILURE:
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
