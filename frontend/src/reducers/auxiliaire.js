// ? auxiliaireReducer

const defaultData = [];

const auxiliaireReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "SET_AUXILIAIRE":
      return [...state, ...action.auxiliaire];
    case "ADD_AUXILIAIRE":
      return action.auxiliaire;
    default:
      return state;
  }
};

export default auxiliaireReducer;
