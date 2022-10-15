import React from 'react';
import { Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PriceList() {
  return (
    <section id="cennik" className="py-6">
      <h3>
        Cennik
        <div className="w-[60px] lg:w-[100px]" />
      </h3>
      <h4>Czym kierować się przy wyborze usługi?</h4>
      <p>
        Przed wizytą dietetyk zaleca prowadzenie dzienniczka żywieniowego. rzez
        trzy dni należy skrupulatnie zapisywać: co się jadło, jaka była wielkość
        porcji, o której godzinie, gdzie i wpisać ewentualne uwagi. Na tej
        podstawie dietetyk jest w stanie wyciągnąć wnioski co do sposobu
        żywienia i zasugerować co warto zmienić. Kolejną rzeczą do zrobienia
        przed pojawieniem się na konsultacji dietetycznej jest wykonanie
        podstawowych badań takich jak morfologia, lipidogram, glukoza aby ocenić
        stan zdrowia. Pozwoli to na optymalne ułożenie diety.
      </p>
      <Swiper
        className="my-12 lg:my-40"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-5 px-4 lg:px-6 lg:py-7 bg-black bg-opacity-20 dark:bg-opacity-30 rounded-lg mb-12">
            <h5 className="mb-6 lg:mb-12">3 miesiące współpracy (6 spotkań)</h5>
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl text-active lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6 lg:mb-0">
                1050.00PLN
              </h2>
              <p className="lg:max-w-[600px] mb-6">
                Współpraca indywidualna to rodzaj współpracy, podczas której
                wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                potrzeby żywieniowe.
              </p>
            </div>
            <ul role="list">
              <li>
                omówienie kluczowych problemów oraz sposobu ich rozwiązania
              </li>
              <li>
                analizę sposobu odżywiania i stylu życia oraz proponowane zmiany
              </li>
              <li>
                indywidualnie przygotowany jadłospis, dostosowany do Twoich
                preferencji i możliwości*
              </li>
              <li>ewentualny plan suplementacyjny</li>
              <li>dziennik odżywiania do monitorowania procesu zmiany</li>
              <li>nielimitowane konsultacje mailowe</li>
              <li>
                4 konsultacje online (30-60 min) na wybranym komunikatorze z
                możliwością wprowadzania zmian w każdym tygodniu trwania
                współpracy
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5 px-4 lg:px-6 lg:py-7 bg-black bg-opacity-20 dark:bg-opacity-30 rounded-lg mb-12">
            <h5 className="mb-6 lg:mb-12">1 miesiąc współpracy (3 spotkań)</h5>
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl text-active lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6 lg:mb-0">
                350.00PLN
              </h2>
              <p className="lg:max-w-[600px] mb-6">
                Współpraca indywidualna to rodzaj współpracy, podczas której
                wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                potrzeby żywieniowe.
              </p>
            </div>
            <ul role="list">
              <li>
                omówienie kluczowych problemów oraz sposobu ich rozwiązania
              </li>
              <li>
                analizę sposobu odżywiania i stylu życia oraz proponowane zmiany
              </li>
              <li>
                indywidualnie przygotowany jadłospis, dostosowany do Twoich
                preferencji i możliwości*
              </li>
              <li>ewentualny plan suplementacyjny</li>
              <li>dziennik odżywiania do monitorowania procesu zmiany</li>
              <li>nielimitowane konsultacje mailowe</li>
              <li>
                4 konsultacje online (30-60 min) na wybranym komunikatorze z
                możliwością wprowadzania zmian w każdym tygodniu trwania
                współpracy
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5 px-4 lg:px-6 lg:py-7 bg-black bg-opacity-20 dark:bg-opacity-30 rounded-lg mb-12">
            <h5 className="mb-6 lg:mb-12">Inwidualny jadłospis 7-dniowy</h5>
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl text-active lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6 lg:mb-0">
                150.00PLN
              </h2>
              <p className="lg:max-w-[600px] mb-6">
                Współpraca indywidualna to rodzaj współpracy, podczas której
                wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                potrzeby żywieniowe.
              </p>
            </div>
            <ul role="list">
              <li>
                omówienie kluczowych problemów oraz sposobu ich rozwiązania
              </li>
              <li>
                analizę sposobu odżywiania i stylu życia oraz proponowane zmiany
              </li>
              <li>
                indywidualnie przygotowany jadłospis, dostosowany do Twoich
                preferencji i możliwości*
              </li>
              <li>ewentualny plan suplementacyjny</li>
              <li>dziennik odżywiania do monitorowania procesu zmiany</li>
              <li>nielimitowane konsultacje mailowe</li>
              <li>
                4 konsultacje online (30-60 min) na wybranym komunikatorze z
                możliwością wprowadzania zmian w każdym tygodniu trwania
                współpracy
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5 px-4 lg:px-6 lg:py-7 bg-black bg-opacity-20 dark:bg-opacity-30 rounded-lg">
            <h5 className="mb-6 lg:mb-12">Jednorazowa konsultacja</h5>
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl text-active  lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6 lg:mb-0">
                100.00PLN
              </h2>
              <p className="lg:max-w-[600px] mb-6">
                Współpraca indywidualna to rodzaj współpracy, podczas której
                wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                potrzeby żywieniowe.
              </p>
            </div>
            <ul role="list">
              <li>
                omówienie kluczowych problemów oraz sposobu ich rozwiązania
              </li>
              <li>
                analizę sposobu odżywiania i stylu życia oraz proponowane zmiany
              </li>
              <li>
                indywidualnie przygotowany jadłospis, dostosowany do Twoich
                preferencji i możliwości*
              </li>
              <li>ewentualny plan suplementacyjny</li>
              <li>dziennik odżywiania do monitorowania procesu zmiany</li>
              <li>nielimitowane konsultacje mailowe</li>
              <li>
                4 konsultacje online (30-60 min) na wybranym komunikatorze z
                możliwością wprowadzania zmian w każdym tygodniu trwania
                współpracy
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default PriceList;
