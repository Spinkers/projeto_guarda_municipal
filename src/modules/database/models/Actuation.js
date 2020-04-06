module.exports = (sequelize, DataTypes) => {
  const Actuation = sequelize.define('actuation', {
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
    measureID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'measure_ID',
      references: {
        model: 'measure',
        key: 'id',
      },
    },
    authorID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'author_ID',
      references: {
        model: 'author',
        key: 'id',
      },
    },
    employeeID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'employee_ID',
      references: {
        model: 'employee',
        key: 'id',
      },
    },
    gmVehicle: {
      type: DataTypes.CHAR(10),
      field: 'gm_vehicle',
    },
    taNumber: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'ta_number',
    },
    observation: {
      type: DataTypes.STRING(300),
    },
    audio: {
      type: DataTypes.STRING(300),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active',
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

  return Actuation;
};
