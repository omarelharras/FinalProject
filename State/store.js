import { createStore, combineReducers, applyMiddleware } from "redux";

import reducer from "../State/reducer";

const rootReducer = combineReducers({
  authReducer: reducer
});

const Store = createStore(rootReducer);

export default Store;
