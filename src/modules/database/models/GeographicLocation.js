module.exports = (sequelize, DataTypes) => {
  const GeographicLocation = sequelize.define(
    'geographicLocation',
    {
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
      position: {
        type: DataTypes.GEOMETRY,
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
    },
    {
      tableName: 'geographic_location',
    },
  );

  return GeographicLocation;
};
