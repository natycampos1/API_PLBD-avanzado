const db = require('../../models');

async function findAll() {
    return await db.usuario.findAll({
        attributes: [
            'id',
            'username',
            'email',
            'estado',
            'idRol',
            'created_at',
            'updated_at',
            'deleted_at'
        ],
        include: [
            {
                model: db.rol,
                as: 'rol',
                attributes: ['cargo']
            }
        ]
    });
}

async function findById(id) {
    return await db.usuario.findByPk(id, {
        attributes: [
            'id',
            'username',
            'email',
            'estado',
            'idRol',
            'created_at',
            'updated_at',
            'deleted_at'
        ],
        include: [
            {
                model: db.rol,
                as: 'rol',
                attributes: ['cargo']
            }
        ]
    });
}

module.exports = { findAll, findById };
