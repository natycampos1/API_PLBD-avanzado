const db = require('../../models');

async function findAll() {
    return await db.pago.findAll({ raw: true });
}

async function findById(id) {
    const pago = await db.pago.findByPk(id, { raw: true });
    if (!pago) throw new Error(`No existe el pago con ID ${id}`);
    return pago;
}

module.exports = { findAll, findById };
