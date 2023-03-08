import { put, takeEvery } from "redux-saga/effects";
import { createSong, deleteSong, getSongs, updateSong } from "../axios";
import {
  createSongStart,
  deleteSongStart,
  getSongsStart,
  onCreateSongError,
  onCreateSongSuccess,
  onDeleteSongError,
  onDeleteSongSuccess,
  onGetSongsError,
  onGetSongsSuccess,
  onUpdateSongError,
  onUpdateSongSuccess,
  updateSongStart,
} from "../slice/songSlice";
import { CREATE_SONG, DELETE_SONG, GET_SONGS, UPDATE_SONG } from "./types";

function* getSongsSaga({ payload }) {
  try {
    yield put(getSongsStart());
    const songs = yield getSongs(payload);
    yield put(onGetSongsSuccess(songs));
  } catch (err) {
    yield put(onGetSongsError(err));
  }
}

function* createSongSaga({ payload }) {
  try {
    yield put(createSongStart());
    const song = yield createSong(payload);
    yield put(onCreateSongSuccess(song));
  } catch (err) {
    yield put(onCreateSongError(err));
  }
}

function* updateSongSaga({ payload }) {
  try {
    console.log({ payload });
    yield put(updateSongStart());
    const song = yield updateSong(payload?.id, payload?.data);
    yield put(onUpdateSongSuccess(song));
  } catch (err) {
    console.log({ err });
    yield put(onUpdateSongError(err));
  }
}

function* deleteSongSaga({ payload }) {
  try {
    yield put(deleteSongStart());
    const song = yield deleteSong(payload);
    yield put(onDeleteSongSuccess(song));
  } catch (err) {
    yield put(onDeleteSongError(err));
  }
}

export function* songSaga() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(UPDATE_SONG, updateSongSaga);
  yield takeEvery(DELETE_SONG, deleteSongSaga);
}
