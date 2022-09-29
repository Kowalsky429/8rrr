import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Cooperation() {
  return (
    <section id="wspolpraca" className="max-w-[1400px] mx-auto py-6 px-5">
      <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12 lg:mb-24">
        Współpraca
        <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[70px] h-[120%] -z-10 bg-white bg-opacity-10 rounded-lg md:w-[80px] lg:w-[130px]" />
      </h3>
      <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
        Współpraca, na co wzrócić uwagę?
      </h4>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 mb-12 lg:mb-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec massa
        venenatis in laoreet. Nunc nisl egestas adipiscing pellentesque congue
        venenatis. Aenean est dolor tincidunt eu, lacus ut ullamcorper. Mauris
        nisl nibh suspendisse eu sagittis. Adipiscing lobortis tristique in
        purus, id sapien suspendisse vulputate. Ut est eget commodo, nisi
        fringilla. Fermentum sed tempus, ut accumsan aenean ipsum magna
        tristique neque. Nibh et imperdiet dolor consectetur vitae.
      </p>
      <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
        Jak wygląda współpraca?
      </h4>
      <ul
        role="list"
        className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9"
      >
        <li
          className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3 first-letter:text-light mb-8 lg:mb-12"
        >
          1. Przed rozpoczęciem współpracy otrzymujesz do wypełnienia
          dzienniczek bieżącego notowania spożycia, w którym opisujesz co
          zjadłeś i wypiłeś przez 3 dni (najczęściej dwa dni robocze i jeden
          dzień weekendowy). Jest to niezbędne do tego, abym poznała Twoje
          dotychczasowe żywienie, dzięki temu dieta będzie lepiej dopasowana do
          Ciebie, wykluczymy błędy które do tej pory popełniałeś oraz ocenimy
          pod względem jakościowym dietę
        </li>
        <li
          className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3 first-letter:text-light mb-8 lg:mb-12"
        >
          2. Niezależnie od przypadku zawsze pytam o podstawowe badania krwi.
          Pamiętaj, że nawet zdrowa osoba raz w roku powinna sprawdzić stan
          swojego organizmu. Niekiedy potrzebne są bardziej szczegółowe badania,
          tak aby mieć lepszy obraz stanu Twojego zdrowia.
        </li>
        <li
          className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3 first-letter:text-light mb-8 lg:mb-12"
        >
          3. Podczas pierwszej konsultacji przeprowadzam wywiad
          zdrowotno-żywieniowy w celu poznania Twojego stanu zdrowia, stylu
          życia, preferencji żywieniowych. Omawiamy dotychczasowe żywienie oraz
          uczę Cię jak zmienić nawyki żywieniowe na lepsze.
        </li>
        <li
          className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3  first-letter:text-light mb-8 lg:mb-12"
        >
          4. Po konsultacji mam 7 dni na przygotowanie indywidualnego planu
          żywieniowego dla Ciebie, który otrzymujesz na maila.
        </li>
        <li
          className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3  first-letter:text-light mb-8 lg:mb-12"
        >
          5. Podczas drugiej konsultacji omawiamy przygotowany przeze mnie plan
          żywieniowy. Oceniasz czy uda się go wprowadzić w życie, czy smakują ci
          potrawy, jakie są Twoje wnioski oraz spostrzeżenia.
        </li>
        <li
          className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3  first-letter:text-light mb-12 lg:mb-24"
        >
          6. Gdy otrzymujesz plan żywieniowy zaczynasz nowy etap w swoim życiu.
          Moim zadaniem jest wsparcie oraz motywowanie Ciebie. Mamy stały
          kontakt mailowy, dzięki temu wiem co u Ciebie słychać oraz jak
          wyglądają postępy. Co dwa tygodnie robisz pomiary swojego ciała.
          Dzięki temu możemy monitorować efekty naszej współpracy oraz
          wprowadzać korekty, jeśli jest to konieczne.
        </li>
      </ul>
      <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
        Przykładowe dania
      </h4>
      <Swiper
        className="mb-12 lg:mb-40"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[220px] md:h-[320px] bg-grey text-white rounded-lg">
            <img
              src="/swiper6.webp"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              alt="image of dish"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[220px] md:h-[320px] bg-grey text-white rounded-lg">
            <img
              src="/swiper2.webp"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              alt="image of dish"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[220px] md:h-[320px] bg-grey text-white rounded-lg">
            <img
              src="/swiper3.webp"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              alt="image of dish"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[220px] md:h-[320px] bg-grey text-white rounded-lg">
            <img
              src="/swiper4.webp"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              alt="image of dish"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[220px] md:h-[320px] bg-grey text-white rounded-lg">
            <img
              src="/swiper5.webp"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              alt="image of dish"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[220px] md:h-[320px] bg-grey text-white rounded-lg">
            <img
              src="/swiper6.webp"
              className="absolute w-[100%] h-[100%] object-cover rounded-lg"
              alt="image of dish"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Cooperation;
