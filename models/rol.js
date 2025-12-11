const Sequelize = require('sequelize-oracle');

module.exports = (sequelize) => {
  const Rol = sequelize.define('rol', {
    id: {
      type: Sequelize.INTEGER,
      field: 'ID',
      primaryKey: true,
      allowNull: false
    },
    cargo: {
      type: Sequelize.STRING,
      field: 'CARGO',
      allowNull: false
    },
    estado: {
      type: Sequelize.STRING,
      field: 'ESTADO',
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'CREATED_AT'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'UPDATED_AT'
    },
    deletedAt: {
      type: Sequelize.DATE,
      field: 'DELETED_AT'
    }
  }, {
    tableName: 'ROL',
    timestamps: true,
    paranoid: true,
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT',
    deletedAt: 'DELETED_AT'
  });

  return Rol;
};
