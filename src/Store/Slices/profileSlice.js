import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    serUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken } = profileSlice.actions;
export default profileSlice.reducer;
