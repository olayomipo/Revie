
// src/routes/remark.routes.ts
import {Router} from "express";
import { createRemark, getAllRemarks, updateRemark, deleteRemark, getRemarkById } from "../controller/remark";

const remarkRouter = Router();

remarkRouter.get("/", getAllRemarks);
remarkRouter.get("/:id", getRemarkById);
remarkRouter.post("/", createRemark);
remarkRouter.put("/:id", updateRemark);
remarkRouter.delete("/:id", deleteRemark);

export default remarkRouter;