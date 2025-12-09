const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize-oracle");

const basename = path.basename(__filename);
const db = {};

// Configuración de DB desde config.json (ajusta si necesitas)
const config = require("../config/config.json");

// Conexión
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Carga todos los modelos automáticamente
fs.readdirSync(__dirname)
  .filter(file =>
    file !== basename &&
    file.endsWith(".js")
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Ejecuta asociaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exporta la conexión y los modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
