// actions.js

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequestAction = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccessAction = (data) => {
  console.log("fetchDataSuccessAction:", data);
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailureAction = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
