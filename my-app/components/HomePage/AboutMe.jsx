import React from 'react';
import Link from 'next/link';
import { BsFillPersonCheckFill, BsCheckCircleFill } from 'react-icons/bs';
import { FaAppleAlt } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section
      id="omnie"
      className="pt-16 px-5 flex flex-col max-w-[1400px] mx-auto"
    >
      <div className="md:flex justify-between items-center">
        <div className="max-w-[700px]">
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
            Hej! O to kilka słów o mnie...
          </h4>
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
            Jestem dietetykiem, aktualnie w trakcie studiów magisterskich.
            <span className="text-light font-semibold">
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
            <span className="text-light font-semibold">zasadę 80/20.</span>{' '}
            Uważam, że w naszym jadłospisie może znaleźć się miejsce na bardziej
            przetworzoną żywność, jeżeli zadbamy o zdrowe podstawy. Pracuję
            głównie z kobietami. Specjalizuję się w dietoterapii:
          </p>
        </div>
        <div className="relative w-full min-w-[300px] md:max-w-[500px] h-[350px] md:h-[600px] md:ml-6 border-4 border-active my-12">
          <img
            src="/portrait.webp"
            alt="portrait"
            className="absolute w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
      <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
        Specjalizacje
      </h4>
      <ul
        role="list"
        className="marker:text-light list-disc pl-4 space-y-3 sm:text-lg sm:leading-10 lg:text-xl lg:leading-14 leading-9 mb-6 lg:mb-12"
      >
        <li>Niedoczynności tarczycy i Hashimoto</li>
        <li>Trądziku hormonalnego</li>
        <li>IBS (zespołu jelita drażliwego)</li>
        <li>Anemii</li>
        <li>Nadwagi i otyłości</li>
      </ul>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 text-light">
        Zapraszam Cię do wspólnego działania i motywowania się, aby być ZDROWY!
      </p>
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] my-12 lg:my-40 border-4 border-active dark:opacity-30">
        <img
          src="/s.jpg"
          alt="image of dish"
          className="absolute w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col lg:flex-row md:justify-between md:items-center">
        <h4 className="max-w-[700px] text-xl sm:text-2xl lg:text-3xl md:mb-0 leading-9 sm:leading-14 lg:leading-14 mb-6 lg:mb-0">
          Jesteś zainteresowany/ana? Zobacz oferty jakie oferuję i dowiedz się
          szczegółów
        </h4>
        <Link href="#cennik">
          <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 flex items-center justify-center hover:border-active hover:text-active">
            <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
              Zobacz oferty
            </p>
          </button>
        </Link>
      </div>
      <div className="w-full py-6 px-4 lg:flex lg:items-center lg:justify-between lg:px-0 my-12 lg:my-40">
        <div className="flex flex-col items-center mb-20 lg:mb-0">
          <BsFillPersonCheckFill size={36} className="mb-6" />
          <p className="max-w-[360px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-center mb-6">
            Dostosuję dietę i godziny żywienia do twojego trybu życia
          </p>
          <h4 className="text-lg sm:text-xl lg:text-2xl text-light">
            Inwidualne podejście
          </h4>
        </div>
        <div className="flex flex-col items-center mb-20 lg:mb-0">
          <FaAppleAlt size={36} className="mb-6" />
          <p className="max-w-[360px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-center mb-6">
            Zdrowo i smacznie aby podróz po lepsze Ja była jak najbardziej
            przyjemna
          </p>
          <h4 className="text-lg sm:text-xl lg:text-2xl text-light">
            Zdrowa dieta
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <BsCheckCircleFill size={36} className="mb-6" />
          <p className="max-w-[360px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-center mb-6">
            Zależy mi aby podopieczny był zadowolony z osiagniętych celów
          </p>
          <h4 className="text-lg sm:text-xl lg:text-2xl text-light">
            Satysfakcja z efektów
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
