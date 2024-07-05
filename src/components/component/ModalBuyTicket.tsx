import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSuitcase,
  faShoppingCart,
  faUser,
  faCheck,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";

interface Iprops {
  isOpen: boolean;
  onClose: () => void;
}

const ModalBuyTicket = (props: Iprops) => {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[50] flex justify-center bg-gray-800 bg-opacity-50 overflow-auto pt-[100px]">
      <div
        className={`bg-[#009688] shadow-lg overflow-auto w-[52%] h-[65%] ${
          props.isOpen ? "animate-slideDown" : ""
        }`}
        onClick={props.onClose}
      >
        <header className="h-[27%] shadow-lg">
          <button
            onClick={props.onClose}
            className="p-4 hover:text-black hover:bg-[#ccc] cursor-pointer float-right"
          >
            <FontAwesomeIcon
              className="text-white text-[20px]"
              icon={faClose}
            />
          </button>
          <h1 className="text-white px-8 py-8 tracking-[4px] text-[30px] font-[400] h-[100%] flex items-center justify-center">
            <FontAwesomeIcon icon={faSuitcase} className="mr-4" />
            Tickets
          </h1>
        </header>
        <div className="bg-white h-[73%] px-4 py-4">
          {/* Change from div to form whenever submit something */}
          <div className="w-full">
            <p className="float-left mb-4">
              <label className="text-[15px]">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                Tickets, $15 per person
              </label>
            </p>
            <input
              placeholder="How many?"
              className="block border-[1px] border-[#ccc] h-[40px] w-[100%] mr-0 p-2"
            ></input>
            <p className="float-left my-4">
              <label className="text-[15px]">
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                Send to
              </label>
            </p>
            <input
              placeholder="Enter Email"
              className="block border-[1px] border-[#ccc] h-[40px] w-[100%] mb-4 p-2"
            ></input>
            <button className="bg-[#009688] text-white p-4 uppercase w-[100%] hover:text-black hover:bg-[#ccc]">
              pay
              <FontAwesomeIcon className="ml-2" icon={faCheck} />
            </button>
            <button
              onClick={props.onClose}
              className="float-left bg-[#f44336] text-white py-2 px-3 capitalize hover:text-black hover:bg-[#ccc] my-5"
            >
              close
              <FontAwesomeIcon
                className="align-middle ml-1 text-[17px]"
                icon={faRemove}
              />
            </button>
            <p className="float-right my-4">
              Need{" "}
              <a className="text-[#2196f3] underline" href="#">
                help?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuyTicket;
