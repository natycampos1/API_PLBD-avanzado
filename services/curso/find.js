const db = require('../../models');

async function findAll() {
    const cursos = await db.curso.findAll({
        include: ['carrera']
    });

    return cursos.map(c => c.get({ plain: true }));
}

async function findById(id) {
    const curso = await db.curso.findByPk(id, {
        include: ['carrera']
    });

    if (!curso) throw new Error('Curso no encontrado');

    return curso.get({ plain: true });
}

module.exports = { findAll, findById };
