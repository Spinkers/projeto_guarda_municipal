module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('author_address', [
      {
        id: 1,
        author_ID: 1,
        street: 'Rua Escócia',
        number: '531',
        district: 'Água das Flores',
        cep: '13207-551',
        city: 'Jundiaí',
        state: 'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 2,
        author_ID: 2,
        street: 'Rua Acre',
        number: '654',
        district: 'Água das Flores',
        cep: '13203-280',
        city: 'Jundiaí',
        state: 'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        author_ID: 3,
        street: 'Rua Barbalha',
        number: '852',
        district: 'Água das Flores',
        cep: '13214-353',
        city: 'Jundiaí',
        state: 'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        author_ID: 4,
        street: 'Rua Portugal',
        number: '369',
        district: 'Água das Flores',
        cep: '13206-810',
        city: 'Jundiaí',
        state: 'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        author_ID: 5,
        street: 'Rua Caieiras',
        number: '741',
        district: 'Água das Flores',
        cep: '13203-513',
        city: 'Jundiaí',
        state: 'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('author_address', {});
  }
};
