import { combineReducers } from "redux";
import pageReducer from "./page";
import signUpReducer from "./signUp";
import groundReducer from "./ground";

const rootReducer = combineReducers({
    pageReducer,
    signUpReducer,
    groundReducer,
})

export default rootReducer;