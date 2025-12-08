const db = require('../../models');
const bcrypt = require('bcrypt');

async function update(id, data) {
    const user = await db.usuario.findByPk(id);
    if (!user) throw new Error('Usuario no encontrado');

    // Si vienen datos de contraseña, encriptar
    if (data.password) {
        data.password = await bcrypt.hashSync(data.password, 10);
    }

    await user.update(data);
    return user.get({ plain: true });
}

module.exports = {
    update
};
