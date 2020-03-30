'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('author_address', [
      {
        id:1,
        authorID:1,
        street:'Rua Escócia',
        number:'531',
        district:'Água das Flores',
        cep:'13207-551',
        city:'Jundiaí',
        state:'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:2,
        authorID:2,
        street: 'Rua Acre',
        number:'654',
        district:'Água das Flores',
        cep:'13203-280',
        city:'Jundiaí',
        state:'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:3,
        authorID:3,
        street:'Rua Barbalha',
        number:'852',
        district:'Água das Flores',
        cep:'13214-353',
        city:'Jundiaí',
        state:'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:4,
        authorID:4,
        street:'Rua Portugal',
        number:'369',
        district: 'Água das Flores',
        cep:'13206-810',
        city:'Jundiaí',
        state:'São Paulo',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:5,
        authorID:5,
        street:'Rua Caieiras',
        number:'741',
        district:'Água das Flores',
        cep:'13203-513',
        city:'Jundiaí',
        state:'São Paulo',
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
