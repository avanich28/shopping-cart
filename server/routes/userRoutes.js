const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/current-user/:token", authController.isLoggedIn);

router.post("/sign-up", authController.signup);

router.post("/log-in", authController.login);

router.post("/forget-password", authController.forgetPassword);

router.patch("/reset-password/:token", authController.resetPassword);

router
  .route("/me")
  .get(authController.protect, userController.getProfile)
  .patch(authController.protect, userController.updateProfile);

router.patch(
  "/update-my-password",
  authController.protect,
  authController.updatePassword
);

router
  .route("/delivery/:token")
  .get(authController.protect, userController.getAllDeliveries)
  .post(authController.protect, userController.addDelivery);

module.exports = router;
