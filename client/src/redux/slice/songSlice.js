import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
    successMessage: null,
    isError: false,
    error: null,
  },
  reducers: {
    getSongsStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.successMessage = null;
    },
    onGetSongsSuccess: (state, action) => {
      state.songs = action.payload?.data;
      state.isLoading = false;
    },
    onGetSongsError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    createSongStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.successMessage = null;
    },
    onCreateSongSuccess: (state, action) => {
      state.songs.push(action.payload?.data);
      state.isLoading = false;
      state.successMessage = "Song created successfully";
    },
    onCreateSongError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    updateSongStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.successMessage = null;
    },
    onUpdateSongSuccess: (state, action) => {
      state.songs.map((song, index) => {
        if (song._id === action.payload?.data?._id) {
          state.songs[index] = action.payload?.data;
        }
      });
      state.isLoading = false;
      state.successMessage = "Song edited successfully";
    },
    onUpdateSongError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    deleteSongStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.successMessage = null;
    },
    onDeleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter(
        (song) => song._id !== action.payload?.data?._id
      );
      state.isLoading = false;
      state.successMessage = "Song deleted successfully";
    },
    onDeleteSongError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const {
  getSongsStart,
  onGetSongsSuccess,
  onGetSongsError,
  createSongStart,
  onCreateSongSuccess,
  onCreateSongError,
  updateSongStart,
  onUpdateSongSuccess,
  onUpdateSongError,
  deleteSongStart,
  onDeleteSongSuccess,
  onDeleteSongError,
} = songSlice.actions;

export default songSlice.reducer;
