import { createSlice } from "@reduxjs/toolkit";
import {
  deleteUser,
  getQuitList,
  getUserList,
  searchUserWithEmail,
  undoQuit,
} from "./action";

const initialState = {
  users: [],
  userDetail: {},
  currentPage: 1,
  currentQPage: 1,
  lastPage: 1,
  quits: [],
  lastQPage: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserPg(state, action) {
      state.currentPage = action.payload;
    },
    setUserQPg(state, action) {
      state.currentQPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.lastPage = action.payload.lastPage;
      })
      .addCase(getQuitList.fulfilled, (state, action) => {
        state.quits = action.payload.quits;
        state.lastQPage = action.payload.lastQPage;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((e) => {
          return e.user_id !== action.payload.user_id;
        });
      })
      .addCase(searchUserWithEmail.fulfilled, (state, action) => {
        state.users = [action.payload];
        state.lastPage = 1
      })
      .addCase(undoQuit.fulfilled, (state, action) => {
        state.quits = state.quits.filter((e) => {
          return e.user_id !== action.payload.user_id;
        });
      })
  },
});

export const { setUserPg, setUserQPg } = userSlice.actions;

export default userSlice.reducer;
