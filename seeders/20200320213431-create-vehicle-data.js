module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('vehicle', [
      {
        id: 1,
        author_ID: 1,
        plate: 'SUE4532',
        brand: 'Audi',
        model: 'A5 Sportback',
        color: 'Black',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 2,
        author_ID: 2,
        plate: 'HIJ8921',
        brand: 'Ford',
        model: 'Fiesta',
        color: 'Blue',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        author_ID: 3,
        plate: 'ERA2020',
        brand: 'Citroën',
        model: 'C3',
        color: 'Red',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        author_ID: 4,
        plate: 'OPA8532',
        brand: 'Toyota',
        model: 'Prius',
        color: 'White',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        author_ID: 5,
        plate: 'GLM6932',
        brand: 'Chevrolet',
        model: 'Onix',
        color: 'Green',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('vehicle', {});
  },
};
