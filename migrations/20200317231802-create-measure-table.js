module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('measure', {
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
      authorID: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'author_ID',
        references: {
          model: 'author',
          key: 'id',
        },
      },
      mpValidity: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'mp_validity',
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
    return queryInterface.dropTable('measure');
  },
};
