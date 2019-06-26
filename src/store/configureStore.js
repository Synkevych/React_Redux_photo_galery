import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { ping } from "../enhancers/ping";
import thunk from "redux-thunk";

// rootReducer - функция обрабботчик изменений
// initialStore – начаальное состояние [опциональный параметр]

export const store = createStore(rootReducer, applyMiddleware(thunk, ping));
