module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name',
    },
    permissionID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'permission_ID',
      references: {
        model: 'permission',
        key: 'id',
      },
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

  return Employee;
};
