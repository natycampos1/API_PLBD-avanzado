const { create } = require('../services/carreras/create');
const { findAll, findById } = require('../services/carreras/find');
const { update } = require('../services/carreras/update');
const { remove } = require('../services/carreras/delete');

async function _create(data) {
    return await create(data);
}

async function _findAll() {
    return await findAll();
}

async function _findById(id) {
    return await findById(id);
}

async function _update(id, data) {
    return await update(id, data);
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
