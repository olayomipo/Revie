"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.LoginUser = exports.getAllUsers = exports.getUserById = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../entity/User");
var express_validator_1 = require("express-validator");
exports.getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userRepository, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.params.id;
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    res.status(404).json({ error: "User not found" });
                }
                else {
                    res.status(200).json(user);
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ error: "Error fetching user" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepository, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.find()];
            case 1:
                user = _a.sent();
                res.status(200).json(user);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ error: "Error fetching user" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.LoginUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, userRepository, savedUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) return [3 /*break*/, 2];
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne(req.body)];
            case 1:
                savedUser = _a.sent();
                res.status(201).json({
                    "message": "Login successful",
                    "user_id": savedUser['id'],
                    "access_token": "your_access_token_here"
                });
                _a.label = 2;
            case 2:
                res.status(422).json({ errors: errors.array() });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).json({ error: "Error creating User" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, userRepository, savedUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) return [3 /*break*/, 2];
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.save(req.body)];
            case 1:
                savedUser = _a.sent();
                res.status(201).json({
                    "message": "User registered successfully",
                    "user_Id": savedUser['id']
                });
                _a.label = 2;
            case 2:
                res.status(422).json({ errors: errors.array() });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                res.status(500).json({ error: "Error creating User" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, updatedData, userRepository, existingUser, updatedUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                userId = req.params.id;
                updatedData = req.body;
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne(userId)];
            case 1:
                existingUser = _a.sent();
                if (!!existingUser) return [3 /*break*/, 2];
                res.status(404).json({ error: "User not found" });
                return [3 /*break*/, 4];
            case 2:
                updatedUser = __assign(__assign({}, existingUser), updatedData);
                return [4 /*yield*/, userRepository.save(updatedUser)];
            case 3:
                _a.sent();
                res.status(200).json(updatedUser);
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                res.status(500).json({ error: "Error updating user" });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userRepository, existingUser, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                userId = req.params.id;
                userRepository = typeorm_1.getRepository(User_1.User);
                return [4 /*yield*/, userRepository.findOne(userId)];
            case 1:
                existingUser = _a.sent();
                if (!!existingUser) return [3 /*break*/, 2];
                res.status(404).json({ error: "User not found" });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, userRepository.remove(existingUser)];
            case 3:
                _a.sent();
                res.status(204).send();
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_6 = _a.sent();
                res.status(500).json({ error: "Error deleting user" });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=user.js.map