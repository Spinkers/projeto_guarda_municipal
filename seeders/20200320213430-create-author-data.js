'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable('author', [
      {
        id:1,
        cpf:'48217238212',
        fullName: 'Ana Carolina',
        photograph:'28DJW232J2.jpeg',
        dvc:'265478934',
        hasGun: 0,
        observation:'',
        createdAt:'2020-01-18 15:02:28',
        updatedAt:'2020-01-21 12:31:00',
        deletedAt:null,
      },
      {
        id:2,
        cpf: '12345678912',
        full_name: 'Vivian Tavares',
        photograph: '123JK12LKJ2.jpeg',
        dvc: '165872346',
        hasGun:0,
        observation:'',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:3,
        cpf: '19827337642',
        full_name: 'Larissa Cardoso',
        photograph: 'KL23J423LJ.jpeg',
        dvc:'759826413',
        hasGun: 0,
        observation:'',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:4,
        cpf: '12387629192',
        full_name: 'Mariana Garcia',
        photograph: '3234KL32LJ43.jpeg',
        dvc:'164983264',
        hasGun:1,
        observation:'',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id:5,
        cpf: '49889029392',
        full_name: 'Isabelle Victoria',
        photograph: '2983JKLJLH2.jpeg',
        dvc:'264982643',
        hasGun:1,
        observation:'',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      }
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('author', {});
  }
};
