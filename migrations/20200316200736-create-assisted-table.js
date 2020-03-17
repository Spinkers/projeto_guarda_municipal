module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('assisted', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'full_name',
      },
      photograph: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      password: {
        type: Sequelize.CHAR(60),
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING(300),
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
    return queryInterface.dropTable('assisted');
  },
};
