import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    message: null,
  },
  reducers: {
    addSuccessRegist: (state) => {
      state.message = "Berhasil membuat akun baru, silahkan login!";
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addSuccessRegist } = registerSlice.actions;

export default registerSlice.reducer;
