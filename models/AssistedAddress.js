module.exports = (sequelize, DataTypes) => {
  const AssistedAddress = sequelize.define('assistedAddress', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    assistedID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'assisted_ID',
      references: {
        model: 'assisted',
        key: 'id',
      },
    },
    street: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(15),
      allowNull: false,
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

  return AssistedAddress;
};
