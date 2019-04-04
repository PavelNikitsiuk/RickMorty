import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from "redux-thunk";
import {loadState, saveState} from "./localStorage";
import {fetchCharacters} from "../actions/CharactersActions";

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

if (!persistedState) {
	store.dispatch(fetchCharacters());
}

const storeChangeHandler = () => {
	let charactersReducer = store.getState().charactersReducer;
	saveState({charactersReducer});
};

store.subscribe(storeChangeHandler);

export default store;