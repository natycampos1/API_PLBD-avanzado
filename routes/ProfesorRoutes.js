const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/profesor');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        console.log("BODY RECIBIDO:", req.body);

        const profesor = await _create(req.body);

        console.log("CREADO:", profesor);

        return res.status(201).json({
            status: 'success',
            message: `El profesor ${profesor.nombre} ${profesor.apellidos} ha sido creado correctamente...`
        });

    } catch (error) {
        console.log("ERROR:", error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const profesores = await _findAll();
        return res.json(profesores);
    } catch (error) {
        console.log("ERROR GET:", error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const profesor = await _findById(req.params.id);
        return res.json(profesor);
    } catch (error) {
        console.log("ERROR GET BY ID:", error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        console.log("BODY UPDATE:", req.body);

        const profesor = await _update(req.params.id, req.body);

        return res.json({
            status: 'success',
            message: `Profesor actualizado correctamente`,
            profesor
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
