const db = require('../../models');

async function remove(id) {
    const matricula = await db.matricula.findByPk(id);
    if (!matricula) throw new Error('La matrícula no existe');

    await matricula.destroy();
    return { message: 'Matrícula eliminada correctamente' };
}

module.exports = { remove };
