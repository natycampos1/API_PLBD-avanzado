const db = require('../../models');

async function remove(id) {
    const user = await db.usuario.findByPk(id);
    if (!user) throw new Error('Usuario no encontrado');

    await user.destroy();
    return { message: `Usuario ${user.username} eliminado correctamente` };
}

module.exports = {
    remove
};
