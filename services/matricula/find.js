const db = require('../../models');

async function findAll() {
    const matriculas = await db.matricula.findAll();
    return matriculas.map(m => m.get({ plain: true }));
}

async function findById(id) {
    const matricula = await db.matricula.findByPk(id);
    if (!matricula) throw new Error('La matrícula no existe');
    return matricula.get({ plain: true });
}

module.exports = { findAll, findById };
