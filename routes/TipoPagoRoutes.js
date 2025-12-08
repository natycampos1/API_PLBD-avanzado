const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/tipoPagos');

const router = express.Router();

// CREATE
router.post('/signup', async (req, res) => {
    try {
        const tipoPago = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `El tipo de pago ${tipoPago.tipo} ha sido creado correctamente...`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const tipos = await _findAll();
        return res.json(tipos);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const tipoPago = await _findById(req.params.id);
        return res.json(tipoPago);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const tipoPago = await _update(req.params.id, req.body);
        return res.json({
            status: 'success',
            message: `El tipo de pago ${tipoPago.tipo} ha sido actualizado correctamente...`,
            tipoPago
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
