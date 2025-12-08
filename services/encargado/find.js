const db = require('../../models');

async function find(id) {
    const encargado = await db.encargado.findByPk(id);

    if (!encargado) throw new Error('Encargado no encontrado');

    return encargado.get({ plain: true });
}

module.exports = { find };
