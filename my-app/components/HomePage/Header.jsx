import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import Typed from 'typed.js';

function Header() {
  const [state, setState] = useState(false);

  const ref = useRef(null);

  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Twoja podróż zaczyna się tutaj!',
        'Wiele ofert czeka na ciebie!',
        'Dietetyk Mgr. Patrycja Janik',
      ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
      startDelay: 1000,
      backDelay: 3000,
    };
    typed.current = new Typed(ref.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <header className="w-full h-[500px] lg:h-[100vh] px-5 py-6 lg:py-10 relative bg-black bg-my_bg_image bg-cover bg-center">
      <div className="relative w-full max-w-[1180px] h-full flex flex-col justify-between items-center mx-auto">
        <nav className="w-full flex items-center justify-between">
          <div className="flex items-start">
            <h1 className="text-xl lg:text-2xl">patkadietetycznie</h1>
          </div>
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
            <Link href="#contact">
              <a className="ml-12 hover:text-light">Kontakt</a>
            </Link>
          </ul>
          {state ? (
            <AiOutlineClose
              size={24}
              className="md:hidden z-50 fixed top-6 right-6"
              onClick={() => setState((prevState) => !prevState)}
            />
          ) : (
            <AiOutlineMenu
              size={24}
              className="md:hidden z-50"
              onClick={() => setState((prevState) => !prevState)}
            />
          )}

          <ul
            className={`${
              state ? 'fixed' : 'hidden'
            } w-[100vw] h-[100vh] bg-menuCover flex flex-col items-center justify-evenly top-0 left-0 text-center mx-auto text-xl z-20`}
          >
            <Link href="#omnie">
              <a className="hover:text-light">O mnie</a>
            </Link>
            <Link href="#wspolpraca">
              <a className="hover:text-light">Współpraca</a>
            </Link>
            <Link href="#cennik">
              <a className="mhover:text-light">Cennik</a>
            </Link>
            <Link href="#blog">
              <a className="mhover:text-light">Blog</a>
            </Link>
            <Link href="#faq">
              <a className="hover:text-light">Faq</a>
            </Link>
            <Link href="#contact">
              <a className="mhover:text-light">Kontakt</a>
            </Link>
          </ul>
        </nav>
        <div className="relative w-full h-[120px] sm:h-[80px] md:h-[90px] lg:h-[120px]">
          <h2
            id="typed"
            className="text-4xl lg:text-6xl text-center text-active absolute top-0 left-1/2 -translate-x-1/2 w-full"
            ref={ref}
          ></h2>
          <p className="lg:text-xl mt-8 text-center cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
            kliknij aby dowiedzieć się wiecej
          </p>
        </div>
        <div className="w-[90px] lg:w-[120px] lg:py-2 py-1 px-4 flex items-start justify-center border-3 border-white rounded-lg cursor-pointer hover:border-active">
          <IoIosArrowDown size={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;
