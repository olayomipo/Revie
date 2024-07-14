const {getRepository} = require("typeorm");
const Apartment = require("../models/apartment");



const getApartmentById = async (req, res) => {
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

const getAllApartments = async (req, res) => {
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

const createApartment = async (req, res) => {
    try {
        const newItem = req.body;
        const apartmentRepository = getRepository(Apartment);
        const savedItem = await apartmentRepository.save(newItem);
        res.status(201).json({
            "message": "Apartment created successfully",
            "apartment_id": savedItem['id'],
        });
    } catch (error) {
        res.status(500).json({ error: "Error creating Apartment" });
    }
};

const updateApartment = async (req, res) => {
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

const deleteApartment = async (req, res) => {
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


module.exports = { getAllApartments,
     getApartmentById,
      createApartment,
       updateApartment,
        deleteApartment};