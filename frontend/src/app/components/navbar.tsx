"use client";
import Image from "next/image";
import logo from "@/../public/svg/logo.svg";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function showMenuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="relative flex justify-between bg-light-orange w-11/12 max-w-screen-xl rounded-full mx-auto p-2">
      <div className="flex space-x-6 items-center">
        <Image src={logo} alt="Logo" className="w-16 text-primary" />
        <div className="space-x-4">
          <Link
            href=""
            className="hidden md:hover:text-lighter-primary max-w- transition 150 ease-in-out lg:inline"
          >
            Living Room
          </Link>
          <Link
            href=""
            className="hidden md:hover:text-lighter-primary transition 150 ease-in-out lg:inline"
          >
            Dining
          </Link>
          <Link
            href=""
            className="hidden md:hover:text-lighter-primary transition 150 ease-in-out lg:inline"
          >
            Bedroom
          </Link>
          <Link
            href=""
            className="hidden md:hover:text-lighter-primary transition 150 ease-in-out lg:inline"
          >
            Office
          </Link>
          <Link
            href=""
            className="hidden md:hover:text-lighter-primary transition 150 ease-in-out lg:inline"
          >
            Decor
          </Link>
          <Link
            href=""
            className="hidden text-red font-bold transition 150 ease-in-out md:hover:text-darker-red lg:inline"
          >
            On sale
          </Link>
        </div>
      </div>
      <div className="flex space-x-5 items-center mr-8">
        <a
          href=""
          className="hidden bg-black px-4 py-2 text-white rounded-full lg:inline"
        >
          Contact us
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
        <button onClick={showMenuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-grid lg:hidden"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
          </svg>
        </button>
        {showMenu && (
          <div className="absolute right-0 w-full bg-lighter-orange/60 backdrop-blur-md p-4 shadow-xl rounded-xl top-24 lg:hidden">
            <div className="flex flex-wrap space-x-3 justify-center">
              <Link
                href=""
                className="transition 150 ease-in-out px-2 py-1 border border-black rounded-md mb-2"
              >
                Living Room
              </Link>
              <Link
                href=""
                className="transition 150 ease-in-out px-2 py-1 border border-black rounded-md mb-2"
              >
                Dining
              </Link>
              <Link
                href=""
                className="transition 150 ease-in-out px-2 py-1 border border-black rounded-md mb-2"
              >
                Bedroom
              </Link>
              <Link
                href=""
                className="transition 150 ease-in-out px-2 py-1 border border-black rounded-md mb-2"
              >
                Office
              </Link>
              <Link
                href=""
                className="transition 150 ease-in-out px-2 py-1 border border-black rounded-md mb-2"
              >
                Decor
              </Link>
              <Link
                href=""
                className="text-red font-bold transition 150 ease-in-out px-4 py-1 border-2 border-darker-red rounded mb-2"
              >
                On sale
              </Link>
            </div>
            <a href="">
              <div className="bg-black mt-3 py-2 rounded w-full max-w-2xl mx-auto text-center text-white">
                Contact us
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
