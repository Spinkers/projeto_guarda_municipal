module.exports = (sequelize, DataTypes) => {
  const AssistedContact = sequelize.define('assistedContact', {
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
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    isMain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_main',
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

  return AssistedContact;
};
