
const {getRepository} = require("typeorm");
const Remark = require("../models/remark");


const getRemarkById = async (req, res) => {
    try {
        const remarkId = req.params.id;
        const remarkRepository = getRepository(Remark);
        const remark = await remarkRepository.findOne(remarkId);
        if (!remark) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            res.status(200).json(remark);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching remark" });
    }
};

const getAllRemarks = async (req, res) => {
    try {
        const remarkId = req.params.id;
        const remarkRepository = getRepository(Remark);
        const remark = await remarkRepository.findOne(remarkId);
        if (!remark) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            res.status(200).json(remark);
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching remark" });
    }
};

const createRemark = async (req, res) => {
    try {
        const newItem = req.body;
        const remarkRepository = getRepository(Remark);
        const savedItem = await remarkRepository.save(newItem);
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: "Error creating Remark" });
    }
};

const updateRemark = async (req, res) => {
    try {
        const remarkId = req.params.id;
        const updatedData = req.body;
        const remarkRepository = getRepository(Remark);
        const existingRemark = await remarkRepository.findOne(remarkId);
        if (!existingRemark) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            const updatedRemark = { ...existingRemark, ...updatedData };
            await remarkRepository.save(updatedRemark);
            res.status(200).json(updatedRemark);
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating remark" });
    }
};

const deleteRemark = async (req, res) => {
    try {
        const remarkId = req.params.id;
        const remarkRepository = getRepository(Remark);
        const existingRemark = await remarkRepository.findOne(remarkId);
        if (!existingRemark) {
            res.status(404).json({ error: "Remark not found" });
        } else {
            await remarkRepository.remove(existingRemark);
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting remark" });
    }
};


module.exports = { getAllRemarks,
    getRemarkById,
     createRemark,
      updateRemark,
       deleteRemark};