const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/carrera');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        console.log("BODY RECIBIDO:", req.body);
        const carrera = await _create(req.body);

        return res.status(201).json({
            status: 'success',
            message: `La carrera ${carrera.nombre} ha sido creada correctamente...`
        });

    } catch (error) {
        console.log("ERROR:", error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const carreras = await _findAll();
        return res.json(carreras);

    } catch (error) {
        console.log("ERROR GET:", error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const carrera = await _findById(req.params.id);
        return res.json(carrera);

    } catch (error) {
        console.log("ERROR GET BY ID:", error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const carrera = await _update(req.params.id, req.body);

        return res.json({
            status: 'success',
            message: 'Carrera actualizada correctamente',
            carrera
        });

    } catch (error) {
        console.log("ERROR UPDATE:", error);
        return res.status(500).json(error.message);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const msg = await _delete(req.params.id);
        return res.json(msg);

    } catch (error) {
        console.log("ERROR DELETE:", error);
        return res.status(500).json(error.message);
    }
});

module.exports = router;
