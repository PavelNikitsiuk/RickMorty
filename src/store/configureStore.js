import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from "redux-thunk";
import {loadState, saveState} from "./localStorage";
import {fetchCharacters} from "../constants/CharactersActions";

const persistedState = loadState();

const configureStore = () => {
	return createStore(
		rootReducer,
		persistedState,
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? () => window.__REDUX_DEVTOOLS_EXTENSION__ : f => f
		)
	);
};

const store = configureStore();

// todo: refactor this...
(() => {
	if (!persistedState) {
		store.dispatch(fetchCharacters());
	}
})();

store.subscribe(() => {
	saveState({
		charactersReducer: store.getState().charactersReducer
	});
});

export default store;