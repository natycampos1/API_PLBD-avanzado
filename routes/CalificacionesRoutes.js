const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/calificacion');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        const calificacion = await _create(req.body);

        return res.status(201).json({
            status: 'success',
            message: `La calificación para la matrícula ID ${calificacion.idMatricula} fue registrada correctamente.`
        });

    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const calificaciones = await _findAll();
        return res.json(calificaciones);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const calificacion = await _findById(req.params.id);
        return res.json(calificacion);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const calificacion = await _update(req.params.id, req.body);

        return res.json({
            status: 'success',
            message: 'Calificación actualizada correctamente',
            calificacion
        });

    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const msg = await _delete(req.params.id);
        return res.json(msg);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

module.exports = router;
