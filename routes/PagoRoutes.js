const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/pagos');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const pago = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `El pago ID ${pago.id} ha sido creado correctamente...`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const pagos = await _findAll();
        return res.json(pagos);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pago = await _findById(req.params.id);
        return res.json(pago);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const pago = await _update(req.params.id, req.body);
        return res.json({
            status: 'success',
            message: `El pago ID ${pago.id} ha sido actualizado correctamente...`,
            pago
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

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
