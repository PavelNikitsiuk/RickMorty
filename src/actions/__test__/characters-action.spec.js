import {fetchCharactersBegin, fetchCharactersFailure, fetchCharactersSuccess, fetchCharacters} from "../CharactersActions";
import * as characters from "../../constants/CharactersActionsConstants";

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Actions', () => {
	it('fetchCharactersBegin', () => {
		expect(fetchCharactersBegin()).toEqual({
			type: characters.FETCH_CHARACTERS_BEGIN,
			loading: true
		});
	});

	it('fetchCharactersSuccess', () => {
		const recieved = {info: {}, results: []};
		expect(fetchCharactersSuccess(recieved)).toEqual({
			type: characters.FETCH_CHARACTERS_SUCCESS,
			loading: false,
			payload: {info: {}, results: []}
		});
	});

	it('fetchCharactersFailure', () => {
		expect(fetchCharactersFailure(Error)).toEqual({
			type: characters.FETCH_CHARACTERS_FAILURE,
			loading: false,
			payload: {error: Error}
		});
	});

	describe('Async actions', () => {

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it('creates FETCH_CHARACTERS_SUCCESS when fetching done', () => {

			fetchMock.getOnce(characters.INITIAL_SERVICE_URL, {
				headers: {'content-type': 'application/json'},
				body: {info: {}, results: [], status: 'ok'}
			});

			const expectedActions = [
				{type: characters.FETCH_CHARACTERS_BEGIN, loading: true},
				{type: characters.FETCH_CHARACTERS_SUCCESS, payload: {info: {}, results: []}, loading: false},
			];

			const store = mockStore({});

			return store.dispatch(fetchCharacters(characters.INITIAL_SERVICE_URL)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			});
		});

		it('creates FETCH_CHARACTERS_FAILURE when fetching failed', () => {

			fetchMock.getOnce(characters.INITIAL_SERVICE_URL, Promise.reject({}));

			const expectedActions = [
				{type: characters.FETCH_CHARACTERS_BEGIN, loading: true},
				{type: characters.FETCH_CHARACTERS_FAILURE, payload: {error: {}}, loading: false},
			];

			const store = mockStore({});

			return store.dispatch(fetchCharacters(characters.INITIAL_SERVICE_URL)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			});
		});
	});

});