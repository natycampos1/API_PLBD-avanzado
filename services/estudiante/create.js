const db = require('../../models');

async function create(estudiante) {
    if (!estudiante.nombre) throw new Error('El nombre es obligatorio');
    if (!estudiante.apellidos) throw new Error('Los apellidos son obligatorios');
    if (!estudiante.idCarrera) throw new Error('La carrera es obligatoria');

    const nuevoEstudiante = await db.estudiante.create({
        nombre: estudiante.nombre,
        apellidos: estudiante.apellidos,
        email: estudiante.email,
        fecha_nacimiento: estudiante.fecha_nacimiento,
        telefono: estudiante.telefono,
        direccion: estudiante.direccion,
        idCarrera: estudiante.idCarrera
    });

    return nuevoEstudiante.get({ plain: true });
}

module.exports = { create };
