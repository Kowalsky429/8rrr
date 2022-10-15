import Head from 'next/head';
import {
  Header,
  AboutMe,
  Cooperation,
  PriceList,
  Blog,
  Faq,
  Contact,
  Footer,
} from '../components/HomePage';

export default function Home() {
  return (
    <div className="w-full font-ubuntu bg-lightModeBackground dark:bg-darkModeBackground text-white">
      <Head>
        <title>patkadietetycznie - Patrycja Janik Dietetyk</title>
        <meta
          name="description"
          content="Indywidualnie dopasowane diety odchudzające. Wejdź na stronę i sprawdź adres gabinetu! Z nami zrzucisz zbędne kilogramy i pozbędziesz się nadwagi!..."
        />
        <meta
          name="keywords"
          content="Patrycja Janik, dietetyk, dietetyk powszechny, dietetyk online, poradnia dietetyczna, wspolczesna dietetyka, lekarz dietetyk, ile kosztuje dietetyk, gabinet dietetyczny, dobry dietetyk online, rozpisane diety cena, najlepsi dietetycy online, ukladanie diety online, lekarz dietetyk kliniczny, najlepszy dietetyk, dietetyk opole, dietetyk polska, najlepszy dietetyk opole, polecany dietetyk, polecany dietetyk opole, tani dobry dietetyk, jak schudnac, jak zdrowo sie odzywiac, dieta, Zdrowie, porady o zdrowym zywieniu, sumplementacja, zdrowe dania, zrzucenie wagi, zdrowie, ukladanie jadlospisow, dietetyk online"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <article className="w-full">
        <Header />
        <div className="px-5 max-w-[1400px] mx-auto">
          <AboutMe />
          <Cooperation />
          <PriceList />
          <Blog />
          <Faq />
          <Contact />
        </div>
        <Footer />
      </article>
    </div>
  );
}
