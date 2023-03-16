import { DECREASE_COUNT, INCREASE_COUNT } from '../constant/groundTwo';

export const setCount = type => ({ type });

const initialState = {
	count: 0,
};

const groundTwoReducer = (state = initialState, action = undefined) => {
	switch (action.type) {
		case INCREASE_COUNT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREASE_COUNT:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
};

export default groundTwoReducer;
