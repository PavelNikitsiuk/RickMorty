import {charactersReducer, initialState} from "../characters";
import {
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_BEGIN,
	FETCH_CHARACTERS_FAILURE
} from "../../constants/CharactersActionsConstants";

describe('Characters Reducer', () => {
	it('FETCH_CHARACTERS_BEGIN', () => {
		const action = {
			type: FETCH_CHARACTERS_BEGIN,
			loading: true
		};

		expect(charactersReducer(initialState, action)).toEqual({
			...initialState,
			characters: [],
			loading: true,
			error: null,
		});
	});

	it('FETCH_CHARACTERS_SUCCESS', () => {
		const previousState = {
			characters: [],
			loading: true,
			error: null,
		};

		const action = {
			type: FETCH_CHARACTERS_SUCCESS,
			payload: {info: {}, results: []},
			loading: false
		};

		expect(charactersReducer(previousState, action)).toEqual({
			...previousState,
			characters: [],
			info: {},
			loading: false
		});
	});

	it('FETCH_CHARACTERS_FAILURE', () => {
		const previousState = {
			...initialState,
			characters: [],
			loading: true,
			error: null,
		};

		const action = {
			type: FETCH_CHARACTERS_FAILURE,
			payload: {error: {}},
			loading: false
		};

		expect(charactersReducer(previousState, action)).toEqual({
			...previousState,
			error: {},
			loading: false
		});
	});
});