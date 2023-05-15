import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetail = createAsyncThunk(
  "recipes/fetchDetail",
  async ({ recipeId, jwtToken }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/recipes/${recipeId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateRecipe = createAsyncThunk(
  "recipes/updateRecipe",
  async ({ recipeId, jwtToken, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/recipes/${recipeId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const detailRecipeSlice = createSlice({
  name: "detail",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default detailRecipeSlice.reducer;
