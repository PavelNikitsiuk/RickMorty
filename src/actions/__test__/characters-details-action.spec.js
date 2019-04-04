import {
	fetchEpisodesBegin,
	fetchEpisodesFailure,
	fetchEpisodesSuccess,
	fetchEpisodes
} from "../CharacterDetailsActions";

import * as detailsTypes from "../../constants/CharacterDetailsActionsConstants";

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Actions', () => {
	it('fetchCharactersBegin', () => {
		expect(fetchEpisodesBegin()).toEqual({
			type: detailsTypes.FETCH_EPISODES_BEGIN,
			loading: true
		});
	});

	it('fetchCharactersSuccess', () => {
		const recieved = {episodes: []};
		expect(fetchEpisodesSuccess(recieved)).toEqual({
			type: detailsTypes.FETCH_EPISODES_SUCCESS,
			payload: {episodes: []},
			loading: false
		});
	});

	it('fetchCharactersFailure', () => {
		expect(fetchEpisodesFailure(Error)).toEqual({
			type: detailsTypes.FETCH_EPISODES_FAILURE,
			payload: {error: Error},
			loading: false
		});
	});

	describe('Async actions', () => {

		afterEach(() => {
			fetchMock.reset();
			fetchMock.restore();
		});

		it('creates FETCH_CHARACTERS_SUCCESS when fetching done', () => {
			const urls = ["/1", "/2", "/3", "/4"];
			urls.forEach((url) => {
				fetchMock.getOnce(url, {
					headers: {'content-type': 'application/json'},
					body: {}
				});
			});


			const expectedActions = [
				{type: detailsTypes.FETCH_EPISODES_BEGIN, loading: true},
				{type: detailsTypes.FETCH_EPISODES_SUCCESS, payload: [{}, {}, {}, {}], loading: false},
			];

			const store = mockStore({});

			return store.dispatch(fetchEpisodes(urls)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			});
		});

		it('creates FETCH_CHARACTERS_FAILURE when fetching failed', () => {
			const urls = ["/1", "/2", "/3", "/4"];
			urls.forEach((url) => {
				fetchMock.getOnce(url, Promise.reject({}));
			});

			const expectedActions = [
				{type: detailsTypes.FETCH_EPISODES_BEGIN, loading: true},
				{type: detailsTypes.FETCH_EPISODES_FAILURE, payload: {error: {}}, loading: false},
			];

			const store = mockStore({});

			return store.dispatch(fetchEpisodes(urls)).then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			});
		});
	});

});