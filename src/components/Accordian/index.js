import React, { useState } from "react";
import Collapsible from "react-collapsible";

function Accordion({ data }) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  const showMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  return (
    <div className="my-20">
      <div className="bg-transparent  flex flex-col justify-center items-center space-y-5">
        <div className=" space-y-2">
          <p className="tracking-wide md:text-5xl text-xl font-medium text-center mb-8">
            Frequently Asked Question
          </p>
          {/* <p className="font-normal md:text-base text-xs text-[#1A2C78] text-center w-[60%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et dolore.
          </p> */}
        </div>
        <div className="px-10 max-w-5xl ">
          {data.slice(0, visibleItems).map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              desc={item.desc}
              isOpen={openAccordionIndex === index}
              toggleAccordion={toggleAccordion}
            />
          ))}
          {visibleItems < data.length && (
            <div className="flex justify-center">
              <button
                className="mt-4 text-blue-500 font-normal text-base px-4 py-2 rounded"
                onClick={showMore}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ index, title, desc, isOpen, toggleAccordion }) {
  return (
    <div className="py-1 border-b  my-2">
      <div
        className="p-3 md:px-10 space-x-2  flex justify-between items-center cursor-pointer rounded-xl "
        onClick={() => toggleAccordion(index)}
      >
        <p className="md:text-lg text-base font-medium  ">{title}</p>
        <div className="text-2xl">
          {isOpen ? (
            <img src="/images/Close.svg" />
          ) : (
            <img src="/images/Plus.svg" />
          )}
        </div>
      </div>
      <Collapsible open={isOpen}>
        <div className=" md:px-10 pb-5 text-xs md:text-base rounded-b-xl  ">
          {desc}
        </div>
      </Collapsible>
    </div>
  );
}

export default Accordion;
