import axios from "axios";
//   ! Actions
export const setInfoData = (info) => ({
  type: "SET_INFO",
  info,
});

export const fetchData = (info) => ({
  type: "FETCH_DATA",
  info,
});

export const startSetInfo = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/liaison")
      .then((response) => {
        dispatch(setInfoData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
