"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const scroll2El = (elID: string) => {
    window.scrollTo({
      top: document.getElementById(elID)!.offsetTop - 60,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e: {
    preventDefault: () => void;
    target: { getAttribute: (arg0: string) => any };
  }) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 z-[1] h-[46.5px] bg-[#000] flex md:w-full shadow-lg border-b-[#000] border-b-4">
      <ul className={`leading-[46.5px] h-[46.5px] md:flex md:w-auto`}>
        <li
          onClick={() => router.push("/")}
          className={`text-white uppercase px-6 cursor-pointer my-auto block hover:bg-[#ccc] hover:text-black`}
        >
          Home
        </li>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex bg-black left-0 right-0 absolute md:relative`}
        >
          <li
            onClick={() => router.push("#band")}
            className={`text-white uppercase px-6 cursor-pointer w-full bg-black hover:bg-[#ccc] hover:text-black`}
          >
            Band
          </li>
          <li
            onClick={() => router.push("#tour")}
            className={`text-white uppercase px-6 cursor-pointer w-full hover:bg-[#ccc] hover:text-black`}
          >
            Tour
          </li>
          <li
            onClick={() => router.push("#contact")}
            className={`text-white uppercase px-6 cursor-pointer w-full hover:bg-[#ccc] hover:text-black`}
          >
            Contact
          </li>
          <li
            className={`text-white uppercase px-6 cursor-pointer w-full hover:bg-[#ccc] hover:text-black md:hidden`}
          >
            Merch
          </li>
          <li
            className={`text-white uppercase px-6 cursor-pointer hover:bg-[#ccc] hover:text-black relative group md:flex hidden`}
          >
            More
            <FontAwesomeIcon className="ml-[2pt] mt-[27%]" icon={faCaretDown} />
            <div className="absolute left-0 top-[100%]">
              <ul className="shadow-xl leading-[40px] bg-white hidden group-hover:block">
                <li className="text-black capitalize pl-3 pr-14 hover:bg-[#ccc]">
                  Merchandise
                </li>
                <li className="text-black capitalize pl-3 pr-14 hover:bg-[#ccc]">
                  Extras
                </li>
                <li className="text-black capitalize pl-3 pr-14 hover:bg-[#ccc]">
                  Media
                </li>
              </ul>
            </div>
          </li>
        </div>
      </ul>

      {/* Search icon */}
      <div className="px-6 pt-3 cursor-pointer ml-auto hover:bg-[#f44336] md:block hidden">
        <FontAwesomeIcon
          className="text-white w-[16px] h-[23px]
           font-bold"
          icon={faSearch}
        />
      </div>

      {/* Hamburger menu icon */}
      <div
        className="md:hidden px-6 pt-3 cursor-pointer text-white ml-auto hover:bg-[#ccc] hover:text-black"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          className={`w-[16px] h-[23px] font-bold ${
            menuOpen ? "hidden" : "block"
          }`}
          icon={faBars}
        />
        <FontAwesomeIcon
          className={`w-[16px] h-[23px] font-bold ${
            menuOpen ? "block" : "hidden"
          }`}
          icon={faBars}
        />
      </div>
    </nav>
  );
};

export default Navbar;
