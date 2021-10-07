import moment from "moment";
// ? filters Reducers
const filterReducer = (
  state = {
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  },
  action
) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "month",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default filterReducer;
