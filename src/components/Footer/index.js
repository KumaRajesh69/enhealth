import React from "react";

const data = [
  {
    icon: "/images/Vector1.svg",
  },
  {
    icon: "/images/Vector2.svg",
  },
  //   {
  //     icon: "/images/Vector3.svg",
  //   },
  {
    icon: "/images/Vector4.svg",
  },
  {
    icon: "/images/Vector5.svg",
  },
];
function Footer() {
  return (
    <div className=" bg-custom-gradient ">
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white">
          <div className="space-y-5">
            <p className="font-serif-display text-5xl">EnHealth</p>
            <p>
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth. Por scientie, musica, sport etc, litot
              Europa usa li sam vocabular. Li lingues differe solmen in li.
            </p>
            <div>
              <div className="flex space-x-2 ">
                {data.map((item) => (
                  <button className="hover:text-blue-400">
                    <img src={item.icon} className="hover:opacity-50 h-10" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-col md:items-center  ">
            <div>
              <p className="text-xl">Quick Links</p>
            </div>
            <div className="space-y-3 mt-8">
              <a href="/About" class="block">
                About Us
              </a>
              <a href="/Service" class="block">
                Service
              </a>
              <a href="/Our Team" class="block">
                Our Team
              </a>
              <a href="/Testimonial" class="block">
                Testimonial
              </a>
            </div>
          </div>
          <div className="flex flex-col  ">
            <p className="text-xl">Contact Us</p>
            <div className="space-y-3 mt-8">
              <div className="flex space-x-2">
                <img src="/images/msg2.svg" />
                <p>hello@website.com</p>
              </div>
              <div className="flex space-x-2">
                <img src="/images/location.svg" className="self-start mt-2" />
                <a>
                  Riverside Building, County Hall, London SE1 7PB, United
                  Kingdom
                </a>
              </div>
              <div className="flex space-x-2">
                <img src="/images/call.svg" />
                <p>+02 5421234560</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b"></div>
      <div className="text-center font-medium text-xs text-white p-5">
        Ⓒ 2023 All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
