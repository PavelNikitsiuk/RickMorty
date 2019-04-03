import { combineReducers } from 'redux';
import charactersReducer from './characters';
import characterDetailsReducer from './characterDetails';

export default combineReducers({
	charactersReducer,
	characterDetailsReducer,
});
