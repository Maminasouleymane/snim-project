import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import infoReducer from "../reducers/info";
import filterReducer from "../reducers/filters";
import arretReducer from "../reducers/arret";
import groupeReducer from "../reducers/groupe";
import operationReducer from "../reducers/operation";
import auxiliaireReducer from "../reducers/auxiliaire";

export default () => {
  const store = createStore(
    combineReducers({
      info: infoReducer,
      filters: filterReducer,
      arret: arretReducer,
      groupe: groupeReducer,
      operation: operationReducer,
      auxiliaire: auxiliaireReducer,
    }),
    applyMiddleware(thunkMiddleware)
  );
  return store;
};
