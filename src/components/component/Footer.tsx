import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faSnapchatGhost,
  faPinterestP,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-16 text-center text-[#757575] mx-auto min-h-[300px] md:min-h-[0px]">
      <div className="flex justify-center gap-0.5">
        <FontAwesomeIcon
          className="size-[25px] hover:opacity-[0.6]"
          icon={faFacebookSquare}
        />
        <FontAwesomeIcon
          className="size-[25px] hover:opacity-[0.6]"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="size-[25px] hover:opacity-[0.6]"
          icon={faSnapchatGhost}
        />
        <FontAwesomeIcon
          className="size-[25px] hover:opacity-[0.6]"
          icon={faPinterestP}
        />
        <FontAwesomeIcon
          className="size-[25px] hover:opacity-[0.6]"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="size-[25px] hover:opacity-[0.6]"
          icon={faLinkedinIn}
        />
      </div>
      <div className="mt-3">
        <p className="text-[#757575] block">
          Power by{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.w3schools.com/w3css/default.asp"
          >
            w3.css
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
