import { GROUND_OBJECT_FIRST } from "../../mocks/ground";
import { ADD_OBJ, PRESENT_FROM } from "../constant/ground";

export const presentFrom = (type, payload) => ({type, payload});

const initialState = {
    basic: 'Ground',
    obj: GROUND_OBJECT_FIRST
}

const groundReducer = (state = initialState, action = undefined) => {
    switch(action.type) {
        case PRESENT_FROM:
            return {
                ...state, basic: action.payload
            }
        case ADD_OBJ:
            return {
                ...state, obj: [...state.obj, action.payload]
            }
        default:
            return state;
    }
}

export default groundReducer;