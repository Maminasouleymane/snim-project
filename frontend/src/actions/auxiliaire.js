import axios from "axios";
//   ! Actions
export const setAuxiliaireData = (auxiliaire) => ({
  type: "SET_AUXILIAIRE",
  auxiliaire,
});

export const fetchData = (auxiliaire) => ({
  type: "FETCH_DATA",
  auxiliaire,
});

export const startSetAuxiliaire = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/get_auxilier")
      .then((response) => {
        dispatch(setAuxiliaireData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
