import { combineReducers } from "redux";
import todoReducers from "./formData";

const rootreducer = combineReducers({
  todoReducers,
});

export default rootreducer;