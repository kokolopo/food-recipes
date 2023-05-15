import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ perPage = 8, page = 1, title = "" }) => {
    const response = await axios.get(`http://localhost:4000/recipes`, {
      params: {
        perPage,
        page,
        title,
      },
    });
    return response.data.data;
  }
);

export const postData = createAsyncThunk(
  "recipes/createRecipes",
  async (postData) => {
    const response = await axios.post(
      "http://localhost:4000/recipes",
      postData
    );
    return response.data;
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
    keyword: "",
  },
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    search: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { nextPage, prevPage, search } = recipesSlice.actions;

export default recipesSlice.reducer;
