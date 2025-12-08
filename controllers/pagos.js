const { create } = require('../services/pagos/create');
const { findAll, findById } = require('../services/pagos/find');
const { update } = require('../services/pagos/update');
const { remove } = require('../services/pagos/delete');

async function _create(pago) {
    return await create(pago);
}

async function _findAll() {
    return await findAll();
}

async function _findById(id) {
    return await findById(id);
}

async function _update(id, pago) {
    return await update(id, pago);
}

async function _delete(id) {
    return await remove(id);
}

module.exports = {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
};
