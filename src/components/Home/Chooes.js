import React from "react";

const data = [
  {
    image: "/images/brand.svg",
    name: "Branded Delivery Service",
    para: "Align your brand with innovation in healthcare technology.",
  },
  {
    image: "/images/brand.svg",
    name: "Branded Delivery Service",
    para: "Align your brand with innovation in healthcare technology.",
  },
  {
    image: "/images/brand.svg",
    name: "Branded Delivery Service",
    para: "Align your brand with innovation in healthcare technology.",
  },
  {
    image: "/images/brand.svg",
    name: "Branded Delivery Service",
    para: "Align your brand with innovation in healthcare technology.",
  },
];
function Chooes() {
  return (
    <div className="my-20 md:my-10 md:w-[80%] p-5 md:p-0 mx-auto">
      <div className="my-10">
        <p className="text-center  md:text-5xl text-2xl font-medium">
          Why Choose Enhealth
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src="/images/3dhospital.svg" className="rounded-[40px] w-full" />
        </div>
        <div className="space-y-12">
          {data.map((item) => (
            <div>
              <div className="flex space-x-5">
                <img src={item.image} className="h-12" />
                <div className="space-y-2">
                  <p className="font-medium md:text-3xl text-xl">{item.name}</p>
                  <p className="md:text-xl text-base text-[#c5bfbf]">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooes;
