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
        id: 2,
        login: 'gmmarcot',
        password: hash,
        email: 'marcostav@gmail.com',
        full_name: 'Marcos Tavares',
        permission_ID: 2,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        login: 'gmluana',
        password: hash,
        email: 'gluanam@gmail.com',
        full_name: 'Luana Silva',
        permission_ID: 2,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        login: 'gmdaciolo',
        password: hash,
        email: 'cabodaciolo@gmail.com',
        full_name: 'Daciolo Neto',
        permission_ID: 3,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        login: 'gmalice',
        password: hash,
        email: 'alicecosta@gmail.com',
        full_name: 'Alice Costa',
        permission_ID: 3,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 6,
        login: 'gmwillian',
        password: hash,
        email: 'willangm@gmail.com',
        full_name: 'Willian Adolfo',
        permission_ID: 3,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('employee', {});
  },
};
