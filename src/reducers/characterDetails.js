import {
	FETCH_EPISODES_BEGIN,
	FETCH_EPISODES_SUCCESS,
	FETCH_EPISODES_FAILURE
} from "../constants/CharacterDetailsActionsConstants";

export const initialState = {
	characterData: {
		id: 1,
		name: "",
		location: {name: ""},
	},
	error: null,
	episodes: []
};

export const characterDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EPISODES_BEGIN:
			return {
				...state,
				loading: action.loading,
			};
		case FETCH_EPISODES_SUCCESS:
			return {
				...state,
				episodes: action.payload,
				loading: action.loading
			};
		case FETCH_EPISODES_FAILURE:
			return {
				...state,
				loading: action.loading,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
