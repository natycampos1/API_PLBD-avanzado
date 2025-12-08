const port = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models'); 


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/auth', require('./routes/auth'));
app.use('/roles', require('./routes/RolRoutes'));
app.use('/profesores', require('./routes/ProfesorRoutes'));
app.use('/estudiantes', require('./routes/EstudianteRoutes'));
app.use('/carreras', require('./routes/CarreraRoutes'));
app.use('/cursos', require('./routes/CursoRoutes'));
app.use('/matriculas', require('./routes/MatriculaRoutes'));
app.use('/asistencias', require('./routes/AsistenciaRoutes'));
app.use('/encargados', require('./routes/EncargadoRoutes'));
app.use('/encargado-estudiante', require('./routes/EncargadoEstudianteRoutes'));
app.use('/pagos', require('./routes/PagoRoutes'));
app.use('/tipos-pago', require('./routes/TipoPagoRoutes'));
app.use('/usuarios', require('./routes/UsuarioRoutes'));



// Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}....`);
});

// Base de datos
db.sequelize
  .sync({ force: false })
  .then(() => console.log('Conexión a la base de datos establecida exitosamente.'))
  .catch((e) => console.log(`Error => ${e}`));
