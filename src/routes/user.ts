
// src/routes/user.routes.ts
import {Router} from "express";
import { createUser, LoginUser,  getAllUsers, updateUser, deleteUser } from "../controller/user";

const userRouter = Router();

import {body} from 'express-validator'

const createValidator = [
    body('username', 'username does not Empty').not().isEmpty(),
    body('email', 'Invalid email').isEmail(),
    body('password', 'password does not Empty').not().isEmpty(),
    body('password', 'The minimum password length is 6 characters').isLength({min: 6}),
]

const loginValidator = [
    body('email', 'Invalid email').isEmail(),
    body('password', 'password does not Empty').not().isEmpty(),
]


userRouter.post("/register",createValidator, createUser);
userRouter.post("/login",loginValidator, LoginUser);
userRouter.get("/", getAllUsers);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
