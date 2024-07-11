import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Apartment } from "../entity/Apartment";


export const getApartmentById = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = getRepository(Apartment);
        const apartment = await apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Apartment not found" });
        } else {
            res.status(200).json(apartment);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
};

export const getApartment = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = getRepository(Apartment);
        const apartment = await apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Apartment not found" });
        } else {
            res.status(200).json(apartment);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
};

export const createApartment = async (req: Request, res: Response) => {
    try {
        const newItem = req.body;
        const apartmentRepository = getRepository(Apartment);
        const savedItem = await apartmentRepository.save(newItem);
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: "Error creating Apartment" });
    }
};

export const updateApartment = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const updatedData = req.body;
        const apartmentRepository = getRepository(Apartment);
        const existingApartment = await apartmentRepository.findOne(apartmentId);
        if (!existingApartment) {
            res.status(404).json({ error: "Apartment not found" });
        } else {
            const updatedApartment = { ...existingApartment, ...updatedData };
            await apartmentRepository.save(updatedApartment);
            res.status(200).json(updatedApartment);
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating apartment" });
    }
};

export const deleteApartment = async (req: Request, res: Response) => {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = getRepository(Apartment);
        const existingApartment = await apartmentRepository.findOne(apartmentId);
        if (!existingApartment) {
            res.status(404).json({ error: "Apartment not found" });
        } else {
            await apartmentRepository.remove(existingApartment);
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting apartment" });
    }
};

