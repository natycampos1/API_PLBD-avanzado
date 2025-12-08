const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/encargado');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        const encargado = await _create(req.body);

        return res.status(201).json({
            status: 'success',
            message: `El encargado ${encargado.nombre} ${encargado.apellidos} ha sido creado correctamente...`
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const encargados = await _findAll();
        return res.json(encargados);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const encargado = await _findById(req.params.id);
        return res.json(encargado);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const encargado = await _update(req.params.id, req.body);

        return res.json({
            status: 'success',
            message: `El encargado ${encargado.nombre} ${encargado.apellidos} ha sido actualizado correctamente...`,
            encargado
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const result = await _delete(req.params.id);
        return res.json(result);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

module.exports = router;
