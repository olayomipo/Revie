
// src/routes/review.routes.ts
import {Router} from "express";
import { createReview, getAllReviews, updateReview, deleteReview, getReviewById } from "../controller/review";

const reviewRouter = Router();

reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:id", getReviewById);
reviewRouter.post("/", createReview);
reviewRouter.put("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);

export default reviewRouter;