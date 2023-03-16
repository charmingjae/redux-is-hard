import { combineReducers } from 'redux';
import pageReducer from './page';
import signUpReducer from './signUp';
import groundReducer from './ground';
import queryReducer from './query';
import groundTwoReducer from './groundTwo';

const rootReducer = combineReducers({
	pageReducer,
	signUpReducer,
	groundReducer,
	queryReducer,
	groundTwoReducer,
});

export default rootReducer;
