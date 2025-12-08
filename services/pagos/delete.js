const db = require('../../models');

async function remove(id) {
    const pago = await db.pago.findByPk(id);
    if (!pago) throw new Error(`No existe el pago con ID ${id}`);

    await pago.destroy();

    return { message: `Pago ID ${id} eliminado correctamente` };
}

module.exports = { remove };
