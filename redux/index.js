import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { createWrapper } from "next-redux-wrapper";
import managerReducer from "./manager/slice";
import userReducer from "./user/slice";
import codyReducer from "./cody/slice";
import coinReducer from "./coin/slice";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...action.payload };
  }
  return combineReducers({
    manager: managerReducer,
    user: userReducer,
    coin: coinReducer,
    cody: codyReducer,
  })(state, action);
};

const makeStore = (context) =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore);
