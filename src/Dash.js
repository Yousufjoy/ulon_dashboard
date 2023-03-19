import React from "react";

const Dash = () => {
  return (
    <div className="container">
      {/* <div className="h-16 my-0 bg-[#ffffff] rounded-b-3xl shadow-stone-600 ">
         I'm navbar!
       </div> */}

      {/* side navbar */}

      <nav className="bg-[#ffffff] rounded-b-3xl drop-shadow">
        <div className="max-w-6xl mx-auto px-0">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="w-28"
                    src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%202.png?fbclid=IwAR2-EoMRb496K7XfKHYA4sWGyHi3Nua_z4Xek-8oCTWgWP_hrx6xut6kCEk"
                    alt=""
                  />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="font-bold py-5 px-3 text-gray-900 ">
                  11:13 PM
                </a>
                <a href="#" className="font-bold py-5 px-3 text-gray-900">
                  27th February 2023
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="#">
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
              </a>

              <div className="mx-2 font-semibold">
                {" "}
                Hi, <span className="font-bold">John!</span>{" "}
              </div>

              <a href="#">
                <img
                  className="w-12 mx-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Rubio_Circle.png"
                  alt=""
                />
              </a>

              <a href="#">
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
              </a>
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

      <div className="">
        <div className="flex my-12">
          <div className="w-1/6 h-screen ">
            <nav className="">
              <ul className="flex flex-col gap-10 ">
                <li>
                  <a
                    className="font-medium text-lg inline-block bg-[#06113C] rounded text-[#ffffff] w-40 h-8 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Dashboard
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#274C77] hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] font-medium text-lg  inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Loan Request
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#274C77] hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] font-medium text-lg inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                    Deposit Money
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#274C77] hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] font-medium text-lg inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                    Tempreture
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#274C77] hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] font-medium text-lg inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                    Electricity
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#274C77] hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] font-medium text-lg inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                      />
                    </svg>
                    Water
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#274C77] hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] font-medium text-lg  inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                    Wifi
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#274C77] font-medium text-lg hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                    Security
                  </a>
                </li>
              </ul>
            </nav>
            <div className="my-40">
              <ul>
                <li>
                  <a
                    className="text-[#274C77] font-medium hover:h-8 hover:bg-[#06113C] hover:text-[#ffffff] text-lg inline-block  hover:rounded hover:w-40 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      class="w-6 h-6 inline-block align-middle mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-5/6 h-screen ">
            <div className="flex gap-3">
              <div className="drop-shadow-lg flex w-96 h-40 bg-gradient-to-br bg-[#ffffff] rounded-3xl flex-none">
                <div className="flex flex-col gap-1 pl-6 my-6 ">
                  <div>
                    {" "}
                    <span className="font-bold text-xl">
                      Your savings balance
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl">$15,000</span>
                  </div>

                  <div className="my-3">
                    {" "}
                    <span className="text-[#516F91]  rounded-md bg-[#D3D9E0] px-2 py-1 ">
                      1 Year savings
                    </span>
                  </div>
                </div>

                <div>
                  <img
                    className="w-32 ml-4 my-5"
                    src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%207.png?fbclid=IwAR1ZqUyrnh5cR3oo9uT4-6jsubBUyVpvW8ThLhQYWZ-OmK0B1eszL9RKlMA"
                    alt=""
                  />
                </div>
              </div>
              <div className="drop-shadow-lg flex w-96 h-40 bg-gradient-to-br bg-[#ffffff] rounded-3xl flex-none">
                <div className="flex flex-col gap-1 pl-6 my-6 ">
                  <div>
                    {" "}
                    <span className="font-bold text-2xl">
                      Your Loan balance
                    </span>
                  </div>
                  <div className="">
                    <span className="text-2xl">$15,000</span>
                  </div>

                  <div className="my-4">
                    {" "}
                    <span className="rounded-md text-[#516F91] bg-[#D3D9E0] w-36 px-2 py-1">
                      6 Months Period
                    </span>
                  </div>
                </div>

                <div>
                  <img
                    className="w-28 ml-4 my-5"
                    src="https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%209.png?fbclid=IwAR3UZiFBeFI7iIFuaz6guNL6x0TRD8ckS7eSGvwFZ6t4pRFBo2YxxMorTTY"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-56 h-40 drop-shadow-lg bg-gradient-to-br bg-[#ffffff] rounded-3xl flex-none">
                <div className="flex flex-col gap-1 pl-6 my-6 ">
                  <div>
                    {" "}
                    <span className="font-bold text-2xl  ">
                      Current Interest
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl">12%</span>
                  </div>

                  <div className="my-4">
                    {" "}
                    <span className="text-[#516F91]  bg-[#D3D9E0]  rounded-md w-24 py-1 px-2">
                      6 Month Period
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd row  */}
            <div className="flex gap-1">
              <div className="w-3/5">
                {" "}
                <div className="w-auto h-40 drop-shadow-lg bg-[#ffffff] rounded-3xl flex-none my-6">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2 pl-6 my-4 ">
                      <span className="font-bold text-2xl ">
                        Your Active Loan
                      </span>
                      <div className="flex flex-col gap-0 ">
                        <div className="font-base text-3xl"> Md. Yousuf</div>
                        <div className="text-[#516F91] font-semibold">
                          {" "}
                          Student
                        </div>
                        <div className="text-[#516F91]">
                          United International University
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 my-5 ">
                      <span className="font-bold text-xl mx-5 ">
                        Total Amount
                      </span>
                      <div className="text-2xl ">
                        <span className="mx-14">$15,000</span>
                      </div>
                      <div className="my-5">
                        <span className=" text-[#516F91] bg-[#D3D9E0] rounded-md w-24 px-4 py-1 mx-12 ">
                          #C7456YU
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-auto h-60 drop-shadow-lg bg-[#ffffff] rounded-3xl flex-none">
                    <div className="flex flex-col gap-0 pl-6  ">
                      <div className="flex flex-col my-4 gap-2">
                        <div>
                          {" "}
                          <span className="font-bold text-2xl ">
                            Your Profile
                          </span>
                        </div>
                        <div className="flex flex-col gap-0 ">
                          <div className="font-base text-3xl">
                            {" "}
                            Sadab Uz Zaman
                          </div>
                          <div className="text-[#516F91] font-semibold">
                            {" "}
                            Student
                          </div>
                          <div className="text-[#516F91]">
                            United International University
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="my-3">
                            {" "}
                            <span className="text-[#516F91]  rounded-md bg-[#D3D9E0] px-2 py-1 ">
                              Mobile: 01303679325
                            </span>
                          </div>
                          <div className="">
                            {" "}
                            <span className="text-[#516F91] rounded-md bg-[#D3D9E0] px-2 py-1 ">
                              Date Of Birth : 20/2/2003
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/5">
                {" "}
                <div className="justify-between h-90 my-6 flex w-auto ml-8 drop-shadow-lg bg-[#ffffff] rounded-3xl flex-none">
                  <div className="flex flex-col gap-0 pl-6 my-3 ">
                    <div className="flex flex-col">
                      <div>
                        {" "}
                        <span className="font-bold text-2xl ">
                          Your Given Loan
                        </span>
                      </div>
                    </div>

                    <div>
                      {" "}
                      <div className="flex flex-col gap-0 ">
                        <div className="font-base text-2xl"> Md. Al-Amin</div>
                        <div className="text-[#516F91] font-semibold">
                          {" "}
                          Student
                        </div>
                        <div className="text-[#516F91] ">
                          United International University
                        </div>
                      </div>
                      <span className="text-[#516F91]  bg-[#D3D9E0] rounded-md w-24 px-3 mx-0">
                        #C7456YU
                      </span>{" "}
                      <hr className="my-3" />
                      {/* from here!!!!! */}
                      <div className="flex">
                        <div className="w-4/5 my-0">
                          <div className="flex flex-col">
                            <div>
                              {" "}
                              <span className="font-bold text-2xl ">
                                Your Given Loan
                              </span>
                            </div>
                          </div>
                          <div>
                            {" "}
                            <div className="flex flex-col gap-0">
                              <div className="font-base text-2xl">
                                {" "}
                                Md. Al-Amin
                              </div>
                              <div className="text-[#516F91] font-semibold">
                                {" "}
                                Student
                              </div>
                              <div className="text-[#516F91]">
                                United International Unive
                              </div>
                            </div>
                            <span className="f text-[#516F91] bg-[#D3D9E0] rounded-md w-24 px-3 mx-0">
                              #C7456YU
                            </span>{" "}
                            {/* from here!!!!! */}
                          </div>
                        </div>
                        <div className="my-0 text-2xl w-1/5 pl-16">$15,000</div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5 text-2xl mr-3">$15,000</div>
                </div>
                <div className="ml-8 h-52 drop-shadow-lg bg-[#ffffff] rounded-3xl flex-none w-auto">
                  <div className="flex flex-col gap-3 pl-6 my-6  py-4">
                    <div>
                      {" "}
                      <span className="font-bold text-2xl">NOTICE BOARD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
