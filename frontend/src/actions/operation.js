import axios from "axios";
//   ! Actions
export const setOperationData = (operation) => ({
  type: "SET_OPERATION",
  operation,
});

export const fetchData = (operation) => ({
  type: "FETCH_DATA",
  operation,
});

export const startSetOperation = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/displayOperation")
      .then((response) => {
        dispatch(setOperationData(response.data));
      })
      .catch((e) => console.log(e));
  };
};
