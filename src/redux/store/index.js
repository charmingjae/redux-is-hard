import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;