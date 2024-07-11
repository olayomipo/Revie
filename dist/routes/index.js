"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const apartment_1 = __importDefault(require("./apartment"));
const review_1 = __importDefault(require("./review"));
const remark_1 = __importDefault(require("./remark"));
const mainRouter = express_1.Router();
mainRouter.use("/user", user_1.default);
mainRouter.use("/apartment", apartment_1.default);
mainRouter.use("/review", review_1.default);
mainRouter.use("/remark", remark_1.default);
// mainRouter.use("/auth", reviewRouter);
exports.default = mainRouter;
//# sourceMappingURL=index.js.map