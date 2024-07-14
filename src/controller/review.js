
const {getRepository} = require("typeorm");
const Review = require("../models/review");


const getReviewById = async (req, res) => {
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

const getReviewByApartmentId = async (req, res) => {
    try {
        const apartmentId = req.params.id;
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

const getAllReviews = async (req, res) => {
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

const createReview = async (req, res) => {
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

const updateReview = async (req, res) => {
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

const deleteReview = async (req, res) => {
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

module.exports = { getAllReviews,
    getReviewById,
     createReview,
      updateReview,
       deleteReview};