import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillPersonCheckFill, BsCheckCircleFill } from 'react-icons/bs';
import { FaAppleAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <div className="w-full font-kalam bg-grey text-white">
      <Head>
        <title>patkadietetycznie</title>
        <meta
          name="description"
          content="Indywidualnie dopasowane diety odchudzające. Wejdź na stronę i sprawdź adres gabinetu! Z nami zrzucisz zbędne kilogramy i pozbędziesz się nadwagi!..."
        />
        <meta
          name="keywords"
          content="Patrycja Janik, dietetyk, dietetyk powszechny, dietetyk online, poradnia dietetyczna, wspolczesna dietetyka, lekarz dietetyk, ile kosztuje dietetyk, gabinet dietetyczny, dobry dietetyk online, rozpisane diety cena, najlepsi dietetycy online, ukladanie diety online, lekarz dietetyk kliniczny, najlepszy dietetyk, dietetyk opole, dietetyk polska, najlepszy dietetyk opole, polecany dietetyk, polecany dietetyk opole, tani dobry dietetyk, jak schudnac, jak zdrowo sie odzywiac, dieta, Zdrowie, porady o zdrowym zywieniu, sumplementacja, zdrowe dania, zrzucenie wagi, zdrowie, ukladanie jadlospisow, dietetyk online"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <article>
        <header className="w-full h-[500px] lg:h-[100vh] px-6 py-6 lg:py-10 relative bg-black bg-my_bg_image bg-cover bg-center">
          <div className="w-full max-w-[1180px] h-full flex flex-col justify-between items-center mx-auto">
            <nav className="w-full flex items-center justify-between">
              <div className="flex items-start">
                <h1 className="text-xl lg:text-2xl">patkadietetycznie</h1>
              </div>
              <ul className="hidden md:block lg:text-lg">
                <Link href="#home">
                  <a className="hover:text-light">O mnie</a>
                </Link>
                <Link href="#wspolpraca">
                  <a className="ml-12 hover:text-light">Współpraca</a>
                </Link>
                <Link href="/cennik">
                  <a className="ml-12 hover:text-light">Cennik</a>
                </Link>
                <Link href="/blog">
                  <a className="ml-12 hover:text-light">Blog</a>
                </Link>
                <Link href="/faq">
                  <a className="ml-12 hover:text-light">Faq</a>
                </Link>
                <Link href="/contact">
                  <a className="ml-12 hover:text-light">Kontakt</a>
                </Link>
              </ul>
              {state ? (
                <AiOutlineClose
                  size={24}
                  className="md:hidden z-20 fixed top-6 right-6"
                  onClick={() => setState((prevState) => !prevState)}
                />
              ) : (
                <AiOutlineMenu
                  size={24}
                  className="md:hidden z-20"
                  onClick={() => setState((prevState) => !prevState)}
                />
              )}

              <ul
                className={`${
                  state ? 'fixed' : 'hidden'
                } w-[100vw] h-[100vh] bg-menuCover flex flex-col items-center justify-evenly top-0 left-0 text-center mx-auto text-xl z-10`}
              >
                <Link href="/home">
                  <a className="hover:text-light">O mnie</a>
                </Link>
                <Link href="/wspolpraca">
                  <a className="hover:text-light">Współpraca</a>
                </Link>
                <Link href="/cennik">
                  <a className="hover:text-light">Cennik</a>
                </Link>
                <Link href="/blog">
                  <a className="hover:text-light">Blog</a>
                </Link>
                <Link href="/faq">
                  <a className="hover:text-light">Faq</a>
                </Link>
                <Link href="/contact">
                  <a className="hover:text-light">Kontakt</a>
                </Link>
              </ul>
            </nav>
            <div>
              <h2 className="text-4xl lg:text-6xl text-center text-active">
                Twoja przemiana zaczyna się tutaj!
              </h2>
              <p className="lg:text-xl mt-5 text-center cursor-pointer hover:">
                kliknij aby dowiedzieć się wiecej
              </p>
            </div>
            <div className="w-[90px] lg:w-[120px] lg:py-2 py-1 px-4 flex items-start justify-center border-3 border-white rounded-lg cursor-pointer hover:border-light">
              <IoIosArrowDown size={30} />
            </div>
          </div>
        </header>
        <section
          id="onie"
          className="pt-16 px-6 flex flex-col max-w-[1400px] mx-auto"
        >
          <div className="md:flex justify-between items-center">
            <div className="max-w-[700px]">
              <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
                Hej! O to kilka słów o mnie...
              </h4>
              <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                Jestem dietetykiem, aktualnie w trakcie studiów magisterskich.
                <span className="text-light">
                  {' '}
                  Ukończyłam liczne szkolenia z zakresu dietetyki i
                  dietoterapii.{' '}
                </span>
                Mam świadomość, że żywienie to skomplikowane i mocno
                indywidualne zagadnienie, dlatego wciąż poszerzam swoją wiedzę.
                Jestem pasjonatką zdrowego stylu życia i holistycznego podejścia
                do zdrowia. Moją miłością (oprócz partnera) są długie i powolne
                poranki, dobra kawa, czekolada i masło orzechowe. Uwielbiam
                gotować. Pewnie gdyby nie praca, większość czasu spędzałabym w
                kuchni. W swojej codziennej praktyce wyznaję{' '}
                <span className="text-light">zasadę 80/20.</span> Uważam, że w
                naszym jadłospisie może znaleźć się miejsce na bardziej
                przetworzoną żywność, jeżeli zadbamy o zdrowe podstawy. Pracuję
                głównie z kobietami. Specjalizuję się w dietoterapii:
              </p>
            </div>
            <div className="relative w-full min-w-[300px] md:max-w-[500px] h-[350px] md:h-[600px] md:ml-6 border-4 border-active my-20">
              <img
                src="/portrait.jpg"
                alt="portrait"
                className="absolute w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Specjalizacje
          </h4>
          <ul className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-10 mb-6">
            <li>Niedoczynności tarczycy i Hashimoto</li>
            <li>Trądziku hormonalnego</li>
            <li>IBS (zespołu jelita drażliwego)</li>
            <li>Anemii</li>
            <li>Nadwagi i otyłości</li>
          </ul>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light">
            Zapraszam Cię do wspólnego działania i motywowania się, aby być
            ZDROWY!
          </p>
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] border-4 border-active my-20">
            <img
              src="/dish.jpg"
              alt="portrait"
              className="absolute w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col lg:flex-row md:justify-between md:items-center">
            <h4 className="max-w-[700px] text-xl sm:text-2xl lg:text-3xl md:mb-0 leading-9 sm:leading-14 lg:leading-14 mb-6">
              Jesteś zainteresowany/ana? Zobacz oferty jakie oferuję i dowiedz
              się szczegółów
            </h4>
            <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 flex items-center justify-center">
              <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                Zobacz oferty
              </p>
            </button>
          </div>
          <div className="w-full py-6 px-4 lg:flex lg:items-center lg:justify-between lg:px-0 my-20">
            <div className="flex flex-col items-center mb-20 lg:mb-0">
              <BsFillPersonCheckFill size={36} className="mb-6" />
              <p className="max-w-[360px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-center mb-6">
                Dostosuję dietę i godziny żywienia do twojego trybu życia
              </p>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light">
                Inwidualne podejście
              </h4>
            </div>
            <div className="flex flex-col items-center mb-20 lg:mb-0">
              <FaAppleAlt size={36} className="mb-6" />
              <p className="max-w-[360px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-center mb-6">
                Zdrowo i smacznie aby podróz po lepsze Ja była jak najbardziej
                przyjemna
              </p>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light">
                Zdrowa dieta
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <BsCheckCircleFill size={36} className="mb-6" />
              <p className="max-w-[360px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-center mb-6">
                Zależy mi aby podopieczny był zadowolony z osiagniętych celów
              </p>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light">
                Satysfakcja z efektów
              </h4>
            </div>
          </div>
        </section>
        <section id="wspolpraca" className="max-w-[1400px] mx-auto py-6 px-6">
          <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12">
            Współpraca
            <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[70px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[130px]" />
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Współpraca, na co wzrócić uwagę?
          </h4>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec massa
            venenatis in laoreet. Nunc nisl egestas adipiscing pellentesque
            congue venenatis. Aenean est dolor tincidunt eu, lacus ut
            ullamcorper. Mauris nisl nibh suspendisse eu sagittis. Adipiscing
            lobortis tristique in purus, id sapien suspendisse vulputate. Ut est
            eget commodo, nisi fringilla. Fermentum sed tempus, ut accumsan
            aenean ipsum magna tristique neque. Nibh et imperdiet dolor
            consectetur vitae.
          </p>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Jak wygląda współpraca?
          </h4>
          <ul
            role="list"
            className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8"
          >
            <li
              className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3 first-letter:text-light mb-6"
            >
              1. Przed rozpoczęciem współpracy otrzymujesz do wypełnienia
              dzienniczek bieżącego notowania spożycia, w którym opisujesz co
              zjadłeś i wypiłeś przez 3 dni (najczęściej dwa dni robocze i jeden
              dzień weekendowy). Jest to niezbędne do tego, abym poznała Twoje
              dotychczasowe żywienie, dzięki temu dieta będzie lepiej dopasowana
              do Ciebie, wykluczymy błędy które do tej pory popełniałeś oraz
              ocenimy pod względem jakościowym dietę
            </li>
            <li
              className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3 first-letter:text-light mb-6"
            >
              2. Niezależnie od przypadku zawsze pytam o podstawowe badania
              krwi. Pamiętaj, że nawet zdrowa osoba raz w roku powinna sprawdzić
              stan swojego organizmu. Niekiedy potrzebne są bardziej szczegółowe
              badania, tak aby mieć lepszy obraz stanu Twojego zdrowia.
            </li>
            <li
              className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3 first-letter:text-light mb-6"
            >
              3. Podczas pierwszej konsultacji przeprowadzam wywiad
              zdrowotno-żywieniowy w celu poznania Twojego stanu zdrowia, stylu
              życia, preferencji żywieniowych. Omawiamy dotychczasowe żywienie
              oraz uczę Cię jak zmienić nawyki żywieniowe na lepsze.
            </li>
            <li
              className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3  first-letter:text-light mb-6"
            >
              4. Po konsultacji mam 7 dni na przygotowanie indywidualnego planu
              żywieniowego dla Ciebie, który otrzymujesz na maila.
            </li>
            <li
              className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3  first-letter:text-light mb-6"
            >
              5. Podczas drugiej konsultacji omawiamy przygotowany przeze mnie
              plan żywieniowy. Oceniasz czy uda się go wprowadzić w życie, czy
              smakują ci potrawy, jakie są Twoje wnioski oraz spostrzeżenia.
            </li>
            <li
              className="
  first-letter:text-4xl first-letter:font-bold
  first-letter:mr-3  first-letter:text-light mb-12"
            >
              6. Gdy otrzymujesz plan żywieniowy zaczynasz nowy etap w swoim
              życiu. Moim zadaniem jest wsparcie oraz motywowanie Ciebie. Mamy
              stały kontakt mailowy, dzięki temu wiem co u Ciebie słychać oraz
              jak wyglądają postępy. Co dwa tygodnie robisz pomiary swojego
              ciała. Dzięki temu możemy monitorować efekty naszej współpracy
              oraz wprowadzać korekty, jeśli jest to konieczne.
            </li>
          </ul>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Przykładowe dania
          </h4>
          <Swiper
            className="mb-20"
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
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider1.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider2.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider3.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider4.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider5.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider2.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider1.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[200px] md:h-[400px] bg-grey text-white rounded-lg">
                <img
                  src="/slider4.jpg"
                  className="absolute w-[100%] h-[100%] object-cover rounded-lg"
                  alt="image of dish"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section id="cennik" className="max-w-[1400px] mx-auto py-6 px-6">
          <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12">
            Cennik
            <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[100px]" />
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Czym kierować się przy wyborze usługi?
          </h4>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec massa
            venenatis in laoreet. Nunc nisl egestas adipiscing pellentesque
            congue venenatis. Aenean est dolor tincidunt eu, lacus ut
            ullamcorper. Mauris nisl nibh suspendisse eu sagittis. Adipiscing{' '}
          </p>
          <div className="my-20">
            <div className="py-5 px-4 lg:px-6 lg:py-7 bg-cardCover rounded-lg mb-12">
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                3 miesiące współpracy (6 spotkań)
              </h4>
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl text-active lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6">
                  1050.00PLN
                </h2>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 lg:max-w-[600px] mb-12">
                  Współpraca indywidualna to rodzaj współpracy, podczas której
                  wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                  wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                  lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                  potrzeby żywieniowe.
                </p>
              </div>
              <ul
                role="list"
                className="marker:text-light list-disc pl-5 space-y-3 sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8"
              >
                <li className="mb-6">
                  omówienie kluczowych problemów oraz sposobu ich rozwiązania
                </li>
                <li className="mb-6">
                  analizę sposobu odżywiania i stylu życia oraz proponowane
                  zmiany
                </li>
                <li className="mb-6">
                  indywidualnie przygotowany jadłospis, dostosowany do Twoich
                  preferencji i możliwości*
                </li>
                <li className="mb-6">ewentualny plan suplementacyjny</li>
                <li className="mb-6">
                  dziennik odżywiania do monitorowania procesu zmiany
                </li>
                <li className="mb-6">nielimitowane konsultacje mailowe</li>
                <li>
                  4 konsultacje online (30-60 min) na wybranym komunikatorze z
                  możliwością wprowadzania zmian w każdym tygodniu trwania
                  współpracy
                </li>
              </ul>
            </div>
            <div className="py-5 px-4 lg:px-6 lg:py-7 bg-cardCover rounded-lg mb-12">
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                1 miesiąc współpracy (3 spotkań)
              </h4>
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl text-active  lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6">
                  350.00PLN
                </h2>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8  lg:max-w-[600px] mb-12">
                  Współpraca indywidualna to rodzaj współpracy, podczas której
                  wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                  wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                  lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                  potrzeby żywieniowe.
                </p>
              </div>
              <ul
                role="list"
                className="marker:text-light list-disc pl-5 space-y-3 sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8"
              >
                <li className="mb-6">
                  omówienie kluczowych problemów oraz sposobu ich rozwiązania
                </li>
                <li className="mb-6">
                  analizę sposobu odżywiania i stylu życia oraz proponowane
                  zmiany
                </li>
                <li className="mb-6">
                  indywidualnie przygotowany jadłospis, dostosowany do Twoich
                  preferencji i możliwości*
                </li>
                <li className="mb-6">ewentualny plan suplementacyjny</li>
                <li className="mb-6">
                  dziennik odżywiania do monitorowania procesu zmiany
                </li>
                <li className="mb-6">nielimitowane konsultacje mailowe</li>
                <li>
                  4 konsultacje online (30-60 min) na wybranym komunikatorze z
                  możliwością wprowadzania zmian w każdym tygodniu trwania
                  współpracy
                </li>
              </ul>
            </div>
            <div className="py-5 px-4 lg:px-6 lg:py-7 bg-cardCover rounded-lg mb-12">
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                Inwidualny jadłospis 7-dniowy
              </h4>
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl text-active  lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6">
                  150.00PLN
                </h2>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8  lg:max-w-[600px] mb-12">
                  Współpraca indywidualna to rodzaj współpracy, podczas której
                  wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                  wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                  lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                  potrzeby żywieniowe.
                </p>
              </div>
              <ul
                role="list"
                className="marker:text-light list-disc pl-5 space-y-3 sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8"
              >
                <li className="mb-6">
                  omówienie kluczowych problemów oraz sposobu ich rozwiązania
                </li>
                <li className="mb-6">
                  analizę sposobu odżywiania i stylu życia oraz proponowane
                  zmiany
                </li>
                <li className="mb-6">
                  indywidualnie przygotowany jadłospis, dostosowany do Twoich
                  preferencji i możliwości*
                </li>
                <li className="mb-6">ewentualny plan suplementacyjny</li>
                <li className="mb-6">
                  dziennik odżywiania do monitorowania procesu zmiany
                </li>
                <li className="mb-6">nielimitowane konsultacje mailowe</li>
                <li>
                  4 konsultacje online (30-60 min) na wybranym komunikatorze z
                  możliwością wprowadzania zmian w każdym tygodniu trwania
                  współpracy
                </li>
              </ul>
            </div>
            <div className="py-5 px-4 lg:px-6 lg:py-7 bg-cardCover rounded-lg">
              <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                Jednorazowa konsultacja
              </h4>
              <div className="relative">
                <h2 className="text-4xl lg:text-6xl text-active  lg:absolute lg:-translate-y-1/2 top-1/2 right-8 mb-6">
                  100.00PLN
                </h2>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8  lg:max-w-[600px] mb-12">
                  Współpraca indywidualna to rodzaj współpracy, podczas której
                  wspólnie będziemy dążyć do osiągnięcia Twoich celów. To dobry
                  wybór, jeśli wolisz pracować z ustalonym wcześniej spisem dań
                  lub chcesz poznać nowe ciekawe przepisy dopasowane pod Twoje
                  potrzeby żywieniowe.
                </p>
              </div>
              <ul
                role="list"
                className="marker:text-light list-disc pl-5 space-y-3 sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8"
              >
                <li className="mb-6">
                  omówienie kluczowych problemów oraz sposobu ich rozwiązania
                </li>
                <li className="mb-6">
                  analizę sposobu odżywiania i stylu życia oraz proponowane
                  zmiany
                </li>
                <li className="mb-6">
                  indywidualnie przygotowany jadłospis, dostosowany do Twoich
                  preferencji i możliwości*
                </li>
                <li className="mb-6">ewentualny plan suplementacyjny</li>
                <li className="mb-6">
                  dziennik odżywiania do monitorowania procesu zmiany
                </li>
                <li className="mb-6">nielimitowane konsultacje mailowe</li>
                <li>
                  4 konsultacje online (30-60 min) na wybranym komunikatorze z
                  możliwością wprowadzania zmian w każdym tygodniu trwania
                  współpracy
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="blog" className="max-w-[1400px] mx-auto px-6 py-6">
          <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12">
            Blog
            <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[50px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[80px]" />
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Moje ostatnie przemyślenia...
          </h4>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec massa
            venenatis in laoreet. Nunc nisl egestas adipiscing pellentesque
            congue venenatis. Aenean est dolor tincidunt eu, lacus ut
            ullamcorper. Mauris nisl nibh suspendisse eu sagittis. Adipiscing
            lobortis tristique in purus, id sapien suspendisse vulputate. Ut est
            eget commodo, nisi fringilla. Fermentum sed tempus, ut accumsan
            aenean ipsum magna tristique neque.
          </p>
          <article>
            <section className="lg:flex lg:bg-cardCover lg:rounded-lg mb-12">
              <div className="relative w-full h-[200px] md:h-[240px] lg:h-[360px] lg:max-w-[500px] mb-6">
                <img
                  src="slider1.jpg"
                  alt="image of blog"
                  className="absolute w-full h-full object-cover object-center rounded-lg lg:rounded-none lg:rounded-l-lg"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-12">
                <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                  Letnia sałatka z prostych składników
                </h4>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 lg:text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  massa venenatis in laoreet. Nunc nisl egestas adipiscing{' '}
                </p>
                <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 lg:py-1 lg:px-24 flex items-center justify-center">
                  <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                    Czytaj dalej...
                  </p>
                </button>
              </div>
            </section>
            <section className="lg:flex lg:bg-cardCover lg:rounded-lg mb-12">
              <div className="relative w-full h-[200px] md:h-[240px] lg:h-[360px] lg:max-w-[500px] mb-6">
                <img
                  src="slider3.jpg"
                  alt="image of blog"
                  className="absolute w-full h-full object-cover object-center rounded-lg lg:rounded-none lg:rounded-l-lg"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-12">
                <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                  Przekąski na filmowe wieczory
                </h4>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 lg:text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  massa venenatis in laoreet. Nunc nisl egestas adipiscing{' '}
                </p>
                <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 lg:py-1 lg:px-24 flex items-center justify-center">
                  <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                    Czytaj dalej...
                  </p>
                </button>
              </div>
            </section>
            <section className="lg:flex lg:bg-cardCover lg:rounded-lg mb-12">
              <div className="relative w-full h-[200px] md:h-[240px] lg:h-[360px] lg:max-w-[500px] mb-6 lg:mb-0">
                <img
                  src="slider2.jpg"
                  alt="image of blog"
                  className="absolute w-full h-full object-cover object-center rounded-lg lg:rounded-none lg:rounded-l-lg"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-12">
                <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                  Sałatka z kurczakiem i pomidorami
                </h4>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 lg:text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  massa venenatis in laoreet. Nunc nisl egestas adipiscing{' '}
                </p>
                <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 lg:py-1 lg:px-24 flex items-center justify-center">
                  <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                    Czytaj dalej...
                  </p>
                </button>
              </div>
            </section>
            <section className="lg:flex lg:bg-cardCover lg:rounded-lg">
              <div className="relative w-full h-[200px] md:h-[240px] lg:h-[360px] lg:max-w-[500px] mb-6 lg:mb-0">
                <img
                  src="slider4.jpg"
                  alt="image of blog"
                  className="absolute w-full h-full object-cover object-center rounded-lg lg:rounded-none lg:rounded-l-lg"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-12">
                <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-6">
                  Grillowane warzywa z dodatkami
                </h4>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 lg:text-center mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  massa venenatis in laoreet. Nunc nisl egestas adipiscing{' '}
                </p>
                <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 lg:py-1 lg:px-24 flex items-center justify-center mb-20">
                  <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                    Czytaj dalej...
                  </p>
                </button>
              </div>
            </section>
          </article>
        </section>
        <section id="faq" className="max-w-[1400px] mx-auto px-6 py-6">
          <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12">
            Faq
            <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[40px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[60px]" />
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
            Nie znasz odpowiedzi na pytania?
          </h4>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-12">
            Nie przejmuj się, o to zestaw najczęstszych pytań do dietetyków
            ktorzy zadają pacjenci zazwyczaj przed pierwsza wizytą. Jeśli masz
            inne pytanie śmiało zadaj je w formularzu kontaktowym poniżej!
          </p>
          <section>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6">
                Często zadawane pytania
              </h3>
              <div className="grid text-left border-t border-light md:gap-16 md:grid-cols-2">
                <div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Kiedy otrzymam gotowy jadłospis?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Opracowanie Indywidualnego Planu Żywieniowego trwa zwykle
                      kilka dni. Dietetyk musi dokładnie przeanalizować zebrane
                      od Ciebie informacje i napisać zdrowy, bezpieczny i przede
                      wszystkim skuteczny jadłospis, odpowiadający Twoim
                      wymaganiom. W celu otrzymania kompletnych materiałów wraz
                      z jadłospisem musisz przyjść do nas na jeszcze jedno
                      krótkie spotkanie (bezpłatne), podczas którego udzielimy
                      Ci wszystkich niezbędnych wyjaśnień i wskazówek
                      dotyczących stosowania jadłospisu. W indywidualnych
                      przypadkach, po wcześniejszych ustaleniach, materiały
                      możemy wysłać drogą e-mailową.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8  text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Jak są układane diety?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Diety układane są przez specjalistę dietetyka.
                      Indywidualne podejście do klienta gwarantuje dietę, która
                      zapewni organizmowi odpowiednią kaloryczność oraz
                      dostarczy wszystkich niezbędnych składników odżywczych
                      (białek, tłuszczy, węglowodanów oraz witamin i składników
                      mineralnych) w odpowiednich ilościach. Diety oparte są na
                      aktualnych zaleceniach Instytutu Żywności i Żywienia oraz
                      na nowej piramidzie żywienia, zgodnej z najświeższymi
                      badaniami naukowymi. Zbilansowana dieta w sposób naturalny
                      reguluje przemianę materii oraz likwiduje napady głodu
                    </p>
                  </div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8  text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Jak często muszą odbywać się wizyty kontrolne?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Wizyty kontrolne zwykle odbywają się co dwa tygodnie. Jest
                      to idealny moment na monitorowanie postępu dietoterapii i
                      ewentualne skorygowanie planu żywieniowego. Częstsze
                      spotkania nie odzwierciedlają osiągnięć, natomiast rzadsze
                      mogą powodować utratę motywacji. Wizyty trwają do momentu
                      osiągnięcia założonych celów. Możliwe są także wizyty raz
                      w miesiącu (np. dla osób dojeżdżających). Częstotliwość
                      wizyt ustali z Tobą indywidualnie dietetyk.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Czy aby schudnąć wystarczy sama dieta?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Niestety, sama dieta nie wystarczy. Organizm bardzo szybko
                      przystosowuje się do obniżonej kaloryczności posiłków,
                      spowalnia metabolizm i zmniejsza zapotrzebowanie na
                      energię. Jedynym sposobem na uniknięcie takiej sytuacji
                      jest regularna aktywność fizyczna. Nie musi to być od razu
                      duży wysiłek fizyczny. Można zacząć od 30 minutowych
                      marszów (szybkich spacerów) i powoli zwiększać ich
                      długość. Wysiłek fizyczny sprzyja utracie tkanki
                      tłuszczowej przy jednoczesnej ochronie zasobów białkowych
                      organizmu.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      What does "free updates" include?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      The free updates that will be provided is based on the{' '}
                      <a
                        href="#"
                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                      >
                        roadmap
                      </a>{' '}
                      that we have laid out for this project. It is also
                      possible that we will provide extra updates outside of the
                      roadmap as well.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      What does the free version include?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      The{' '}
                      <a
                        href="#"
                        className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                      >
                        free version
                      </a>{' '}
                      of Windster includes a minimal style guidelines, component
                      variants, and a dashboard page with the mobile version
                      alongside it.
                    </p>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      You can use this version for any purposes, because it is
                      open-source under the MIT license.
                    </p>
                  </div>
                  <div className="mb-12">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      What is the difference between Windster and Tailwind UI?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Although both Windster and Tailwind UI are built for
                      integration with Tailwind CSS, the main difference is in
                      the design, the pages, the extra components and UI
                      elements that Windster includes.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Additionally, Windster is a project that is still in
                      development, and later it will include both the
                      application, marketing, and e-commerce UI interfaces.
                    </p>
                  </div>
                  <div className="mb-20">
                    <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light mb-2">
                      <svg
                        className="flex-shrink-0 mr-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Can I use Windster in open-source projects?
                    </h3>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Generally, it is accepted to use Windster in open-source
                      projects, as long as it is not a UI library, a theme, a
                      template, a page-builder that would be considered as an
                      alternative to Windster itself.
                    </p>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      With that being said, feel free to use this design kit for
                      your open-source projects.
                    </p>
                    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                      Find out more information by reading license.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="kontakt" className="max-w-[1400px] mx-auto px-6 py-6">
          <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12 z-10">
            Kontakt
            <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[100px]" />
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-3xl mb-6 text-active">
            Masz pytanie? Pisz śmiało!
          </h4>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-20">
            Nie przejmuj się, o to zestaw najczęstszych pytań do dietetyków
            ktorzy zadają pacjenci zazwyczaj przed pierwsza wizytą. Jeśli masz
            inne pytanie śmiało zadaj je w formularzu kontaktowym poniżej!
          </p>
          <form method="post" className="flex flex-col">
            <label className="mb-6 flex items-center text-lg sm:text-xl lg:text-2xl text-light">
              Twoje imię*
            </label>
            <input
              type="text"
              placeholder="Imię"
              className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
            />
            <span className="my-8 flex flex-col">
              <label className="mb-6 flex items-center text-lg sm:text-xl lg:text-2xl text-light">
                Adres e-mail*
              </label>
              <input
                type="email"
                placeholder="przykładowy@email.com"
                className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
              />
            </span>
            <label className="mb-6 flex items-center text-lg sm:text-xl lg:text-2xl text-light">
              Treść wiadomości*
            </label>
            <textarea
              placeholder="Witam..."
              className="mb-8 h-[160px] lg:h-[260px] border-2 border-light rounded-lg bg-transparent text-light p-4 md:p-6 sm:text-lg lg:text-xl"
            ></textarea>
            <button className="rounded-lg bg-cardCover text-light py-5 px-6 sm:text-lg lg:text-xl mb-20">
              Wyślij wiadomość
            </button>
          </form>
        </section>
        <footer className="lg:text-left max-w-[1400px] mx-auto">
          <div className="flex justify-center items-center lg:justify-between p-6 border-b-2 border-light">
            <div className="mr-12">
              <p className="text-lg sm:text-xl lg:text-2xl">
                Get connected with us on social networks:
              </p>
            </div>
            <a href="#!" className="mr-6">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4
                  className="
   mb-6 text-lg sm:text-xl lg:text-2xl text-light
          "
                >
                  Patrycja Janik
                </h4>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="text-center">
                <h4 className="mb-6 text-lg sm:text-xl lg:text-2xl text-light">
                  Linki
                </h4>
                <p className="mb-6 lg:mb-8 sm:text-lg lg:text-xl hover:text-light">
                  <a href="#omnie">O mnie</a>
                </p>
                <p className="mb-6 lg:mb-8 sm:text-lg lg:text-xl hover:text-light">
                  <a href="#wspolpraca">Współpraca</a>
                </p>
                <p className="mb-6 lg:mb-8 sm:text-lg lg:text-xl hover:text-light">
                  <a href="#cennik">Cennik</a>
                </p>
                <p className="mb-6 lg:mb-8 sm:text-lg lg:text-xl hover:text-light">
                  <a href="#bloga">Blog</a>
                </p>
                <p className="sm:text-lg lg:text-xl hover:text-light">
                  <a href="#faq">Faq</a>
                </p>
              </div>
              <div className="">
                <h4 className="mb-6 text-lg sm:text-xl lg:text-2xl text-light">
                  Kontakt
                </h4>
                <p className="flex items-center justify-center md:justify-start sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-6">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  Opole, MS 62-277
                </p>
                <p className="flex items-center justify-center md:justify-start sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-6">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  przykladowy@email.com
                </p>
                <p className="flex items-center justify-center md:justify-start sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-6">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  + 48 251 715 188
                </p>
                <p className="flex items-center justify-center md:justify-start sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="print"
                    className="w-4 mr-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                    ></path>
                  </svg>
                  + 48 716 817 189
                </p>
              </div>
            </div>
          </div>
          <div className="text-center p-4 bg-cardCover md:justify-start sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light">
            <span>© 2022 Copyright website created by: </span>
            <a
              className="text-gray-600 font-semibold"
              href="https://tailwind-elements.com/"
            >
              Kowalsky429
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}
