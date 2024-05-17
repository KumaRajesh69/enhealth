import React from "react";

const data = [
  {
    icon: "/images/workicon.svg",
    name: "Branded Delivery Service",
    para: "Lorem ipsum dolor sit amet consectetur. Eros eros lacus curabitur tellus felis ligula ut.",
  },
  {
    icon: "/images/workicon.svg",
    name: "Branded Delivery Service",
    para: "Lorem ipsum dolor sit amet consectetur. Eros eros lacus curabitur tellus felis ligula ut.",
  },
  {
    icon: "/images/workicon.svg",
    name: "Branded Delivery Service",
    para: "Lorem ipsum dolor sit amet consectetur. Eros eros lacus curabitur tellus felis ligula ut.",
  },
];
function Works() {
  return (
    <div className="md:p-10 p-5 pb-20 md:my-20 bg-custom-gradient">
      <p className="text-center md:text-5xl text-2xl font-medium text-white my-10">
        How iy Works
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[80%] mx-auto">
        {data.map((item) => (
          <div className="space-y-5 text-center items-center">
            <div className="flex justify-center items-center ">
              <img src={item.icon} />
            </div>
            <div className="space-y-3">
              <p className="text-xl font-medium text-white">{item.name}</p>
              <p className=" text-white text-justify w-[70%] mx-auto">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
