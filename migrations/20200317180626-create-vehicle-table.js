module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicle', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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
      plate: {
        type: Sequelize.CHAR(7),
        allowNull: false,
      },
      brand: {
        type: Sequelize.CHAR(20),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      color: {
        type: Sequelize.CHAR(10),
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
    return queryInterface.dropTable('vehicle');
  },
};
