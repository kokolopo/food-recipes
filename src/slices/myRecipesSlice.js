import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMyRecipes = createAsyncThunk(
  "recipes/myRecipes",
  async ({ jwtToken }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:4000/myrecipes`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async ({ jwtToken, recipeId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/recipes/${recipeId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          withCredentials: true,
        }
      );

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const MyRecipeSlice = createSlice({
  name: "myrecipes",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMyRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRecipe.fulfilled, (state) => {
        state.loading = false;
        state.data = [];
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default MyRecipeSlice.reducer;
