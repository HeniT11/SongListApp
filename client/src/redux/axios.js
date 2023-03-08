import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getSongs = async (payload) =>
  axios.get("/api/song", { params: { [payload?.name]: payload?.value } });
export const getSong = async (id) => axios.get(`/api/song/${id}`);
export const createSong = async (song) => axios.post("/api/song", song);
export const updateSong = async (id, song) =>
  axios.patch(`/api/song/${id}`, song);
export const deleteSong = async (id) => axios.delete(`/api/song/${id}`);

export const getTotalSongs = async () => axios.get("/api/stats/songs/total");
export const getTotalArtists = async () =>
  axios.get("/api/stats/artists/total");
export const getTotalArtistSongs = async () =>
  axios.get("/api/stats/artists/songs/total");
export const getTotalGenres = async () => axios.get("/api/stats/genres/total");
export const getTotalSongsInGenres = async () =>
  axios.get("/api/stats/genres/songs/total");
export const getTotalAlbums = async () => axios.get("/api/stats/albums/total");
export const getTotalSongsInAlbums = async () =>
  axios.get("/api/stats/albums/songs/total");
