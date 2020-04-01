module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('author', {
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
      },
      dvc: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      hasGun: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'has_gun',
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
    return queryInterface.dropTable('author');
  },
};
