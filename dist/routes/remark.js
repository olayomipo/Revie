"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/remark.routes.ts
var express_1 = require("express");
var remark_1 = require("../controller/remark");
var remarkRouter = express_1.Router();
remarkRouter.get("/", remark_1.getAllRemarks);
remarkRouter.get("/:id", remark_1.getRemarkById);
remarkRouter.post("/", remark_1.createRemark);
remarkRouter.put("/:id", remark_1.updateRemark);
remarkRouter.delete("/:id", remark_1.deleteRemark);
exports.default = remarkRouter;
//# sourceMappingURL=remark.js.map