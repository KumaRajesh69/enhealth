import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const data = [
  {
    image: "/images/Primary.svg",
    name: "Primary Care Consultation",
    para: "Lorem ipsum dolor sit amet consectetur. Nibh amet elementum ac turpis.",
  },
  {
    image: "/images/institution.svg",
    name: "Institutional Healthcare Setup",
    para: "Lorem ipsum dolor sit amet consectetur. Nibh amet elementum ac turpis.",
  },
  {
    image: "/images/medicine.svg",
    name: "Medicine Store Vendor Tools",
    para: "Lorem ipsum dolor sit amet consectetur. Nibh amet elementum ac turpis.",
  },
];

function Service() {
  return (
    <div className="my-10 md:w-[80%] mx-auto px-5 ">
      <p className="text-center text-5xl font-medium">Services</p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 mt-10">
        {data.map((item) => (
          <div className="shadow-xl rounded-[40px] rounded-tl-none">
            <div>
              <img src={item.image} className="w-full rounded-tr-[40px]" />
            </div>
            <div className="p-5 space-y-4">
              <p className="font-medium text-xl text-center">{item.name}</p>
              <div>
                <p className="text-[#6A6A6A] text-center">{item.para}</p>
                <a
                  href="/service-details"
                  className="mt-4 flex items-center text-blue-500 justify-center"
                >
                  <p>Know more</p>
                  <ArrowLongRightIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="p-4 rounded-xl shadow-md space-y-4">
        <div className="flex flex-col items-center">
          <img src="/images/doctor.svg" alt="Doctor" className="w-24 h-24" />
          <p className="text-xl font-semibold mt-4">
            Primary Care Consultation
          </p>
          <p className="text-blue-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Nibh amet elementum ac
            turpis.
          </p>
          <a
            href="/service-details"
            className="mt-4 flex items-center text-blue-500 "
          >
            <p>Know more</p>
            <ArrowLongRightIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Service;
