export const GET_SONG = "GET_SONG";

export const getSong = (data) => {
  return {
    type: GET_SONG,
    payload: data,
  };
};
