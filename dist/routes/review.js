"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/review.routes.ts
const express_1 = require("express");
const review_1 = require("../controller/review");
const reviewRouter = express_1.Router();
reviewRouter.get("/", review_1.getAllReviews);
reviewRouter.get("/:id", review_1.getReviewById);
reviewRouter.post("/", review_1.createReview);
reviewRouter.put("/:id", review_1.updateReview);
reviewRouter.delete("/:id", review_1.deleteReview);
exports.default = reviewRouter;
//# sourceMappingURL=review.js.map