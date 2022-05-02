import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardRooms from '../components/CardRooms';

import Header from '../components/Header';
import IntroHome from '../components/IntroHome';
import SelectReservation from '../components/SelectReservation';
import Footer from '../components/Footer';

import { getLocalStorage } from '../service/serviceLocalStorage';

export default function Home() {
  const navigate = useNavigate();
  const arrImgRoom = [
    {
      room: 'https://s2.glbimg.com/A9KYG2fcR9VU8UJeLj_z93dTpo4=/smart/e.glbimg.com/og/ed/f/original/2019/05/23/nobu-ryokan-malibu-beachfront-room.jpg',
      slide: 'slide1',
    },
    {
      room: 'https://www.pousadadoschas.com.br/blog/wp-content/uploads/2020/12/142.jpeg',
      slide: 'slide2',
    },
    {
      room: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/42/a4/e2/quarto-com-opcao-de-cama.jpg',
      slide: 'slide3',
    },
    {
      room: 'https://images.focomultimidia.com/curl/motor_reserva/images/quarto/cliente_1213/2019042615563064672.jpg',
      slide: 'slide4',
    }
  ];

  const selectRender = () => {
    return (
      <div className="min-h-screen bg-colorP05Dark">
        <Header />
        <div className="carousel w-full h-96">
          {arrImgRoom.map((item, index) => {
            let buttonLeft = '';
            let buttonRight = '';

            switch (item.slide) {
              case 'slide1':
                buttonLeft = 'slide4';
                buttonRight = 'slide2';
                break;
              case 'slide2':
                buttonLeft = 'slide1';
                buttonRight = 'slide3';
                break;
              case 'slide3':
                buttonLeft = 'slide2';
                buttonRight = 'slide4';
                break;
              default:
                buttonLeft = 'slide3';
                buttonRight = 'slide1';
            };
            return (
              <div key={index} id={ item.slide } className="carousel-item relative w-full">
                <img
                  src={item.room}
                  className="w-full object-cover"
                  alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#${buttonLeft}`} className="btn btn-circle">❮</a>
                  <a href={`#${buttonRight}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            );
          })}
        </div>
        <main
          id="main-home"
          className="w-full min-h-screen bg-colorP05Dark"
        >
          <section id="first-section-home">
            <SelectReservation />
          </section>
          <section id="second-section-home">
            <IntroHome />
          </section>
          <section id="third-section-home">
            <CardRooms />
          </section>
        </main>
        <Footer />
      </div>
    );
  };

  useEffect(() => {
    const dataApi = getLocalStorage('Token');

    if (!dataApi) {
      navigate('/login');
    }
  }, []);

  return selectRender();
}