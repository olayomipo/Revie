import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Review } from "../entity/Review";


export const getReviewById = async (req: Request, res: Response) => {
    try {
        const reviewId = req.params.id;
        const reviewRepository = getRepository(Review);
        const review = await reviewRepository.findOne(reviewId);
        if (!review) {
            res.status(404).json({ error: "Review not found" });
        } else {
            res.status(200).json(review);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching review" });
    }
};

export const getAllReviews = async (req: Request, res: Response) => {
    try {
        const reviewId = req.params.id;
        const reviewRepository = getRepository(Review);
        const review = await reviewRepository.findOne(reviewId);
        if (!review) {
            res.status(404).json({ error: "Review not found" });
        } else {
            res.status(200).json(review);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching review" });
    }
};

export const createReview = async (req: Request, res: Response) => {
    try {
        const newItem = req.body;
        const reviewRepository = getRepository(Review);
        const savedItem = await reviewRepository.save(newItem);
        
        res.status(201).json({
            "message": "Review created successfully",
            "review_id": savedItem['id']
          });
    } catch (error) {
        res.status(500).json({ error: "Error creating Review" });
    }
};

export const updateReview = async (req: Request, res: Response) => {
    try {
        const reviewId = req.params.id;
        const updatedData = req.body;
        const reviewRepository = getRepository(Review);
        const existingReview = await reviewRepository.findOne(reviewId);
        if (!existingReview) {
            res.status(404).json({ error: "Review not found" });
        } else {
            const updatedReview = { ...existingReview, ...updatedData };
            await reviewRepository.save(updatedReview);
            res.status(200).json(updatedReview);
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating review" });
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const reviewId = req.params.id;
        const reviewRepository = getRepository(Review);
        const existingReview = await reviewRepository.findOne(reviewId);
        if (!existingReview) {
            res.status(404).json({ error: "Review not found" });
        } else {
            await reviewRepository.remove(existingReview);
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting review" });
    }
};

