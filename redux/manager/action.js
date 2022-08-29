import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const managerLogin = createAsyncThunk(
  "ma/login",
  async (data, thunkAPI) => {
    try {
      const { data: res } = await axios.post(
        "https://mapi.looknote.co.kr/manager/login",
        {
          email: data.email,
          password: data.pw,
        }
      );
      window.localStorage.setItem("looknote_token", res.token);
      return res.manager;
    } catch (error) {
      console.log(error);
    }
  }
);

export const managerReLogin = createAsyncThunk(
  "mn/relogin",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.get(
        "https://mapi.looknote.co.kr/manager/relogin",
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.log(erro);
    }
  }
);

export const getManagerList = createAsyncThunk(
  "ma/get",
  async (data, thunkAPI) => {
    try {
      const {
        data: { managers, lastPage },
      } = await axios.get(
        `https://mapi.looknote.co.kr/manager?page=${
          thunkAPI.getState().manager.lastPage
        }`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "looknote_token"
            )}`,
          },
        }
      );
      return { managers, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteManager = createAsyncThunk(
  "ma/delete",
  async (data, thunkAPI) => {
    try {
      const { data: res } = await axios.delete(
        `https://mapi.looknote.co.kr/manager`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "looknote_token"
            )}`,
          },
          data: {
            manager_id: data,
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

export const createManager = createAsyncThunk(
  "ma/create",
  async (data, thunkAPI) => {
    try {
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/manager/join`,
        {
          email: data.email,
          password: data.password,
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "looknote_token"
            )}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const pushAll = createAsyncThunk("push/all", async (data, thunkAPI) => {
  try {
    console.log("start");
    const { data: res } = await axios.post(
      `https://domain.looknote.co.kr/fcm/all`,
      {
        body: data,
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            "looknote_token"
          )}`,
        },
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const managerUpdate = createAsyncThunk(
  "mn/update",
  async (data, thunkAPI) => {
    try {
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/update`,
        {
          body: data,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "looknote_token"
            )}`,
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

export const managerQuery = createAsyncThunk(
  "mn/qeury",
  async (data, thunkAPI) => {
    try {
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/query`,
        {
          body: data,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "looknote_token"
            )}`,
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
