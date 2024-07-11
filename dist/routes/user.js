"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.routes.ts
var express_1 = require("express");
var user_1 = require("../controller/user");
var userRouter = express_1.Router();
var express_validator_1 = require("express-validator");
var createValidator = [
    express_validator_1.body('username', 'username does not Empty').not().isEmpty(),
    express_validator_1.body('email', 'Invalid email').isEmail(),
    express_validator_1.body('password', 'password does not Empty').not().isEmpty(),
    express_validator_1.body('password', 'The minimum password length is 6 characters').isLength({ min: 6 }),
];
var loginValidator = [
    express_validator_1.body('email', 'Invalid email').isEmail(),
    express_validator_1.body('password', 'password does not Empty').not().isEmpty(),
];
userRouter.post("/register", createValidator, user_1.createUser);
userRouter.post("/login", loginValidator, user_1.LoginUser);
userRouter.get("/", user_1.getAllUsers);
userRouter.put("/:id", user_1.updateUser);
userRouter.delete("/:id", user_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user.js.map