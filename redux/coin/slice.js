import { createSlice } from "@reduxjs/toolkit";
import {
  getCoinList,
  getCoinRewardList,
  minusCoin,
  searchCoin,
  setCoin,
} from "./action";

const initialState = {
  coinList: [],
  rewardList: [],
  currentPage: 1,
  lastPage: 1,
  lastRPage: 1,
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoinList.fulfilled, (state, action) => {
        state.coinList = action.payload.coinList;
        state.lastPage = action.payload.lastPage;
      })
      .addCase(setCoin.fulfilled, (state, action) => {
        state.coinList = state.coinList.map((e) => {
          if (e.coin_id === action.payload.coin_id) {
            return {
              ...e,
              coin: action.payload.coin,
              coin_sum: action.payload.coin_sum,
            };
          } else {
            return e;
          }
        });
      })
      .addCase(searchCoin.fulfilled, (state, action) => {
        state.coinList = action.payload;
        state.lastPage = 1;
      })
      .addCase(minusCoin.fulfilled, (state, action) => {
        state.coinList = state.coinList.map((e) => {
          if (e.coin_id === action.payload.coin_id) {
            return {
              ...e,
              coin: action.payload.coin,
              coin_sum: action.payload.coin_sum,
            };
          } else {
            return e;
          }
        });
      })
      .addCase(getCoinRewardList.fulfilled, (state, action) => {
        state.rewardList = action.payload.rewardList;
        state.lastRPage = action.payload.lastPage;
      });
  },
});

export default coinSlice.reducer;
