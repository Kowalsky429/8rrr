import React from 'react';

function Contact() {
  return (
    <section id="kontakt" className="max-w-[1400px] mx-auto px-6 py-6">
      <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12 lg:mb-24 z-10">
        Kontakt
        <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-white bg-opacity-10 rounded-lg md:w-[80px] lg:w-[100px]" />
      </h3>
      <h4 className="text-xl sm:text-2xl lg:text-3xl mb-6 lg:mb-8 text-active">
        Masz pytanie? Pisz śmiało!
      </h4>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 mb-12">
        Nie przejmuj się, o to zestaw najczęstszych pytań do dietetyków ktorzy
        zadają pacjenci zazwyczaj przed pierwsza wizytą. Jeśli masz inne pytanie
        śmiało zadaj je w formularzu kontaktowym poniżej!
      </p>
      <form
        method="post"
        action="https://formsubmit.co/kowalsky429@gmail.com"
        className="flex flex-col"
      >
        <label className="mb-6 flex items-center text-lg sm:text-xl lg:text-2xl text-light">
          Twoje imię*
        </label>
        <input
          type="text"
          name="imie"
          placeholder="Imię"
          className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
        />
        <span className="my-8 lg:my-16 flex flex-col">
          <label className="mb-6 flex items-center text-lg sm:text-xl lg:text-2xl text-light">
            Adres e-mail*
          </label>
          <input
            type="email"
            name="email"
            placeholder="przykładowy@email.com"
            className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
          />
        </span>
        <label className="mb-6 flex items-center text-lg sm:text-xl lg:text-2xl text-light">
          Treść wiadomości*
        </label>
        <textarea
          name="wiadomosc"
          placeholder="Witam..."
          className="mb-8 h-[200px] lg:h-[260px] border-2 border-light rounded-lg bg-transparent text-light p-4 md:p-6 sm:text-lg lg:text-xl"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg bg-black bg-opacity-20 dark:bg-opacity-30 text-light py-5 px-6 sm:text-lg lg:text-xl mb-12 lg:mb-40 hover:dark:bg-opacity-50"
        >
          Wyślij wiadomość
        </button>
        <input
          type="hidden"
          name="_subject"
          value="Nowe zgłoszenie! patkadietetycznie.pl"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="Dziękuje za wiadomość! (autoresponse patkadietetycznie.pl)"
        />
      </form>
    </section>
  );
}

export default Contact;
