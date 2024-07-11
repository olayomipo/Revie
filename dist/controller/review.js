"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getAllReviews = exports.getReviewById = void 0;
const typeorm_1 = require("typeorm");
const Review_1 = require("../entity/Review");
exports.getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        const reviewRepository = typeorm_1.getRepository(Review_1.Review);
        const review = yield reviewRepository.findOne(reviewId);
        if (!review) {
            res.status(404).json({ error: "Review not found" });
        }
        else {
            res.status(200).json(review);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching review" });
    }
});
exports.getAllReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        const reviewRepository = typeorm_1.getRepository(Review_1.Review);
        const review = yield reviewRepository.findOne(reviewId);
        if (!review) {
            res.status(404).json({ error: "Review not found" });
        }
        else {
            res.status(200).json(review);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching review" });
    }
});
exports.createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = req.body;
        const reviewRepository = typeorm_1.getRepository(Review_1.Review);
        const savedItem = yield reviewRepository.save(newItem);
        res.status(201).json({
            "message": "Review created successfully",
            "review_id": savedItem['id']
        });
    }
    catch (error) {
        res.status(500).json({ error: "Error creating Review" });
    }
});
exports.updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        const updatedData = req.body;
        const reviewRepository = typeorm_1.getRepository(Review_1.Review);
        const existingReview = yield reviewRepository.findOne(reviewId);
        if (!existingReview) {
            res.status(404).json({ error: "Review not found" });
        }
        else {
            const updatedReview = Object.assign(Object.assign({}, existingReview), updatedData);
            yield reviewRepository.save(updatedReview);
            res.status(200).json(updatedReview);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating review" });
    }
});
exports.deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewId = req.params.id;
        const reviewRepository = typeorm_1.getRepository(Review_1.Review);
        const existingReview = yield reviewRepository.findOne(reviewId);
        if (!existingReview) {
            res.status(404).json({ error: "Review not found" });
        }
        else {
            yield reviewRepository.remove(existingReview);
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting review" });
    }
});
//# sourceMappingURL=review.js.map