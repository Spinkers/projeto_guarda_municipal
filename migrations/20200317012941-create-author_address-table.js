module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('author_address', {
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
      street: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(15),
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
    return queryInterface.dropTable('author_address');
  },
};
