
// src/routes/index.ts
import {Router} from "express";
import userRouter from "./user";
import apartmentRouter from "./apartment";
import reviewRouter from "./review";
import remarkRouter from "./remark";

const mainRouter = Router();



mainRouter.use("/user", userRouter);
mainRouter.use("/apartment", apartmentRouter);
mainRouter.use("/review", reviewRouter);
mainRouter.use("/remark", remarkRouter);

// mainRouter.use("/auth", reviewRouter);

export default mainRouter;
