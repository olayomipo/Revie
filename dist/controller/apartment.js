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
exports.deleteApartment = exports.updateApartment = exports.createApartment = exports.getApartment = exports.getApartmentById = void 0;
const typeorm_1 = require("typeorm");
const Apartment_1 = require("../entity/Apartment");
exports.getApartmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = typeorm_1.getRepository(Apartment_1.Apartment);
        const apartment = yield apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Apartment not found" });
        }
        else {
            res.status(200).json(apartment);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
});
exports.getApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = typeorm_1.getRepository(Apartment_1.Apartment);
        const apartment = yield apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Apartment not found" });
        }
        else {
            res.status(200).json(apartment);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
});
exports.createApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = req.body;
        const apartmentRepository = typeorm_1.getRepository(Apartment_1.Apartment);
        const savedItem = yield apartmentRepository.save(newItem);
        res.status(201).json(savedItem);
    }
    catch (error) {
        res.status(500).json({ error: "Error creating Apartment" });
    }
});
exports.updateApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const updatedData = req.body;
        const apartmentRepository = typeorm_1.getRepository(Apartment_1.Apartment);
        const existingApartment = yield apartmentRepository.findOne(apartmentId);
        if (!existingApartment) {
            res.status(404).json({ error: "Apartment not found" });
        }
        else {
            const updatedApartment = Object.assign(Object.assign({}, existingApartment), updatedData);
            yield apartmentRepository.save(updatedApartment);
            res.status(200).json(updatedApartment);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating apartment" });
    }
});
exports.deleteApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = typeorm_1.getRepository(Apartment_1.Apartment);
        const existingApartment = yield apartmentRepository.findOne(apartmentId);
        if (!existingApartment) {
            res.status(404).json({ error: "Apartment not found" });
        }
        else {
            yield apartmentRepository.remove(existingApartment);
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting apartment" });
    }
});
//# sourceMappingURL=apartment.js.map