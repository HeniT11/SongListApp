import { createSlice } from "@reduxjs/toolkit";

export const statSlice = createSlice({
  name: "stats",
  initialState: {
    stats: {},
    isLoading: false,
    successMessage: null,
    isError: false,
    error: null,
  },
  reducers: {
    getStatsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.successMessage = null;
    },
    onGetStatsSuccess: (state, action) => {
      state.stats = action.payload;
      state.isLoading = false;
    },
    onGetStatsError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { getStatsStart, onGetStatsSuccess, onGetStatsError } =
  statSlice.actions;

export default statSlice.reducer;
