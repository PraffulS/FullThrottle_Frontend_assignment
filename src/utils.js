import moment from "moment";

export const group_by_date = array => {
  return groupBy(array, element =>
    moment(element.start_time, "MMM D YYYY HH:mmA").format("Do MMM YYYY")
  );
};

export const groupBy = (list, f) => {
  return list.reduce(
    (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );
};
