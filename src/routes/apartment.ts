
// src/routes/apartment.routes.ts
import {Router} from "express";
import { createApartment, getApartment, updateApartment, deleteApartment, getApartmentById } from "../controller/apartment";

const apartmentRouter = Router();

apartmentRouter.get("/", getApartment);
apartmentRouter.get("/:id", getApartmentById);
apartmentRouter.post("/", createApartment);
apartmentRouter.put("/:id", updateApartment);
apartmentRouter.delete("/:id", deleteApartment);

export default apartmentRouter;