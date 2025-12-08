const db = require('../../models');

async function remove(id) {
    const profesor = await db.profesor.findByPk(id);
    if (!profesor) throw new Error('Profesor no encontrado');

    await profesor.destroy();

    return { message: 'Profesor eliminado correctamente' };
}

module.exports = { remove };
