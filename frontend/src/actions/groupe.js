import axios from "axios";
//   ! Actions
export const setGroupeData = (groupe) => ({
  type: "SET_GROUPE",
  groupe,
});

export const sendGroupe = (groupes) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3009/addGroupe", groupes)
      .then((response) => {
        dispatch(setGroupeData(groupes));
        window.confirm(response.data);
      })
      .catch((e) => console.log(e));
  };
};

export const filterGroupe = ({ numero = "GR3" } = {}) => ({
  type: "FILTER_GROUPE",
  numero,
});

export const fetchData = (groupe) => ({
  type: "FETCH_DATA",
  groupe,
});

export const startSetGroupe = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/displayGroupe")
      .then((response) => {
        dispatch(setGroupeData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
