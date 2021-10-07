const initialState = [];

const groupeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GROUPE":
      return [...state, ...action.groupe];
    case "FILTER_GROUPE":
      return state.filter(({ numero }) => numero === action.numero);
    case "ADD_GROUPE":
      return action.groupe;
    default:
      return state;
  }
};

export default groupeReducer;
