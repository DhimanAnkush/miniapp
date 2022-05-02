// create store here
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(reducer, applyMiddleware(thunk));

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
