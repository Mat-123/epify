// reducers.js

import { createReducer } from "@reduxjs/toolkit";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions/actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FETCH_DATA_REQUEST, (state) => {
      console.log("FETCH_DATA_REQUEST dispatched");
      state.loading = true;
      state.error = null;
    })
    .addCase(FETCH_DATA_SUCCESS, (state, action) => {
      console.log("FETCH_DATA_SUCCESS dispatched");
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(FETCH_DATA_FAILURE, (state, action) => {
      console.log("FETCH_DATA_FAILURE dispatched");
      state.loading = false;
      state.error = action.payload;
    });
});

export default dataReducer;
