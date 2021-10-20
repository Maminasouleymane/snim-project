import axios from "axios";
//   ! Actions
export const setArretData = (arret) => ({
  type: "SET_ARRET",
  arret,
});

export const fetchData = (arret) => ({
  type: "FETCH_DATA",
  arret,
});

export const startSetArret = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/displayArret")
      .then((response) => {
        dispatch(setArretData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
