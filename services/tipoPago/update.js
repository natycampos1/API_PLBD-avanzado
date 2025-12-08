const db = require('../../models');

async function update(id, tipoPago) {
    const existe = await db.tipo_pago.findByPk(id);
    if (!existe) throw new Error(`No existe el tipo de pago con ID ${id}`);

    await existe.update({
        tipo: tipoPago.tipo ?? existe.tipo,
        idPago: tipoPago.idPago ?? existe.idPago
    });

    return existe.get({ plain: true });
}

module.exports = { update };
