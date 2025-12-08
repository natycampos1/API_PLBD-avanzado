const db = require('../../models');

async function findAll() {
    const users = await db.usuario.findAll({ include: ['rol'] });
    return users.map(user => user.get({ plain: true }));
}

async function findById(id) {
    const user = await db.usuario.findByPk(id, { include: ['rol'] });
    if (!user) throw new Error('Usuario no encontrado');
    return user.get({ plain: true });
}

module.exports = {
    findAll,
    findById
};
