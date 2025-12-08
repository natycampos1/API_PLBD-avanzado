const db = require('../../models');

async function eliminar(id) {
    const encargado = await db.encargado.findByPk(id);
    if (!encargado) throw new Error('El encargado no existe');

    await encargado.destroy();
    return { message: 'Encargado eliminado correctamente' };
}

module.exports = { eliminar };
