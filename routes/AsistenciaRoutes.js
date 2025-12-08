const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/asistencia');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        const asistencia = await _create(req.body);

        return res.status(201).json({
            status: 'success',
            message: `La asistencia para la matrícula ID ${asistencia.idMatricula} ha sido registrada correctamente...`
        });

    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const asistencias = await _findAll();
        return res.json(asistencias);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const asistencia = await _findById(req.params.id);
        return res.json(asistencia);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const asistencia = await _update(req.params.id, req.body);

        return res.json({
            status: 'success',
            message: 'Asistencia actualizada correctamente',
            asistencia
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
