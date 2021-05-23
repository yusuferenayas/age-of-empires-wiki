import {combineReducers} from "redux";
import app from "./App/slices";
import filter from "./Filter/slices";

// Add Reducers Here
const rootReducer = combineReducers({
  app,
  filter,
});

export default rootReducer;
