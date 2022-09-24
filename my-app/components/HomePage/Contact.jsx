import React from 'react';

function Contact() {
  return (
    <section id="kontakt" className="max-w-[1400px] mx-auto px-6 py-6">
      <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-12 lg:mb-24 z-10">
        Kontakt
        <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[60px] h-[120%] -z-10 bg-titleDecoration rounded-lg md:w-[80px] lg:w-[100px]" />
      </h3>
      <h4 className="text-xl sm:text-2xl lg:text-3xl mb-6 lg:mb-12 text-active">
        Masz pytanie? Pisz śmiało!
      </h4>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 mb-12">
        Nie przejmuj się, o to zestaw najczęstszych pytań do dietetyków ktorzy
        zadają pacjenci zazwyczaj przed pierwsza wizytą. Jeśli masz inne pytanie
        śmiało zadaj je w formularzu kontaktowym poniżej!
      </p>
      <form method="post" className="flex flex-col">
        <label className="mb-6  flex items-center text-lg sm:text-xl lg:text-2xl text-light">
          Twoje imię*
        </label>
        <input
          type="text"
          placeholder="Imię"
          className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
        />
        <span className="my-8 lg:my-16 flex flex-col">
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
          className="mb-8 h-[200px] lg:h-[260px] border-2 border-light rounded-lg bg-transparent text-light p-4 md:p-6 sm:text-lg lg:text-xl"
        ></textarea>
        <button className="rounded-lg bg-cardCover text-light py-5 px-6 sm:text-lg lg:text-xl mb-12 lg:mb-40 hover:bg-titleDecoration">
          Wyślij wiadomość
        </button>
      </form>
    </section>
  );
}

export default Contact;
