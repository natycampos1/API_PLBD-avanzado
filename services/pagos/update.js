const db = require('../../models');

async function update(id, pago) {
    const existe = await db.pago.findByPk(id);
    if (!existe) throw new Error(`No existe el pago con ID ${id}`);

    await existe.update({
        fecha_pago: pago.fecha_pago ?? existe.fecha_pago,
        monto: pago.monto ?? existe.monto,
        metodo_pago: pago.metodo_pago ?? existe.metodo_pago,
        estado: pago.estado ?? existe.estado,
        idMatricula: pago.idMatricula ?? existe.idMatricula
    });

    return existe.get({ plain: true });
}

module.exports = { update };
