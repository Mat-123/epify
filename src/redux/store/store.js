import SelectedSongReducer from "../reducers/reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: SelectedSongReducer,
});

export default store;
