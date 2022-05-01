module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms',
    [
      {
        img: 'https://s2.glbimg.com/A9KYG2fcR9VU8UJeLj_z93dTpo4=/smart/e.glbimg.com/og/ed/f/original/2019/05/23/nobu-ryokan-malibu-beachfront-room.jpg',
        qtDoubleBed: 1,
        qtSingleBed: 0,
        dailyPrice: 380,
        hotelId: 1,
      },
      {
        img: 'https://www.pousadadoschas.com.br/blog/wp-content/uploads/2020/12/142.jpeg',
        qtDoubleBed: 0,
        qtSingleBed: 2,
        dailyPrice: 150,
        hotelId: 2,
      },
      {
        img:'https://media-cdn.tripadvisor.com/media/photo-s/0d/42/a4/e2/quarto-com-opcao-de-cama.jpg',
        qtDoubleBed: 1,
        qtSingleBed: 1,
        dailyPrice: 200,
        hotelId: 3,
      },
      {
        img: 'https://images.focomultimidia.com/curl/motor_reserva/images/quarto/cliente_1213/2019042615563064672.jpg',
        qtDoubleBed: 1,
        qtSingleBed: 2,
        dailyPrice: 480,
        hotelId: 4,
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {})
  },
};
