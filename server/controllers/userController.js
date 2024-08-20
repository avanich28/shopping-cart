const Delivery = require("../models/deliveryModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new AppError("User data is not founded.", 401));
  }
  res.status(200).json({ status: "success", data: user });
});

exports.updateProfile = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new AppError("User data is not founded.", 401));
  }
  res.status(200).json({ status: "success", data: user });
});

// DELIVERY
exports.getAllDeliveries = catchAsync(async (req, res, next) => {
  const filter = {};
  const data = await Delivery.find(filter);
  if (!data) {
    return next(new AppError("Delivery data is not founded.", 401));
  }
  res.status(200).json({ status: "success", data });
});

exports.addDelivery = catchAsync(async (req, res, next) => {
  const data = await Delivery.create({ user: req.user.id, ...req.body });

  console.log(data);
  res.status(201).json({ status: "success", data });
});

// exports.getDelivery = catchAsync(async (req, res, next) => {
//   const data = await Delivery.findOne({ user: req.user.id });

//   if (!data) {
//     return next(new AppError("Delivery data is not founded.", 401));
//   }
//   res.status(200).json({ status: "success", data });
// });
