const db = require('../../models');

async function remove(id) {
    const curso = await db.curso.findByPk(id);

    if (!curso) throw new Error('Curso no encontrado');

    await curso.destroy();

    return { message: 'Curso eliminado correctamente' };
}

module.exports = { remove };
