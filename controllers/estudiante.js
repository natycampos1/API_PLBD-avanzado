const createService = require('../services/estudiante/create');
const findService = require('../services/estudiante/find');
const updateService = require('../services/estudiante/update');
const deleteService = require('../services/estudiante/delete');

async function _create(estudiante) {
    return await createService.create(estudiante);
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
