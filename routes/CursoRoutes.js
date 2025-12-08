const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/curso');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        const curso = await _create(req.body);

        return res.status(201).json({
            status: 'success',
            message: `El curso ${curso.nombre} ha sido creado correctamente...`
        });

    } catch (error) {
        console.log("ERROR CREATE:", error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const cursos = await _findAll();
        return res.json(cursos);
    } catch (error) {
        console.log("ERROR GET ALL:", error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const curso = await _findById(req.params.id);
        return res.json(curso);
    } catch (error) {
        console.log("ERROR GET ID:", error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const curso = await _update(req.params.id, req.body);

        return res.json({
            status: 'success',
            message: 'Curso actualizado correctamente',
            curso
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
