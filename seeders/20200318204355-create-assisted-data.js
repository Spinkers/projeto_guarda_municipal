/**
 * Bcrypt configs
 *
 * password: 12345678
 * nº rounds: 12
 */

const hash = '$2b$12$nT/8GO9Ei1dPo0ylr6FD6e/rj.aQTheVl3/1AH3AZwyjz4hmvmDZC';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('assisted', [
      {
        id: 1,
        cpf: '48217238212',
        full_name: 'Ana Carolina',
        photograph: '28DJW232J2.jpeg',
        password: hash,
        observation: '',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 2,
        cpf: '12345678912',
        full_name: 'Vivian Tavares',
        photograph: '123JK12LKJ2.jpeg',
        password: hash,
        observation: '',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 3,
        cpf: '19827337642',
        full_name: 'Larissa Cardoso',
        photograph: 'KL23J423LJ.jpeg',
        password: hash,
        observation: '',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 4,
        cpf: '12387629192',
        full_name: 'Mariana Garcia',
        photograph: '3234KL32LJ43.jpeg',
        password: hash,
        observation: '',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
      {
        id: 5,
        cpf: '49889029392',
        full_name: 'Isabelle Victoria',
        photograph: '2983JKLJLH2.jpeg',
        password: hash,
        observation: '',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('assisted', {});
  },
};
