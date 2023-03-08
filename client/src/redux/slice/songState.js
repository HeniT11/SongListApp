import { createSlice } from "@reduxjs/toolkit";

export const songState = createSlice({
  name: "song",
  initialState: {
    song: {},
  },
  reducers: {
    setSongState: (state, action) => {
      state.song = action.payload;
    },
  },
});

export const { setSongState } = songState.actions;
export default songState.reducer;
