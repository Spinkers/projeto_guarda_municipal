const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('geographic_location', [
      {
        id: 1,
        assisted_ID: 1,
        position: Sequelize.fn('ST_GeomFromText', 'POINT(-23.189507 -46.876870)'),
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 2,
        assisted_ID: 2,
        position: Sequelize.fn('ST_GeomFromText', 'POINT(-23.189507 -46.876870)'),
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        assisted_ID: 3,
        position: Sequelize.fn('ST_GeomFromText', 'POINT(-23.189507 -46.876870)'),
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        assisted_ID: 4,
        position: Sequelize.fn('ST_GeomFromText', 'POINT(-23.189507 -46.876870)'),
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        assisted_ID: 5,
        position: Sequelize.fn('ST_GeomFromText', 'POINT(-23.189507 -46.876870)'),
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('geographic_location', {});
  },
};
