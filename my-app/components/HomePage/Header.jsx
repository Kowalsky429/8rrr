import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import Typed from 'typed.js';
import { useTheme } from 'next-themes';

function Header() {
  const [state, setState] = useState(false);
  const ref = useRef(null);
  const typed = useRef(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const options = {
      strings: [
        'Twoja podróż zaczyna się tutaj!',
        'Wiele ofert czeka na ciebie!',
        'Dietetyk z Opola Patrycja Janik',
      ],
      typeSpeed: 20,
      backSpeed: 20,
      loop: true,
      startDelay: 1000,
      backDelay: 4000,
    };
    typed.current = new Typed(ref.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <header className="h-[500px] lg:h-[100vh] px-5 py-6 lg:py-10 relative bg-my_bg_image bg-cover bg-center">
      <div className="relative h-full max-w-[1180px] flex flex-col justify-between items-center mx-auto">
        <nav className="w-full flex items-center justify-between">
          <h1 className="text-xl lg:text-2xl">patkadietetycznie</h1>
          <ul className="hidden md:block lg:text-lg">
            <Link href="#omnie">
              <a className="hover:text-light">O mnie</a>
            </Link>
            <Link href="#wspolpraca">
              <a className="ml-12 hover:text-light">Współpraca</a>
            </Link>
            <Link href="#cennik">
              <a className="ml-12 hover:text-light">Cennik</a>
            </Link>
            <Link href="#blog">
              <a className="ml-12 hover:text-light">Blog</a>
            </Link>
            <Link href="#faq">
              <a className="ml-12 hover:text-light">Faq</a>
            </Link>
            <Link href="#kontakt">
              <a className="ml-12 hover:text-light">Kontakt</a>
            </Link>
          </ul>
          {state ? (
            <AiOutlineClose
              size={24}
              className="md:hidden z-50 fixed top-7 right-5"
              onClick={() => setState((prevState) => !prevState)}
            />
          ) : (
            <AiOutlineMenu
              size={24}
              className="md:hidden z-50"
              onClick={() => setState((prevState) => !prevState)}
            />
          )}
          {state ? (
            <ul
              className="fixed
             w-[100vw] h-[100vh] bg-black bg-opacity-90 flex flex-col items-center justify-evenly top-0 left-0 text-center mx-auto text-xl z-20"
            >
              <Link href="#omnie">
                <a className="hover:text-light">O mnie</a>
              </Link>
              <Link href="#wspolpraca">
                <a className="hover:text-light">Współpraca</a>
              </Link>
              <Link href="#cennik">
                <a className="hover:text-light">Cennik</a>
              </Link>
              <Link href="#blog">
                <a className="hover:text-light">Blog</a>
              </Link>
              <Link href="#faq">
                <a className="hover:text-light">Faq</a>
              </Link>
              <Link href="#contact">
                <a className="hover:text-light">Kontakt</a>
              </Link>
            </ul>
          ) : null}
        </nav>
        <div className="relative w-full h-[120px] sm:h-[80px] md:h-[90px] lg:h-[120px]">
          <h2
            id="typed"
            className="text-4xl md:text-5xl lg:text-6xl text-center text-active absolute top-0 left-1/2 -translate-x-1/2 w-full"
            ref={ref}
          ></h2>
          <p className="lg:text-xl mt-8 text-center absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
            kliknij aby dowiedzieć się wiecej
          </p>
        </div>
        <Link href="#omnie">
          <div className="w-[90px] lg:w-[120px] lg:py-2 py-1 px-4 flex items-start justify-center border-3 border-white rounded-lg cursor-pointer hover:border-active">
            <IoIosArrowDown size={30} />
          </div>
        </Link>
      </div>
      <p
        className="absolute right-3 bottom-1 opacity-70 cursor-pointer lg:bottom-3 lg:right-6"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Zmień tryb
      </p>
    </header>
  );
}

export default Header;
