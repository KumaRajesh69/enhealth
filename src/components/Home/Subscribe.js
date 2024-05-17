import React from "react";

function Subscribe() {
  return (
    <div className="my-10">
      <div className="bg-[#05002B] flex md:flex-row flex-col justify-between  p-8 mx-10 rounded-2xl">
        <div className="flex items-center space-x-5">
          <img src="/images/msg.svg" />
          <p className="md:text-xl text-base text-white">
            Subscribe now to get latest updates
          </p>
        </div>
        <div className="mt-5 text-white ">
          <div className="flex justify-between md:w-[541px] ">
            <p className="font-medium text-sm">Email address</p>
            <button>
              <img src="/images/telegram.svg" />
            </button>
          </div>
          <input className="border-white border-b bg-transparent w-full focus:outline-none" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
