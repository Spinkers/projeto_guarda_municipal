module.exports = (sequelize, DataTypes) => {
  const Assisted = sequelize.define('assisted', {
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
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
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

  return Assisted;
};
