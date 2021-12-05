import axios from "axios";
//   ! Actions

// ! set Auxi
export const setAuxiliaireData = (auxiliaire) => ({
  type: "SET_AUXILIAIRE",
  playload: auxiliaire,
});

export const fetchData = (auxiliaire) => ({
  type: "FETCH_DATA",
  auxiliaire,
});

export const startSetAuxiliaire = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/auxliair")
      .then((response) => {
        dispatch(setAuxiliaireData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
