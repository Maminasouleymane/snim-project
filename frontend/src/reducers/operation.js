// ? auxiliaireReducer

const defaultData = [];

const operationReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "SET_OPERATION":
      return [...state, ...action.operation];
    case "ADD_OPERATION":
      return action.operation;
    default:
      return state;
  }
};

export default operationReducer;
