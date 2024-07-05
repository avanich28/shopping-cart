const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/sign-up", authController.signup);

router.post("/log-in", authController.login);

router.post("/forget-password", authController.forgetPassword);

router.patch("/reset-password/:token", authController.resetPassword);

router.use(authController.protect);

router
  .route("/me")
  .get(userController.getProfile)
  .patch(userController.updateProfile);

router.patch("/update-my-password", authController.updatePassword);

router
  .route("/delivery")
  .get(userController.getAllDeliveries)
  .post(userController.addDelivery);

module.exports = router;
