import React from 'react';
import Link from 'next/link';
import { BsFillPersonCheckFill, BsCheckCircleFill } from 'react-icons/bs';
import { FaAppleAlt } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="omnie" className="pt-16 px-5 max-w-[1400px] mx-auto">
      <div className="xl:flex justify-between items-center">
        <div className="xl:max-w-[700px]">
          <h4>Hej! O to kilka słów o mnie...</h4>
          <p>
            Jestem dietetykiem, aktualnie w trakcie studiów magisterskich.
            <span className="dark:text-light">
              {' '}
              Ukończyłam liczne szkolenia z zakresu dietetyki i dietoterapii.{' '}
            </span>
            Mam świadomość, że żywienie to skomplikowane i mocno indywidualne
            zagadnienie, dlatego wciąż poszerzam swoją wiedzę. Jestem pasjonatką
            zdrowego stylu życia i holistycznego podejścia do zdrowia. Moją
            miłością (oprócz partnera) są długie i powolne poranki, dobra kawa,
            czekolada i masło orzechowe. Uwielbiam gotować. Pewnie gdyby nie
            praca, większość czasu spędzałabym w kuchni. W swojej codziennej
            praktyce wyznaję{' '}
            <span className="dark:text-light">zasadę 80/20.</span> Uważam, że w
            naszym jadłospisie może znaleźć się miejsce na bardziej przetworzoną
            żywność, jeżeli zadbamy o zdrowe podstawy. Pracuję głównie z
            kobietami. Specjalizuję się w dietoterapii:
          </p>
        </div>
        <div className="relative w-full min-w-[300px] h-[350px] md:max-w-[700px] md:h-[400px] xl:w-[500px] xl:h-[500px] md:mx-auto dark:border-4 border-2 border-[#444] dark:border-active my-12">
          <img src="/portrait.webp" alt="portrait" loading="lazy" />
        </div>
      </div>
      <h4>Specjalizacje</h4>
      <ul role="list" className="mb-6 lg:mb-8">
        <li>Niedoczynności tarczycy i Hashimoto</li>
        <li>Trądziku hormonalnego</li>
        <li>IBS (zespołu jelita drażliwego)</li>
        <li>Anemii</li>
        <li>Nadwagi i otyłości</li>
      </ul>
      <p className="dark:text-light">
        Zapraszam Cię do wspólnego działania i motywowania się, aby być ZDROWY!
      </p>
      <div className="relative w-full h-[200px] md:h-[260px] lg:h-[320px] my-12 lg:my-24 dark:border-4 border-2 border-[#444] dark:border-active dark:opacity-30">
        <img src="/baner.webp" alt="image of dish" loading="lazy" />
      </div>
      <div className="w-full px-4 lg:flex lg:items-center lg:justify-between lg:px-0 my-16 lg:my-28">
        <div className="flex flex-col items-center mb-20 lg:mb-0">
          <BsFillPersonCheckFill size={36} className="mb-6" />
          <p className="max-w-[360px] text-center mb-6">
            Dostosuję dietę do twojego obecnego trybu życia
          </p>
          <h5>Inwidualne podejście</h5>
        </div>
        <div className="flex flex-col items-center mb-20 lg:mb-0">
          <FaAppleAlt size={36} className="mb-6" />
          <p className="max-w-[360px] text-center mb-6">
            Zdrowo i smacznie aby podróż po lepsze Ja była jak najbardziej
            przyjemna
          </p>
          <h5>Zdrowa dieta</h5>
        </div>
        <div className="flex flex-col items-center">
          <BsCheckCircleFill size={36} className="mb-6" />
          <p className="max-w-[360px] text-center mb-6">
            Zależy mi aby podopieczny był zadowolony z osiagniętych celów
          </p>
          <h5>Satysfakcja z efektów</h5>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
