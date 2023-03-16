import { CHANGE_QUERY_KEY } from '../constant/query';

export const changeQueryKey = payload => ({ type: CHANGE_QUERY_KEY, payload });

const initialState = {
	testKey: 1,
};

const queryReducer = (state = initialState, action = undefined) => {
	switch (action.type) {
		case CHANGE_QUERY_KEY:
			return {
				...state,
				testKey: action.payload,
			};
		default:
			return state;
	}
};

export default queryReducer;
