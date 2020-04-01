module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('assisted_contact', [
      {
        id: 1,
        assisted_ID: 1,
        phone: '11 40028922',
        is_main: true,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 2,
        assisted_ID: 2,
        phone: '11 98767 34832',
        is_main: true,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        assisted_ID: 3,
        phone: '11 93948 2753',
        is_main: true,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        assisted_ID: 4,
        phone: '11 93829 3849',
        is_main: true,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        assisted_ID: 5,
        phone: '11 40028922',
        is_main: true,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 6,
        assisted_ID: 1,
        phone: '11 94039 4582',
        is_main: false,
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('assisted_contact', {});
  },
};
