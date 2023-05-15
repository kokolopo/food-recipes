import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "users/createUsers",
  async (postData) => {
    const response = await axios.post("http://localhost:4000/users", postData);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
