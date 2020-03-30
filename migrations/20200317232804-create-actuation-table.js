module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('actuation', {
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
      measureID: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'measure_ID,',
        references: {
          model: 'measure',
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
      employeeID: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        field: 'employee_ID',
        references: {
          model: 'employee',
          key: 'id',
        },
      },
      gmVehicle: {
        type: Sequelize.CHAR(10),
      },
      taNumber: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING(300),
      },
      audio: {
        type: Sequelize.STRING(300),
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('actuation');
  },
};
