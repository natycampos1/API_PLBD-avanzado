const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/usuarios');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const user = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `Usuario ${user.username} creado correctamente`,
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const users = await _findAll();
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const user = await _findById(req.params.id);
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ error: error.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const user = await _update(req.params.id, req.body);
        return res.json({
            status: 'success',
            message: `Usuario ${user.username} actualizado correctamente`,
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const result = await _delete(req.params.id);
        return res.json(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ error: error.message });
    }
});

module.exports = router;

