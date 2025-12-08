const { create } = require('../services/curso/create');
const { findAll, findById } = require('../services/curso/find');
const { update } = require('../services/curso/update');
const { remove } = require('../services/curso/delete');

async function _create(curso) {
    return await create(curso);
}

async function _findAll() {
    return await findAll();
}

async function _findById(id) {
    return await findById(id);
}

async function _update(id, curso) {
    return await update(id, curso);
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
