import { put, takeEvery } from "redux-saga/effects";
import {
  getTotalAlbums,
  getTotalArtists,
  getTotalArtistSongs,
  getTotalGenres,
  getTotalSongs,
  getTotalSongsInAlbums,
  getTotalSongsInGenres,
} from "../axios";
import {
  getStatsStart,
  onGetStatsError,
  onGetStatsSuccess,
} from "../slice/statSlice";
import { GET_STATS } from "./types";

function* getStatsSaga() {
  try {
    yield put(getStatsStart());
    console.log("calls");
    const totalSongs = yield getTotalSongs();
    const totalArtists = yield getTotalArtists();
    const totalArtistSongs = yield getTotalArtistSongs();
    const totalGenres = yield getTotalGenres();
    const totalSongsInGenres = yield getTotalSongsInGenres();
    const totalAlbums = yield getTotalAlbums();
    const totalSongsInAlbums = yield getTotalSongsInAlbums();
    const stats = {
      totalSongs: totalSongs.data,
      totalArtists: totalArtists.data,
      totalArtistSongs: totalArtistSongs.data,
      totalGenres: totalGenres.data,
      totalSongsInGenres: totalSongsInGenres.data,
      totalAlbums: totalAlbums.data,
      totalSongsInAlbums: totalSongsInAlbums.data,
    };
    yield put(onGetStatsSuccess(stats));
  } catch (err) {
    yield put(onGetStatsError(err));
  }
}
export function* statSaga() {
  yield takeEvery(GET_STATS, getStatsSaga);
}
