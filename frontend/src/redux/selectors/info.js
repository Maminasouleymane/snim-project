//   ! get visible (show only data that we want)
import moment from "moment";

export default (data, { sortBy, startDate, endDate }) => {
  return data.filter((obj) => {
    const createdAtMoment = moment(obj.date, "DD-MM-YYYY").format("MM-DD-YYYY");
    console.log(startDate);
    // console.log(createdAtMoment.isSameOrBefore("31/08/2021"));
    // console.log(createdAtMoment.isSameOrAfter("31/08/2021"));
    const startDateMatch = startDate
      ? startDate.isSameOrBefore(createdAtMoment, "day")
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(createdAtMoment, "day")
      : true;
    // console.log(startDateMatch, endDateMatch);
    return startDateMatch && endDateMatch;
  });
};
