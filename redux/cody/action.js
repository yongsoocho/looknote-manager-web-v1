import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCodyList = createAsyncThunk(
  "cd/cody/get",
  async (data = 1, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const {
        data: { posts, lastPage },
      } = await axios.get(`https://mapi.looknote.co.kr/post?page=${data}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return { posts, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCody = createAsyncThunk(
  "cd/delete",
  async (data, thunkAPI) => {
    try {
      const { data: post } = await axios.delete(
        `https://mapi.looknote.co.kr/post`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "looknote_token"
            )}`,
          },
          data: {
            post_id: data,
          },
        }
      );
      return post;
    } catch (error) {
      console.log(error);
    }
  }
);

export const moveToVogue = createAsyncThunk(
  "cd/create/vogue",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: vogue } = await axios.post(
        `https://mapi.looknote.co.kr/post/vogue`,
        {
          post_id: data,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(vogue);
      return vogue;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteVogue = createAsyncThunk(
  "cd/delete/vogue",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: vogue } = await axios.delete(
        `https://mapi.looknote.co.kr/post/vogue`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          data: {
            post_id: data,
          },
        }
      );
      return vogue;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchCody = createAsyncThunk(
  "cd/cody/search",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/post/search/nickname`,
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

export const searchVogue = createAsyncThunk(
  "cd/vogue/search",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: res } = await axios.post(
        `https://mapi.looknote.co.kr/post/search/vogue`,
        {
          post_id: data,
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

export const getVogueList = createAsyncThunk(
  "cd/vogue/get",
  async (data = 1, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const {
        data: { vogues, lastPage },
      } = await axios.get(
        `https://mapi.looknote.co.kr/post/vogue?page=${data}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return { vogues, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getReportList = createAsyncThunk(
  "cd/report/get",
  async (data = 1, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const {
        data: { report, lastPage },
      } = await axios.get(
        `https://mapi.looknote.co.kr/post/report?page=${data}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return { reports: report, lastPage };
    } catch (error) {
      console.log(error);
    }
  }
);

export const patchCodyQuality = createAsyncThunk(
  "vg/quality",
  async (data, thunkAPI) => {
    try {
      const jwt = window.localStorage.getItem("looknote_token");
      const { data: post } = await axios.patch(
        `https://mapi.looknote.co.kr/post/vogue`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return post;
    } catch (error) {
      console.log(error);
    }
  }
);
