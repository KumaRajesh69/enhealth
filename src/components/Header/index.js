import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="hidden md:block">
        <div className=" container mx-auto  md:w-[80%] py-5 flex justify-between items-center">
          <div className=" flex md:space-x-6 lg:space-x-12 ">
            <a href="#" className="text-sm">
              About
            </a>
            <a href="#" className="text-sm">
              Blog
            </a>
            <a href="#" className="text-sm">
              Page
            </a>
            <a href="#" className="text-sm">
              Contact
            </a>
          </div>

          <div className="flex-shrink-0 lg:mr-20">
            <img src="/images/enhealth.svg" alt="Company Logo" className="" />
          </div>

          <div className="flex md:space-x-4 space-x-2 items-center">
            <a href="#" className="text-sm">
              Sign In
            </a>
            <a
              href="#"
              className="bg-blue-500 md:text-sm text-xs font-semibold text-white lg:py-3 lg:px-4 p-2  rounded-lg hover:bg-blue-600"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <img src="/images/enhealth.svg" alt="Company Logo" className="h-8" />
          <div className="flex space-x-2 items-center">
            <a href="#" className=" text-[10px]">
              Sign In
            </a>
            <a
              href="#"
              className="bg-blue-500 md:text-sm text-[10px] font-semibold text-white  p-2  rounded-lg hover:bg-blue-600"
            >
              Get Started Free
            </a>
          </div>
          <button
            onClick={toggleDrawer}
            className="text-sm 
             p-2 rounded-lg"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer} className="text-sm">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-sm" aria-label="About">
              About
            </a>
            <a href="#" className="text-sm" aria-label="Blog">
              Blog
            </a>
            <a href="#" className="text-sm" aria-label="Page">
              Page
            </a>
            <a href="#" className="text-sm" aria-label="Contact">
              Contact
            </a>
          </nav>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Header;
