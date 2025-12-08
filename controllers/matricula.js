const { create } = require('../services/matricula/create');
const { findAll, findById } = require('../services/matricula/find');
const { update } = require('../services/matricula/update');
const { remove } = require('../services/matricula/delete');

async function _create(body) {
    return await create(body);
}

async function _findAll() {
    return await findAll();
}

async function _findById(id) {
    return await findById(id);
}

async function _update(id, body) {
    return await update(id, body);
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
