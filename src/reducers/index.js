import { combineReducers } from "redux";
import { pageReducer } from "./page";
import { userReducer } from "./user";

// there will be reducer
// набор даных на входе

// представитель всего нашего состояния приложенния
// делаем обект с именим page, user 
export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer
});
