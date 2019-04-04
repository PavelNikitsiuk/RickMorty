import {characterDetailsReducer, initialState} from "../characterDetails";
import {
	FETCH_EPISODES_BEGIN,
	FETCH_EPISODES_SUCCESS,
	FETCH_EPISODES_FAILURE
} from "../../constants/CharacterDetailsActionsConstants";

describe('CharacterDetails Reducer', () => {
	it('FETCH_EPISODES_BEGIN', () => {
		const action = {
			type: FETCH_EPISODES_BEGIN,
			loading: true
		};

		expect(characterDetailsReducer(initialState, action)).toEqual({
			...initialState,
			episodes: [],
			loading: true
		});
	});

	it('FETCH_EPISODES_SUCCESS', () => {
		const previousState = {
			episodes: [],
			loading: true,
			error: null,
		};

		const action = {
			type: FETCH_EPISODES_SUCCESS,
			loading: false,
			payload: []
		};

		expect(characterDetailsReducer(previousState, action)).toEqual({
			...previousState,
			episodes: [],
			loading: false
		});
	});

	it('FETCH_EPISODES_FAILURE', () => {
		const previousState = {
			...initialState,
			characters: [],
			loading: true,
			error: null,
		};

		const action = {
			type: FETCH_EPISODES_FAILURE,
			loading: false,
			payload: {error: {}}
		};

		expect(characterDetailsReducer(previousState, action)).toEqual({
			...previousState,
			episodes: [],
			error: {},
			loading: false
		});
	});
});