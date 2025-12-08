const createService = require('../services/asistencias/create');
const findService = require('../services/asistencias/find');
const updateService = require('../services/asistencias/update');
const deleteService = require('../services/asistencias/delete');

async function _create(data) {
    return await createService.create(data);
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
