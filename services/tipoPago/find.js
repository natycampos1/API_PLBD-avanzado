const db = require('../../models');

async function findAll() {
    return await db.tipo_pago.findAll({ raw: true });
}

async function findById(id) {
    const tipoPago = await db.tipo_pago.findByPk(id, { raw: true });
    if (!tipoPago) throw new Error(`No existe el tipo de pago con ID ${id}`);
    return tipoPago;
}

module.exports = { findAll, findById };
