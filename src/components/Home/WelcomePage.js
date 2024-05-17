import React from "react";

function WelcomePage() {
  return (
    <div className="w-[80%] mx-auto mt-5">
      <div className="flex justify-between items-start relative ">
        <div className="mt-10">
          <div className="space-y-4">
            <p className="text-[#2B3D4E] md:text-5xl text-2xl  font-bold">
              Building a Healthier
            </p>
            <p className="text-[#2B3D4E] md:text-5xl text-2xl ">
              <span className="text-[#2B3D4E] md:text-5xl text-2xl font-bold mr-3">
                Future with AI
              </span>
              Technologies.
            </p>
          </div>
          <div>
            <p className="mt-8 md:text-xl text-base text-[#2B3D4E] md:w-[70%] px-2 md:px-0">
              Lorem ipsum dolor sit amet consectetur. Turpis pulvinar enim
              laoreet bibendum leo velit scelerisque.
            </p>
          </div>
          {/* <div> */}
          <button className="my-6 px-10 py-4 font-semibold text-sm bg-blue-500 hover:bg-blue-700 text-white rounded-xl">
            Join Now
          </button>
          {/* </div> */}
          <img
            src="images/bgcard.svg"
            className="mt-4 w-[98.3%] hidden md:block"
            alt="Bottom Image"
          />
        </div>
        <img
          src="images/doctor.svg"
          className="absolute h-[620px] top-0 right-0 hidden md:block"
          alt="Right Image"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
