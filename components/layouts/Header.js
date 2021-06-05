import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
  return (
    <header className="bg-gray-900 hidden md:block z-50 fixed w-full py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Ebn Sina</h1>

        <nav>
          <ul className="flex space-x-8 text-md">
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
