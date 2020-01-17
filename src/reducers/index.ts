import { combineReducers } from "redux";
import { modelReducer } from "@reducers/modelReducer";

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<any>({
  models: modelReducer as any
});
