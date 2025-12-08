const db = require('../../models');

async function create(tipoPago) {
    if (!tipoPago.idPago) throw new Error('El idPago es obligatorio');

    const nuevoTipoPago = await db.tipo_pago.create({
        tipo: tipoPago.tipo || null,
        idPago: tipoPago.idPago
    });

    return nuevoTipoPago.get({ plain: true });
}

module.exports = { create };
