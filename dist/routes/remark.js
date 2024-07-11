"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/remark.routes.ts
const express_1 = require("express");
const remark_1 = require("../controller/remark");
const remarkRouter = express_1.Router();
remarkRouter.get("/", remark_1.getAllRemarks);
remarkRouter.get("/:id", remark_1.getRemarkById);
remarkRouter.post("/", remark_1.createRemark);
remarkRouter.put("/:id", remark_1.updateRemark);
remarkRouter.delete("/:id", remark_1.deleteRemark);
exports.default = remarkRouter;
//# sourceMappingURL=remark.js.map