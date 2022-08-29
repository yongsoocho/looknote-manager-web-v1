import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCody,
  deleteVogue,
  getCodyList,
  getReportList,
  getVogueList,
  moveToVogue,
  patchCodyQuality,
  searchCody,
  searchVogue,
} from "./action";

const initialState = {
  codys: [
    {
      comment: 0,
      imageURL: ["/"],
      post_id: 9,
      scrap: 3,
      updated_at: "2022-05-25T06:05:22.938Z",
      user_id: 4,
    },
  ],
  vogues: [
    {
      comment: 1,
      imageURL: ["/"],
      post: {},
      post_id: 4,
      scrap: 5,
      updated_at: "2022-05-26T04:39:43.327Z",
      user_id: 4,
      vogue_id: 1,
    },
  ],
  reports: [
    {
      comment: 1,
      imageURL: ["/"],
      post: {},
      post_id: 4,
      scrap: 5,
      updated_at: "2022-05-26T04:39:43.327Z",
      user_id: 4,
      report_id: 1,
    },
  ],
  searchCodys: [],
  currentPage: 1,
  lastPage: 1,
  currentVPage: 1,
  lastVPage: 1,
  currentRpage: 1,
  lastRPage: 1,
};

const codySlice = createSlice({
  name: "cody",
  initialState,
  reducers: {
    setCodyPg(state, action) {
      state.currentPage = action.payload;
    },
    setVoguePg(state, action) {
      state.currentVPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCodyList.fulfilled, (state, action) => {
        state.codys = action.payload.posts;
        state.lastPage = action.payload.lastPage;
      })
      .addCase(deleteCody.fulfilled, (state, action) => {
        state.codys = state.codys.filter((e) => {
          if (e.post_id === action.payload.post_id) {
            return false;
          } else {
            return true;
          }
        });
      })
      .addCase(moveToVogue.fulfilled, (state, action) => {})
      .addCase(deleteVogue.fulfilled, (state, action) => {
        state.vogues = state.vogues.filter((e) => {
          if (e.post_id === action.payload.post_id) {
            return false;
          } else {
            return true;
          }
        });
      })
      .addCase(searchCody.fulfilled, (state, action) => {
        state.codys = action.payload;
        state.lastPage = 1;
      })
      .addCase(searchVogue.fulfilled, (state, action) => {
        state.vogues = action.payload;
      })
      .addCase(getVogueList.fulfilled, (state, action) => {
        state.vogues = action.payload.vogues;
        state.lastVPage = action.payload.lastPage;
      })
      .addCase(getReportList.fulfilled, (state, action) => {
        state.reports = action.payload.reports;
        state.lastRPage = action.payload.lastPage;
      })
      .addCase(patchCodyQuality.fulfilled, (state, action) => {
        state.vogues = state.vogues.map((e) => {
          if (e.vogue_id === action.payload.vogue_id) {
            return {
              ...e,
              quality: action.payload.quality,
            };
          } else {
            return e;
          }
        });
      });
  },
});

export const { setCodyPg, setVoguePg } = codySlice.actions;

export default codySlice.reducer;
