const { create } = require('../services/encargado_estudiante/create');
const { findAll, findById } = require('../services/encargado_estudiante/find');
const { update } = require('../services/encargado_estudiante/update');
const { remove } = require('../services/encargado_estudiante/delete');

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
