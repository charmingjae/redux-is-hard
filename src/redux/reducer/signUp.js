import { CHANGE_POSITION } from "../constant/signUp";

export const changePosition = position => ({type: CHANGE_POSITION, position});

const initialState = {
    userPosition: 'student',
}

const signUpReducer = (state = initialState, action = undefined) => {
    switch (action.type) {
        case CHANGE_POSITION : 
            return{
                ...state, userPosition: action.position
            }
        default:
            return state;
    }
}

export default signUpReducer;