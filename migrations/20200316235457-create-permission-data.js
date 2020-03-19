module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('permission', [
      {
        id: 1,
        type: 'superAdmin',
        description: 'Can manage other employees',
        created_At: new Date(),
        updated_At: new Date(),
        deleted_At: null,
      },
      {
        id: 2,
        type: 'systemOperator',
        description: '',
        created_At: new Date(),
        updated_At: new Date(),
        deleted_At: null,
      },
      {
        id: 3,
        type: 'policeOfficer',
        description: 'Can view ticket data',
        created_At: new Date(),
        updated_At: new Date(),
        deleted_At: null,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permission', {
      id: {
        [Sequelize.Op.in]: [1, 2, 3],
      },
    });
  },
};
