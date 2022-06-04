let result_date = (no_of_days) => {
  let addDays = require("date-fns/addDays");
  let result = addDays(new Date("2020-08-22"), no_of_days);
  return result;
};

let no_of_days = 10;
let result = result_date(no_of_days);

module.exports = result;
