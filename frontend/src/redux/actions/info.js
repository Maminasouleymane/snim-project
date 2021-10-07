import axios from "axios";
//   ! Actions
export const setInfoData = (info) => ({
  type: "SET_INFO",
  info,
});

export const set
export const fetchData = (info) => ({
  type: "FETCH_DATA",
  info,
});

export const startSetInfo = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/laison_sml_somelec")
      .then((response) => {
        console.log(response.data);
        dispatch(setInfoData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
