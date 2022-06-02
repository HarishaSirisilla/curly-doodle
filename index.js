const result_date = (no_of_days) => {
  let addDays = require("date-fns/addDays");
  let result = addDays(new Date("22-08-2020"), no_of_days);
  return result;
};

let no_of_days = JSON.parse(readLine());
let result = result_date(no_of_days);

module.exports = result;
