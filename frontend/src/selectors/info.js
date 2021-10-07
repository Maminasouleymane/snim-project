//   ! get visible (show only data that we want)
import moment from "moment";

export default (data, { text, startDate, endDate }) => {
  return data.filter((obj) => {
    const createdAtMoment = moment(obj.date, "DD-MM-YYYY").format("MM-DD-YYYY");
    const startDateMatch = startDate
      ? startDate.isSameOrBefore(createdAtMoment, "day")
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(createdAtMoment, "day")
      : true;

    // const textMatch = obj.numero.includes(text);
    return startDateMatch && endDateMatch;
  });
};
