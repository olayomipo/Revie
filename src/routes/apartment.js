
const { Router } = require("express");
const { createApartment, getAllApartments, updateApartment, deleteApartment, getApartmentById } = require("../controller/apartment");

const apartmentRouter = Router();

apartmentRouter.get("/", getAllApartments);
apartmentRouter.get("/:id", getApartmentById);
apartmentRouter.post("/", createApartment);
apartmentRouter.put("/:id", updateApartment);
apartmentRouter.delete("/:id", deleteApartment);

module.exports = apartmentRouter;