import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk(
  "us/get/user",
  async (data = 1, thunkAPI) => {
    console.log(data);
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const {
        data: { users, lastPage },
      } = await axios.get(`https://mapi.looknote.co.kr/user?page=${data}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return { users, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "us/delete/user",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.delete(
        `https://mapi.looknote.co.kr/user`,
        {
          data: {
            user_id: data,
          },
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

export const getQuitList = createAsyncThunk(
  "us/get/quit",
  async (data = 1, thunkAPI) => {
    try {
      console.log(data);
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.get(
        `https://mapi.looknote.co.kr/user/quit?page=${data}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
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

export const undoQuit = createAsyncThunk(
  "us/delete/quit",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.delete(
        `https://mapi.looknote.co.kr/user/quit`,
        {
          data: {
            user_id: data,
          },
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

export const searchUserWithEmail = createAsyncThunk(
  "us/search/email",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/user/search/nickname`,
        {
          nickname: data,
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

export const searchQuitWithEmail = createAsyncThunk(
  "qu/search/email",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/user/search`,
        {
          email: data,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
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
