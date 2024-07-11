"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
var user_1 = require("./user");
var apartment_1 = require("./apartment");
var review_1 = require("./review");
var remark_1 = require("./remark");
var mainRouter = express_1.Router();
mainRouter.use("/user", user_1.default);
mainRouter.use("/apartment", apartment_1.default);
mainRouter.use("/review", review_1.default);
mainRouter.use("/remark", remark_1.default);
// mainRouter.use("/auth", reviewRouter);
exports.default = mainRouter;
//# sourceMappingURL=index.js.map