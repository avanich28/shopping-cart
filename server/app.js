const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const menuRouter = require("./routes/menuRoutes");

const AppError = require("./utils/appError");

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
