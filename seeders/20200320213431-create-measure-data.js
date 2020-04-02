module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('measure', [
      {
        id: 1,
        assisted_ID: 1,
        author_ID: 1,
        validity: '2020-12-25',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 2,
        assisted_ID: 2,
        author_ID: 2,
        validity: '2020-11-20',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        assisted_ID: 3,
        author_ID: 3,
        validity: '2021-10-02',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        assisted_ID: 4,
        author_ID: 4,
        validity: '2020-08-05',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        assisted_ID: 5,
        author_ID: 5,
        validity: '2021-01-06',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('measure', {});
  },
};
