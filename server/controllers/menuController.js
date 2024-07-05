const catchAsync = require("../utils/catchAsync");
const json = require("../data/pizzaMenus.json");

exports.getAllMenus = catchAsync(async (req, res, next) => {
  res.status(200).json({ status: "success", data: json.menu });
});
