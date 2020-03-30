'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('measure', [
      {
        id:1,
        assistedID: 1,
        authorID:1,
        validity:'2020-12-25',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:2,
        assistedID: 2,
        authorID:2,
        validity:'2020-11-20',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:3,
        assistedID: 3,
        authorID:3,
        validity:'2021-10-02',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:4,
        assistedID: 4,
        authorID:4,
        validity:'2020-08-05',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:5,
        assistedID: 5, 
        authorID:5,
        validity:'2021-01-06',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('measure', {});
  },
};
