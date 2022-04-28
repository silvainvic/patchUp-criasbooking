module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Citys',
    [
      {
        name: 'Belém',
        stateId: 14,
      },
      {
        name: 'Belo Horizonte',
        stateId: 13,
      },
      {
        name: 'Brasília',
        stateId: 7,
      },
      {
        name: 'Campo Grande',
        stateId: 12,
      },
      {
        name: 'Cuiabá',
        stateId: 11,
      },
      {
        name: 'Curitiba',
        stateId: 16,
      },
      {
        name: 'Florianópolis',
        stateId: 24,
      },
      {
        name: 'Fortaleza',
        stateId: 6,
      },
      {
        name: 'Goiânia',
        stateId: 9,
      },
      {
        name: 'João Pessoa',
        stateId: 15,
      },
      {
        name: 'Manaus',
        stateId: 4,
      },
      {
        name: 'Porto Alegre',
        stateId: 21,
      },
      {
        name: 'Recife',
        stateId: 17,
      },
      {
        name: 'Rio de Janeiro',
        stateId: 19,
      },
      {
        name: 'Salvador',
        stateId: 5,
      },
      {
        name: 'São Luís',
        stateId: 10,
      },
      {
        name: 'São Paulo',
        stateId: 25,
      },
      {
        name: 'Teresina',
        stateId: 18,
      },
      {
        name: 'Vitória',
        stateId: 8,
      },
      {
        name: 'Natal',
        stateId: 20,
      },
      {
        name: 'Porto Velho',
        stateId: 22,
      },
      {
        name: 'Boa Vista',
        stateId: 23,
      },
      {
        name: 'Maceió',
        stateId: 2,
      },
      {
        name: 'Macapá',
        stateId: 3,
      },
      {
        name: 'Palmas',
        stateId: 27,
      },
      {
        name: 'Aracaju',
        stateId: 26,
      },
      {
        name: 'Rio Branco',
        stateId: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Citys', null, {});
  }
};
