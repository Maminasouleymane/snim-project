import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import infoReducer from "../reducers/info";
import filterReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      info: infoReducer,
      filters: filterReducer,
    }),
    applyMiddleware(thunkMiddleware)
  );
  return store;
};
