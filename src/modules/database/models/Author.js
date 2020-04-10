module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    cpf: {
      type: DataTypes.CHAR(11),
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name',
    },
    photograph: {
      type: DataTypes.STRING(300),
    },
    dvc: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    hasGun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'has_gun',
    },
    observation: {
      type: DataTypes.STRING(300),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
  });

  return Author;
};
