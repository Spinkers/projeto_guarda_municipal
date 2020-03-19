/**
 * Bcrypt configs
 *
 * password: 12345678
 * nº rounds: 12
 */

const hash = '$2b$12$nT/8GO9Ei1dPo0ylr6FD6e/rj.aQTheVl3/1AH3AZwyjz4hmvmDZC';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('employee', [
      {
        id: 1,
        login: 'superAdmin',
        password: hash,
        email: 'example@example.com',
        full_name: 'Super Administrador',
        permission_ID: 1,
        created_At: new Date(),
        updated_At: new Date(),
        deleted_At: null,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employee', {
      id: {
        [Sequelize.Op.in]: [1],
      },
    });
  },
};
