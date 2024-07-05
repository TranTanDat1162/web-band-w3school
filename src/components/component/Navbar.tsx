import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-10 h-[46.5px] bg-[#000] flex w-full shadow-lg">
      <ul className="flex leading-[46.5px] h-[46.5px]">
        <li className="text-white uppercase px-6 cursor-pointer hover:bg-[#ccc] hover:text-black">
          Home
        </li>
        <li className="text-white uppercase px-6 cursor-pointer hover:bg-[#ccc] hover:text-black">
          Band
        </li>
        <li className="text-white uppercase px-6 cursor-pointer hover:bg-[#ccc] hover:text-black">
          Tour
        </li>
        <li className="text-white uppercase px-6 cursor-pointer hover:bg-[#ccc] hover:text-black">
          Contact
        </li>
        <li className="text-white uppercase px-6 cursor-pointer hover:bg-[#ccc] hover:text-black relative group flex">
          More
          <FontAwesomeIcon
            className="ml-[2pt] mt-[27%] size-[30%]"
            icon={faCaretDown}
          />
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
      </ul>

      {/* Search icon */}
      <div className="float-right px-6 pt-3 cursor-pointer ml-auto hover:bg-[#f44336]">
        <FontAwesomeIcon
          className="text-white w-[16px] h-[23px]
           font-bold"
          icon={faSearch}
        />
      </div>
    </nav>
  );
};

export default Navbar;
