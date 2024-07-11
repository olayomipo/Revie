"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/review.routes.ts
var express_1 = require("express");
var review_1 = require("../controller/review");
var reviewRouter = express_1.Router();
reviewRouter.get("/", review_1.getAllReviews);
reviewRouter.get("/:id", review_1.getReviewById);
reviewRouter.post("/", review_1.createReview);
reviewRouter.put("/:id", review_1.updateReview);
reviewRouter.delete("/:id", review_1.deleteReview);
exports.default = reviewRouter;
//# sourceMappingURL=review.js.map