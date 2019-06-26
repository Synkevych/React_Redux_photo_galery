import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

// rootReducer - функция обрабботчик изменений
// initialStore – начаальное состояние [опциональный параметр]

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
