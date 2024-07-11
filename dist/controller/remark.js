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
exports.deleteRemark = exports.updateRemark = exports.createRemark = exports.getAllRemarks = exports.getRemarkById = void 0;
const typeorm_1 = require("typeorm");
const Remark_1 = require("../entity/Remark");
exports.getRemarkById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = typeorm_1.getRepository(Remark_1.Remark);
        const apartment = yield apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Remark not found" });
        }
        else {
            res.status(200).json(apartment);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
});
exports.getAllRemarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = typeorm_1.getRepository(Remark_1.Remark);
        const apartment = yield apartmentRepository.findOne(apartmentId);
        if (!apartment) {
            res.status(404).json({ error: "Remark not found" });
        }
        else {
            res.status(200).json(apartment);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching apartment" });
    }
});
exports.createRemark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = req.body;
        const apartmentRepository = typeorm_1.getRepository(Remark_1.Remark);
        const savedItem = yield apartmentRepository.save(newItem);
        res.status(201).json(savedItem);
    }
    catch (error) {
        res.status(500).json({ error: "Error creating Remark" });
    }
});
exports.updateRemark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const updatedData = req.body;
        const apartmentRepository = typeorm_1.getRepository(Remark_1.Remark);
        const existingRemark = yield apartmentRepository.findOne(apartmentId);
        if (!existingRemark) {
            res.status(404).json({ error: "Remark not found" });
        }
        else {
            const updatedRemark = Object.assign(Object.assign({}, existingRemark), updatedData);
            yield apartmentRepository.save(updatedRemark);
            res.status(200).json(updatedRemark);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating apartment" });
    }
});
exports.deleteRemark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartmentId = req.params.id;
        const apartmentRepository = typeorm_1.getRepository(Remark_1.Remark);
        const existingRemark = yield apartmentRepository.findOne(apartmentId);
        if (!existingRemark) {
            res.status(404).json({ error: "Remark not found" });
        }
        else {
            yield apartmentRepository.remove(existingRemark);
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting apartment" });
    }
});
//# sourceMappingURL=remark.js.map