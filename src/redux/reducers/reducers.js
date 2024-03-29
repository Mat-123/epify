// reducers.js

import { GET_SONG } from "../actions/actions";

const initialState = {
  data: null,
};

const SelectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default SelectedSongReducer;
