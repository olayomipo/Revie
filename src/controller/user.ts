import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {validationResult} from 'express-validator'


export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        // const userId = req.params.id;
        const userRepository = getRepository(User);
        const user = await userRepository.find();
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
};


export const LoginUser = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            // in case request params meet the validation criteria
                const userRepository = getRepository(User);
                const savedUser = await userRepository.findOne(req.body);
                res.status(201).json({
                    "message": "Login successful",
                    "user_id": savedUser['id'],
                    "access_token": "your_access_token_here"
                });
        }

        res.status(422).json({errors: errors.array()})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error creating User" });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            // in case request params meet the validation criteria
                const userRepository = getRepository(User);
                const savedUser = await userRepository.save(req.body);
                res.status(201).json({
                    "message": "User registered successfully",
                    "user_Id": savedUser['id']});
        }

        res.status(422).json({errors: errors.array()})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error creating User" });
    }
};



export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const userRepository = getRepository(User);
        const existingUser = await userRepository.findOne(userId);
        if (!existingUser) {
            res.status(404).json({ error: "User not found" });
        } else {
            const updatedUser = { ...existingUser, ...updatedData };
            await userRepository.save(updatedUser);
            res.status(200).json(updatedUser);
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating user" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userRepository = getRepository(User);
        const existingUser = await userRepository.findOne(userId);
        if (!existingUser) {
            res.status(404).json({ error: "User not found" });
        } else {
            await userRepository.remove(existingUser);
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
};
