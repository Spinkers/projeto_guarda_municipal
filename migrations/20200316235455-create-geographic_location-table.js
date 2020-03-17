module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('geographic_location', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      assistedID: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'assisted_ID',
        references: {
          model: 'assisted',
          key: 'id',
        },
      },
      longitude: {
        type: Sequelize.Sequelize.GEOMETRY,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.Sequelize.GEOMETRY,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('geographic_location');
  },
};
