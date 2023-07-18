import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  Test: reducer,
  //other reducers come here...
});

export default reducers;