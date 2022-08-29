import { createSlice } from "@reduxjs/toolkit";
import {
  createManager,
  deleteManager,
  getManagerList,
  managerLogin,
  managerReLogin,
  pushAll,
} from "./action";

const initialState = {
  manager: {},
  managers: [],
  lastPage: 1,
  sendPushLoading: false,
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    managerLogout(state) {
      state.manager = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(managerLogin.fulfilled, (state, action) => {
        state.manager = action.payload;
      })
      .addCase(managerReLogin.fulfilled, (state, action) => {
        state.manager = action.payload;
      })
      .addCase(getManagerList.fulfilled, (state, action) => {
        state.managers = action.payload.managers;
        state.lastPage = action.payload.lastPage;
      })
      .addCase(deleteManager.fulfilled, (state, action) => {
        state.managers = state.managers.filter((e) => {
          if (e.manager_id === action.payload.manager_id) {
            return false;
          } else {
            return true;
          }
        });
      })
      .addCase(createManager.fulfilled, (state, action) => {
        state.managers = [...state.managers, action.payload];
      })
      .addCase(pushAll.pending, (state, action) => {
        state.sendPushLoading = true;
      })
      .addCase(pushAll.fulfilled, (state, action) => {
        state.sendPushLoading = false;
      });
  },
});

export const { managerLogout } = managerSlice.actions;
export default managerSlice.reducer;
