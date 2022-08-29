import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoinList = createAsyncThunk(
  "cn/list",
  async (data = 1, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const {
        data: { coinList, lastPage },
      } = await axios.get(
        `https://mapi.looknote.co.kr/user/coin?page=${data}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return { coinList, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCoinRewardList = createAsyncThunk(
  "cn/reward",
  async (data = 1, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const {
        data: { coinList, lastPage },
      } = await axios.get(
        `https://mapi.looknote.co.kr/user/reward?page=${data}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(coinList);
      return { rewardList: coinList, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const minusCoin = createAsyncThunk(
  "cn/minus",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.delete(
        `https://mapi.looknote.co.kr/user/coin`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          data: {
            user_id: data.user_id,
            coin: data.coin,
          },
        }
      );
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setCoin = createAsyncThunk("cn/set", async (data, thunkAPI) => {
  try {
    const jwt = window.localStorage.getItem("looknote_token");
    const { data: res } = await axios.post(
      `https://mapi.looknote.co.kr/user/coin`,
      {
        user_id: data.user_id,
        coin: data.coin,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const searchCoin = createAsyncThunk(
  "cn/search",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/user/search/email`,
        {
          email: data,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
