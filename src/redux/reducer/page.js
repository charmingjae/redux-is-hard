import { MOVE_PAGE } from "../constant/page";

// action
export const movePage = page => ({type: MOVE_PAGE, page});

const initialState = {
    page: '',
}

const pageReducer = (state = initialState, action = undefined) => {
    switch (action.type){
        case MOVE_PAGE :
            return {
                ...state, page: action.page
            };
        default:
            return state;
    }
}

export default pageReducer;