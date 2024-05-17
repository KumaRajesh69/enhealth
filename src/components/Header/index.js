import React from "react";

function Header() {
  return (
    <div>
      <div className="container mx-auto  md:w-[80%] py-5 flex justify-between items-center">
        <div className="hidden md:block  flex space-x-12">
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

        <div className="flex-shrink-0 md:mr-20">
          <img src="/images/enhealth.svg" alt="Company Logo" className="" />
        </div>

        <div className="flex md:space-x-4 space-x-2 items-center">
          <a href="#" className="text-sm">
            Sign In
          </a>
          <a
            href="#"
            className="bg-blue-500 md:text-sm text-xs font-semibold text-white md:py-3 md:px-4 p-2 rounded-lg hover:bg-blue-600"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
