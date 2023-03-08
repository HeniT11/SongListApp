import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./redux/slice/songSlice";
import { rootSaga } from "./redux/saga";
import songState from "./redux/slice/songState";
import statReducer from "./redux/slice/statSlice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: songReducer,
    song: songState,
    stats: statReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
