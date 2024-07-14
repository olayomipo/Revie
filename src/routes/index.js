

const { Router } = require("express");

const userRouter = require("./user")
const apartmentRouter = require("./apartment");
const reviewRouter = require("./review");
const remarkRouter = require("./remark");
// const authRouter = require("./auth");

const mainRouter = Router();



mainRouter.use("/user", userRouter);
mainRouter.use("/apartment", apartmentRouter);
mainRouter.use("/review", reviewRouter);
mainRouter.use("/remark", remarkRouter);

// mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
