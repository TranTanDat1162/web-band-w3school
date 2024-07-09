"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/contact?name=${name}&email=${email}&message=${message}`);
  };

  return (
    <div id="contact" className="text-center py-16 px-4 max-w-[800px] mx-auto">
      <h1 className="uppercase tracking-[3px] font-[400] text-[30px] my-[10px]">
        contact
      </h1>
      <p className="my-[15px] text-[15px] italic opacity-[0.6] tracking-[0.5px]">
        Fan? Drop a note!
      </p>
      <div className="md:grid md:grid-cols-2 py-4">
        <div className="col-span-1">
          <div className="flex items-center my-1">
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 w-[15px]" />
            <p className="text-[18px]">Chicago, US</p>
          </div>
          <div className="flex items-center my-1">
            {" "}
            <FontAwesomeIcon icon={faPhone} className="mr-4 w-[15px]" />
            <p className="text-[18px]">Phone: +00 151515</p>
          </div>
          <div className="flex items-center my-1">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="mr-4 w-[15px]" />
            <p className="text-[18px]">Email: mail@mail.com</p>
          </div>
        </div>
        <div className="col-span-1">
          <form onSubmit={handleSubmit} target="_blank">
            <div className="block md:flex gap-4 my-[10px]">
              <input
                className="w-[100%] h-[40px] mx-auto border-2 border-[#ccc] p-2"
                type="text"
                placeholder="Name"
                required={true}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                className="w-[100%] h-[40px] mx-auto border-2 border-[#ccc] p-2 mt-3 md:mt-0"
                type="email"
                placeholder="Email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <input
              className="w-[100%] h-[40px] mx-auto border-2 border-[#ccc] p-2"
              placeholder="Message"
              required={true}
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              type="submit"
              className="float-right w-[20%] h-[40px] border-2 my-4 uppercase bg-black text-white hover:bg-[#ccc] hover:text-black"
            >
              send
            </button>
          </form>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default Contact;
