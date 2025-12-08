const { create } = require('../services/encargado/create');
const { update } = require('../services/encargado/update');
const { eliminar } = require('../services/encargado/delete');
const { find } = require('../services/encargado/find');

async function _create(encargado) {
    return await create(encargado);
}

async function _update(id, encargado) {
    return await update(id, encargado);
}

async function _delete(id) {
    return await eliminar(id);
}

async function _find(id) {
    return await find(id);
}

module.exports = { _create, _update, _delete, _find };
