import { createStore } from "redux";
import { reducer } from "./reducer";

const initailState = {
  todos: [],
  notcompleted: [],
  total: 0,
};
export const store = createStore(reducer, initailState);
