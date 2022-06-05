let result_date = (days) => {
  let addDays = require("date-fns/addDays");
  let result = addDays(new Date("2020-08-22"), days);
  return `${result.getdate()}-${result.getMonth()+1}-${result.getFullYear()}`;
};

module.exports = result_date;
