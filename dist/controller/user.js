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
exports.deleteUser = exports.updateUser = exports.createUser = exports.LoginUser = exports.getAllUsers = exports.getUserById = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const express_validator_1 = require("express-validator");
exports.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const userRepository = typeorm_1.getRepository(User_1.User);
        const user = yield userRepository.findOne(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
        }
        else {
            res.status(200).json(user);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
});
exports.getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const userId = req.params.id;
        const userRepository = typeorm_1.getRepository(User_1.User);
        const user = yield userRepository.find();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
});
exports.LoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = express_validator_1.validationResult(req);
        if (errors.isEmpty()) {
            // in case request params meet the validation criteria
            const userRepository = typeorm_1.getRepository(User_1.User);
            const savedUser = yield userRepository.findOne(req.body);
            res.status(201).json({
                "message": "Login successful",
                "user_id": savedUser['id'],
                "access_token": "your_access_token_here"
            });
        }
        res.status(422).json({ errors: errors.array() });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error creating User" });
    }
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = express_validator_1.validationResult(req);
        if (errors.isEmpty()) {
            // in case request params meet the validation criteria
            const userRepository = typeorm_1.getRepository(User_1.User);
            const savedUser = yield userRepository.save(req.body);
            res.status(201).json({
                "message": "User registered successfully",
                "user_Id": savedUser['id']
            });
        }
        res.status(422).json({ errors: errors.array() });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error creating User" });
    }
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const userRepository = typeorm_1.getRepository(User_1.User);
        const existingUser = yield userRepository.findOne(userId);
        if (!existingUser) {
            res.status(404).json({ error: "User not found" });
        }
        else {
            const updatedUser = Object.assign(Object.assign({}, existingUser), updatedData);
            yield userRepository.save(updatedUser);
            res.status(200).json(updatedUser);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating user" });
    }
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const userRepository = typeorm_1.getRepository(User_1.User);
        const existingUser = yield userRepository.findOne(userId);
        if (!existingUser) {
            res.status(404).json({ error: "User not found" });
        }
        else {
            yield userRepository.remove(existingUser);
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
});
//# sourceMappingURL=user.js.map