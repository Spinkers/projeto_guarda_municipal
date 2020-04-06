module.exports = (sequelize, DataTypes) => {
  const Measure = sequelize.define('measure', {
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
    authorID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'author_ID',
      references: {
        model: 'author',
        key: 'id',
      },
    },
    validity: {
      type: DataTypes.DATE,
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

  return Measure;
};
