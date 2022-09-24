import React from 'react';

function Faq() {
  return (
    <section id="faq" className="max-w-[1400px] mx-auto px-6 py-6">
      <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12 lg:mb-24">
        Faq
        <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[40px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[60px]" />
      </h3>
      <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
        Nie znasz odpowiedzi na pytania?
      </h4>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 mb-12 lg:mb-24">
        Nie przejmuj się, o to zestaw najczęstszych pytań do dietetyków ktorzy
        zadają pacjenci zazwyczaj przed pierwsza wizytą. Jeśli masz inne pytanie
        śmiało zadaj je w formularzu kontaktowym poniżej!
      </p>
      <section>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12">
            Często zadawane pytania
          </h3>
          <div className="grid text-left border-t border-light md:gap-16 md:grid-cols-2">
            <div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Opracowanie Indywidualnego Planu Żywieniowego trwa zwykle
                  kilka dni. Dietetyk musi dokładnie przeanalizować zebrane od
                  Ciebie informacje i napisać zdrowy, bezpieczny i przede
                  wszystkim skuteczny jadłospis, odpowiadający Twoim wymaganiom.
                  W celu otrzymania kompletnych materiałów wraz z jadłospisem
                  musisz przyjść do nas na jeszcze jedno krótkie spotkanie
                  (bezpłatne), podczas którego udzielimy Ci wszystkich
                  niezbędnych wyjaśnień i wskazówek dotyczących stosowania
                  jadłospisu. W indywidualnych przypadkach, po wcześniejszych
                  ustaleniach, materiały możemy wysłać drogą e-mailową.
                </p>
              </div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9  text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Diety układane są przez specjalistę dietetyka. Indywidualne
                  podejście do klienta gwarantuje dietę, która zapewni
                  organizmowi odpowiednią kaloryczność oraz dostarczy wszystkich
                  niezbędnych składników odżywczych (białek, tłuszczy,
                  węglowodanów oraz witamin i składników mineralnych) w
                  odpowiednich ilościach. Diety oparte są na aktualnych
                  zaleceniach Instytutu Żywności i Żywienia oraz na nowej
                  piramidzie żywienia, zgodnej z najświeższymi badaniami
                  naukowymi. Zbilansowana dieta w sposób naturalny reguluje
                  przemianę materii oraz likwiduje napady głodu
                </p>
              </div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9  text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Wizyty kontrolne zwykle odbywają się co dwa tygodnie. Jest to
                  idealny moment na monitorowanie postępu dietoterapii i
                  ewentualne skorygowanie planu żywieniowego. Częstsze spotkania
                  nie odzwierciedlają osiągnięć, natomiast rzadsze mogą
                  powodować utratę motywacji. Wizyty trwają do momentu
                  osiągnięcia założonych celów. Możliwe są także wizyty raz w
                  miesiącu (np. dla osób dojeżdżających). Częstotliwość wizyt
                  ustali z Tobą indywidualnie dietetyk.
                </p>
              </div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Niestety, sama dieta nie wystarczy. Organizm bardzo szybko
                  przystosowuje się do obniżonej kaloryczności posiłków,
                  spowalnia metabolizm i zmniejsza zapotrzebowanie na energię.
                  Jedynym sposobem na uniknięcie takiej sytuacji jest regularna
                  aktywność fizyczna. Nie musi to być od razu duży wysiłek
                  fizyczny. Można zacząć od 30 minutowych marszów (szybkich
                  spacerów) i powoli zwiększać ich długość. Wysiłek fizyczny
                  sprzyja utracie tkanki tłuszczowej przy jednoczesnej ochronie
                  zasobów białkowych organizmu.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  The free updates that will be provided is based on the{' '}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    roadmap
                  </a>{' '}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
                </p>
              </div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div className="mb-12 lg:mb-24">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Although both Windster and Tailwind UI are built for
                  integration with Tailwind CSS, the main difference is in the
                  design, the pages, the extra components and UI elements that
                  Windster includes.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Additionally, Windster is a project that is still in
                  development, and later it will include both the application,
                  marketing, and e-commerce UI interfaces.
                </p>
              </div>
              <div className="mb-12 lg:mb-40">
                <h3 className="flex items-center sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-light mb-2 lg:mb-4">
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
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Generally, it is accepted to use Windster in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to Windster itself.
                </p>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  Find out more information by reading license.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Faq;
