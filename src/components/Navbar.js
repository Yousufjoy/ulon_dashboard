import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#ffffff] rounded-b-3xl drop-shadow">
      <div className="max-w-6xl mx-auto px-0">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <div
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <img
                  className="w-28"
                  src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%202.png?fbclid=IwAR2-EoMRb496K7XfKHYA4sWGyHi3Nua_z4Xek-8oCTWgWP_hrx6xut6kCEk"
                  alt=""
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <div className="font-bold py-5 px-3 text-gray-900 ">11:13 PM</div>
              <div href="#" className="font-bold py-5 px-3 text-gray-900">
                27th February 2023
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div href="#">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div className="mx-2 font-semibold">
              {" "}
              Hi, <span className="font-bold">John!</span>{" "}
            </div>

            <div href="#">
              <img
                className="w-12 mx-3"
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Rubio_Circle.png"
                alt=""
              />
            </div>

            <button href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
