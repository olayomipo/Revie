
const { Router } = require("express");
const { createReview, getAllReviews, updateReview, deleteReview, getReviewById } = require("../controller/review");


const reviewRouter = Router();

reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:id", getReviewById);
reviewRouter.post("/", createReview);
reviewRouter.put("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);

module.exports = reviewRouter;