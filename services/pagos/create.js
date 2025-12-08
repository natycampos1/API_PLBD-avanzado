const db = require('../../models');

async function create(pago) {
    if (!pago.idMatricula) throw new Error('El idMatricula es obligatorio');

    const nuevoPago = await db.pago.create({
        fecha_pago: pago.fecha_pago || null,
        monto: pago.monto || null,
        metodo_pago: pago.metodo_pago || null,
        estado: pago.estado || null,
        idMatricula: pago.idMatricula
    });

    return nuevoPago.get({ plain: true });
}

module.exports = { create };
