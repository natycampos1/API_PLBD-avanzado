const express = require('express');
const {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
} = require('../controllers/matricula');

const router = express.Router();

// CREATE
router.post('/create', async (req, res) => {
    try {
        const matricula = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `La matrícula del estudiante ${matricula.idEstudiante} ha sido creada correctamente...`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const matriculas = await _findAll();
        return res.json(matriculas);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const matricula = await _findById(req.params.id);
        return res.json(matricula);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const matricula = await _update(req.params.id, req.body);
        return res.json({
            status: 'success',
            message: `La matrícula ha sido actualizada correctamente...`,
            matricula
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
