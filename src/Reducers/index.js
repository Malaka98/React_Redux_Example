import { combineReducers } from "redux";

import AllPostReducer from "./reducer-Allpost";

export const rootReducer = combineReducers({
  allPosts: AllPostReducer,
});
