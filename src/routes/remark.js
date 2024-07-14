
const { Router } = require("express");
const { createRemark, getAllRemarks, updateRemark, deleteRemark, getRemarkById  } = require("../controller/remark");

const remarkRouter = Router();

remarkRouter.get("/", getAllRemarks);
remarkRouter.get("/:id", getRemarkById);
remarkRouter.post("/", createRemark);
remarkRouter.put("/:id", updateRemark);
remarkRouter.delete("/:id", deleteRemark);

module.exports = remarkRouter;