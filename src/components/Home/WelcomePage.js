import React from "react";

function WelcomePage() {
  return (
    <div className="w-[80%] mx-auto mt-5 my-10">
      <div className="">
        <div className=" ">
          <div>
            <div className="md:space-y-4 space-y-1">
              <p className="text-[#2B3D4E] lg:text-5xl md:text-3xl text-xs  font-bold">
                Building a Healthier
              </p>
              <p className="text-[#2B3D4E] lg:text-5xl md:text-3xl text-xs ">
                <span className="text-[#2B3D4E] lg:text-5xl md:text-3xl text-xs font-bold mr-3">
                  Future with AI
                </span>
                Technologies.
              </p>
            </div>
            <div>
              <p className="lg:mt-8 md:mt-4 mt-1 lg:text-xl md:text-base text-[8px] text-[#2B3D4E] w-[70%]  md:px-0">
                Lorem ipsum dolor sit amet consectetur. Turpis pulvinar enim
                laoreet bibendum leo velit scelerisque.
              </p>
            </div>

            <button className="lg:my-6 md:my-4 my-1 md:px-10 md:py-4 p-0.5 font-semibold  md:text-sm text-[8px] bg-blue-500 hover:bg-blue-700 text-white md:rounded-xl rounded">
              Join Now
            </button>
          </div>

          <div className=" -mt-20 md:-mt-48 lg:-mt-72 lg:-mr-20">
            <img
              src="images/bgcard.svg"
              className="right-0 "
              alt="Bottom Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
