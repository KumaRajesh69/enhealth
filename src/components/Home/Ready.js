import React from "react";

function Ready() {
  return (
    <div className="md:p-10 p-5 ">
      <div className="relative ">
        <div className="absolute inset-0 bg-black opacity-90 h-full  rounded-2xl " />
        <img
          src="/images/ready.svg"
          className="absolute w-full h-full  object-cover  rounded-2xl "
        />
        <div className="flex flex-col md:flex-row relative md:p-10 md:py-12 p-5  rounded-2xl ">
          <div className="md:w-[75%] space-y-3">
            <p className=" hidden md:block font-normal md:text-5xl text-xl text-white ">
              Ready to elevate your business and
            </p>
            <p className=" hidden md:block font-normal md:text-5xl text-xl text-white ">
              impact the future of healthcare?
            </p>
            <p className=" md:hidden font-normal  text-xl text-white ">
              Ready to elevate your business and impact the future of
              healthcare?
            </p>
            <p className="text-white  text-xs md:text-lg pt-5 ">
              Join RxnCure today and be part of a network that values
              innovation, efficiency, and quality above all. Let's make
              healthcare accessible to everyone, together.
            </p>
          </div>
          <div className="md:w-[25%] flex justify-center items-center">
            <button className="bg-white hover:bg-slate-300 md:text-base text-xs font-normal mt-3 rounded-md p-2 md:py-3 md:px-4 ">
              Join Enhealth
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
