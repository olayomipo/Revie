import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Remark } from "../entity/Remark";


export const getRemarkById = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = getRepository(Remark);
        const apartment = await apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            res.status(200).json(apartment);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
};

export const getAllRemarks = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = getRepository(Remark);
        const apartment = await apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            res.status(200).json(apartment);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
};

export const createRemark = async (req: Request, res: Response) => {
    try {
        const newItem = req.body;
        const apartmentRepository = getRepository(Remark);
        const savedItem = await apartmentRepository.save(newItem);
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: "Error creating Remark" });
    }
};

export const updateRemark = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const updatedData = req.body;
        const apartmentRepository = getRepository(Remark);
        const existingRemark = await apartmentRepository.findOne(apartmentId);
        if (!existingRemark) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            const updatedRemark = { ...existingRemark, ...updatedData };
            await apartmentRepository.save(updatedRemark);
            res.status(200).json(updatedRemark);
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating apartment" });
    }
};

export const deleteRemark = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = getRepository(Remark);
        const existingRemark = await apartmentRepository.findOne(apartmentId);
        if (!existingRemark) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            await apartmentRepository.remove(existingRemark);
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting apartment" });
    }
};

