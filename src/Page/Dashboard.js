import React from "react";
import Navbar from "../components/Navbar";
import Savings from "../components/BalanceItems";
import SideNav from "../components/SideNav";

const Dashboard = () => {
  const savings = [
    {
      id: 1,
      title: "Your savings balance",
      fund: "$15,000",
      year: "1 Year savings",
      pic: "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%207.png?fbclid=IwAR1ZqUyrnh5cR3oo9uT4-6jsubBUyVpvW8ThLhQYWZ-OmK0B1eszL9RKlMA",
    },
  ];

  const loans = [
    {
      id: 1,
      title: "Your Loan balance",
      fund: "$15,000",
      year: "6 Months Period",
      pic: "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/Asset%209.png?fbclid=IwAR3UZiFBeFI7iIFuaz6guNL6x0TRD8ckS7eSGvwFZ6t4pRFBo2YxxMorTTY",
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <div className="">
        <div className="flex my-12">
          <div className="w-1/6 h-screen ">
            <SideNav />
          </div>
          <div className="w-5/6 h-screen ">
            <div className="flex gap-3">
              {savings.map((saving) => {
                return (
                  <Savings
                    id={saving.id}
                    title={saving.title}
                    fund={saving.fund}
                    year={saving.year}
                    pic={saving.pic}
                  />
                );
              })}
              {loans.map((loan) => {
                return (
                  <Savings
                    id={loan.id}
                    title={loan.title}
                    fund={loan.fund}
                    year={loan.year}
                    pic={loan.pic}
                  />
                );
              })}

              <div className="w-56 h-40 drop-shadow-lg bg-gradient-to-br bg-[#ffffff] rounded-3xl flex-none">
                <div className="flex flex-col gap-1 pl-6 my-6 ">
                  <div>
                    <span className="font-bold text-xl ">Current Interest</span>
                  </div>
                  <div>
                    <span className="text-2xl">12%</span>
                  </div>

                  <div className="my-4">
                    <span className="text-[#516F91]  bg-[#D3D9E0]  rounded-md w-24 py-1 px-2">
                      6 Month Period
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd row  */}
            <div className="flex gap-1">
              <div className="w-3/5">
                <div className="w-auto h-40 drop-shadow-lg bg-[#ffffff] rounded-3xl flex-none my-6">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2 pl-6 my-4 ">
                      <span className="font-bold text-xl ">
                        Your Active Loan
                      </span>
                      <div className="flex flex-col gap-0 ">
                        <div className="font-base text-3xl"> Md. Yousuf</div>
                        <div className="text-[#516F91] font-semibold">
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
                          <span className="font-bold text-xl">
                            Your Profile
                          </span>
                        </div>
                        <div className="flex flex-col gap-0 ">
                          <div className="font-base text-3xl">
                            Sadab Uz Zaman
                          </div>
                          <div className="text-[#516F91] font-semibold">
                            Student
                          </div>
                          <div className="text-[#516F91]">
                            United International University
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="my-3">
                            <span className="text-[#516F91]  rounded-md bg-[#D3D9E0] px-2 py-1 ">
                              Mobile: 01303679325
                            </span>
                          </div>
                          <div className="">
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
                <div className="justify-between h-90 my-6 flex w-auto ml-8 drop-shadow-lg bg-[#ffffff] rounded-3xl flex-none">
                  <div className="flex flex-col gap-0 pl-6 my-3 ">
                    <div className="flex flex-col">
                      <div>
                        <span className="font-bold text-xl">
                          Your Given Loan
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col gap-0 ">
                        <div className="font-base text-2xl"> Md. Al-Amin</div>
                        <div className="text-[#516F91] font-semibold">
                          Student
                        </div>
                        <div className="text-[#516F91] ">
                          United International University
                        </div>
                      </div>
                      <span className="text-[#516F91]  bg-[#D3D9E0] rounded-md w-24 px-3 mx-0">
                        #C7456YU
                      </span>
                      <hr className="my-3" />
                      {/* from here!!!!! */}
                      <div className="flex">
                        <div className="w-4/5 my-0">
                          <div className="flex flex-col">
                            <div>
                              <span className="font-bold text-xl">
                                Your Given Loan
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-col gap-0">
                              <div className="font-base text-2xl">
                                Md. Al-Amin
                              </div>
                              <div className="text-[#516F91] font-semibold">
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
                      <span className="font-bold text-xl">NOTICE BOARD</span>
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

export default Dashboard;
