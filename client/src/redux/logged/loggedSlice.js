import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loggedSlice = createSlice({
  name: "isLogged",
  initialState,
  reducers: {
    isLogged: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isLogged } = loggedSlice.actions;

export default loggedSlice.reducer;


