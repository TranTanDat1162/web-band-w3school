import React from "react";

const TheBand = () => {
  return (
    <div className="text-center py-16 px-4 max-w-[800px] mx-auto">
      <h1 className="uppercase tracking-[3px] font-[400] text-[30px] my-[10px]">
        the band
      </h1>
      <p className="my-[15px] text-[15px] italic opacity-[0.7]">
        We love music
      </p>
      <p className="my-[15px] text-[15px] text-justify">
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="py-8 float-left flex">
        <div className="">
          <p className="my-[15px]">Name</p>
          <img
            className="w-[60%] mb-4 mx-auto rounded"
            src="https://www.w3schools.com/w3images/bandmember.jpg"
          ></img>
        </div>
        <div className="">
          <p className="my-[15px]">Name</p>
          <img
            className="w-[60%] mb-4 mx-auto rounded"
            src="https://www.w3schools.com/w3images/bandmember.jpg"
          ></img>
        </div>
        <div className="">
          <p className="my-[15px]">Name</p>
          <img
            className="w-[60%] mb-4 mx-auto rounded"
            src="https://www.w3schools.com/w3images/bandmember.jpg"
          ></img>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default TheBand;
