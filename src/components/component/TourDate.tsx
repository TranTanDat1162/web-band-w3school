"use client";
import React, { useState } from "react";
import ModalBuyTicket from "./ModalBuyTicket";

const TourDate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="tour" className="text-center py-16 px-4 bg-black">
      <h1 className="uppercase tracking-[3px] font-[400] text-[30px] my-[10px] text-white">
        tour dates
      </h1>
      <p className="my-[15px] text-[15px] italic opacity-[0.6] tracking-[0.5px] text-white">
        Remember to book your tickets!
      </p>

      <ul className="bg-white max-w-[800px] mx-auto mt-8">
        <li className="py-2 px-4 text-left border-b-[1.5px] text-[#757575]">
          September
          <span className="ml-4 bg-[#f44336] text-white px-2 py-1">
            Sold out
          </span>
        </li>
        <li className="py-2 px-4 text-left border-b-[1.5px] text-[#757575]">
          October
          <span className="ml-4 bg-[#f44336] text-white px-2 py-1">
            Sold out
          </span>
        </li>
        <li className="py-2 px-4 text-left text-[#757575]">
          November
          <span className="float-right mr-4 bg-black rounded-full text-white px-2">
            3
          </span>
        </li>
      </ul>

      <div className="block md:flex text-white max-w-[800px] mx-auto py-8">
        <div className="bg-white text-black w-full md:w-[calc(100%/3)] mr-4">
          <img
            className="hover:opacity-60 w-full"
            src="https://www.w3schools.com/w3images/newyork.jpg"
            alt="New York"
          />
          <div className="px-4 text-left">
            <p className="my-[15px] tracking-[0.25px] font-extrabold">
              New York
            </p>
            <p className="my-[15px] opacity-[0.7]">Fri 27 Nov 2016</p>
            <p className="my-[15px]">
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-black py-2 px-4 mb-4 text-white hover:bg-[#ccc] hover:text-black"
            >
              Buy Tickets
            </button>
          </div>
          {isOpen && (
            <ModalBuyTicket isOpen={isOpen} onClose={handleCloseModal} />
          )}
        </div>
        <div className="bg-white text-black w-full md:w-[calc(100%/3)] mr-4 mt-4 md:mt-auto">
          <img
            className="hover:opacity-60 w-full"
            src="https://www.w3schools.com/w3images/paris.jpg"
            alt="Paris"
          />
          <div className="px-4 text-left">
            <p className="my-[15px] tracking-[0.25px] font-extrabold">Paris</p>
            <p className="my-[15px] opacity-[0.7]">Fri 28 Nov 2016</p>
            <p className="my-[15px]">
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-black py-2 px-4 mb-4 text-white hover:bg-[#ccc] hover:text-black"
            >
              Buy Tickets
            </button>
          </div>
        </div>
        <div className="bg-white text-black w-full md:w-[calc(100%/3)] mt-4 md:mt-auto">
          <img
            className="hover:opacity-60 w-full"
            src="https://www.w3schools.com/w3images/sanfran.jpg"
            alt="San Francisco"
          />
          <div className="px-4 text-left">
            <p className="my-[15px] tracking-[0.25px] font-extrabold">
              San Francisco
            </p>
            <p className="my-[15px] opacity-[0.7]">Fri 29 Nov 2016</p>
            <p className="my-[15px]">
              Praesent tincidunt sed tellus ut rutrum sed vitae justo.
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-black py-2 px-4 mb-4 text-white hover:bg-[#ccc] hover:text-black"
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default TourDate;
