// ? infoReducer
const defaultData = [
  {
    date: "20/08/2021",
    consomateur: "snim",
    ea_d: 340606,
    er_d: 370652,
    ea_f: 340774,
    er_f: 370662,
    ea: 16800,
    er: 1000,
  },
];
const infoReducer = (state = defaultData, action) => {
  switch (action.type) {
    case "SET_INFO":
      return [...state, ...action.info];
    case "ADD_INFO":
      return action.info;
    default:
      return state;
  }
};

export default infoReducer;
