import { createStore, combineReducers } from "redux";
import {reducerFunction} from "./reducer"

const rootReducer = combineReducers(
    {
        userReducer: reducerFunction
    }
);

const storeFunction = () => {
    return createStore(rootReducer);
}

export default storeFunction;