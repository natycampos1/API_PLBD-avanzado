const createService = require('../services/profesores/create');
const findService = require('../services/profesores/find');
const updateService = require('../services/profesores/update');
const deleteService = require('../services/profesores/delete');

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
