"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/apartment.routes.ts
const express_1 = require("express");
const apartment_1 = require("../controller/apartment");
const apartmentRouter = express_1.Router();
apartmentRouter.get("/", apartment_1.getApartment);
apartmentRouter.get("/:id", apartment_1.getApartmentById);
apartmentRouter.post("/", apartment_1.createApartment);
apartmentRouter.put("/:id", apartment_1.updateApartment);
apartmentRouter.delete("/:id", apartment_1.deleteApartment);
exports.default = apartmentRouter;
//# sourceMappingURL=apartment.js.map