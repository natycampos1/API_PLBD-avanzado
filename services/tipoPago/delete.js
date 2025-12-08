const db = require('../../models');

async function remove(id) {
    const tipoPago = await db.tipo_pago.findByPk(id);
    if (!tipoPago) throw new Error(`No existe el tipo de pago con ID ${id}`);

    await tipoPago.destroy();

    return { message: `Tipo de pago ID ${id} eliminado correctamente` };
}

module.exports = { remove };
