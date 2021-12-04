import axios from "axios";
// ? auxiliaireReducer

const defaultData = [];

const auxiliaireReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "SET_AUXILIAIRE":
      [...state, ...action.auxiliaire];
    case "ADD_AUXILIAIRE":
      return action.auxiliaire;
    default:
      return state;
  }
};

// export const saveAuxiliaire = () => async (dispatch, getState) => {
//   const auxiliaire = getState().auxiliaire;
//   axios.post("http://localhost:3009/addAuxiliair", data).then(
//     (response) => {
//       alert(response.data);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// };

export const startSetInfo = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3009/displayLiaison")
      .then((response) => {
        dispatch(setInfoData(response.data));
      })
      .catch((e) => console.log(e));
  };
};

export default auxiliaireReducer;
