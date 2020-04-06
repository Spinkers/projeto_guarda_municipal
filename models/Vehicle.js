module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('vehicle', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
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
    plate: {
      type: DataTypes.CHAR(7),
      allowNull: false,
    },
    brand: {
      type: DataTypes.CHAR(20),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    color: {
      type: DataTypes.CHAR(10),
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

  return Vehicle;
};
