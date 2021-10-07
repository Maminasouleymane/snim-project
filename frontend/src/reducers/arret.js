// ? arretReducer
const defaultData = [];
const arretReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "SET_ARRET":
      return [...state, ...action.arret];
    case "ADD_ARRET":
      return action.arret;
    default:
      return state;
  }
};

export default arretReducer;
