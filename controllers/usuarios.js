const createService = require('../services/usuarios/create');
const findService = require('../services/usuarios/find');
const updateService = require('../services/usuarios/update');
const deleteService = require('../services/usuarios/delete');

async function _create(usuario) {
    return await createService.create(usuario);
}

async function _findAll() {
    return await findService.findAll();
}

async function _findById(id) {
    return await findService.findById(id);
}

async function _update(id, data) {
    return await updateService.update(id, data);
}

async function _delete(id) {
    return await deleteService.remove(id);
}

module.exports = {
    _create,
    _findAll,
    _findById,
    _update,
    _delete
};
