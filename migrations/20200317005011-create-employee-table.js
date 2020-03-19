module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      login: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      password: {
        type: Sequelize.CHAR(60),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'full_name',
      },
      permissionID: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'permission_ID',
        references: {
          model: 'permission',
          key: 'id',
        },
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
    return queryInterface.dropTable('employee');
  },
};
