import React from "react";

const BalanceItems = (props) => {
  const { title, fund, year, pic } = props;
  return (
    <div>
      <div className="drop-shadow-lg flex w-96 h-40 bg-gradient-to-br bg-[#ffffff] rounded-3xl flex-none">
        <div className="flex flex-col gap-1 pl-6 my-6 ">
          <div>
            <span className="font-bold text-xl">{title}</span>
          </div>
          <div>
            <span className="text-2xl">{fund}</span>
          </div>

          <div className="my-3">
            <span className="text-[#516F91]  rounded-md bg-[#D3D9E0] px-2 py-1 ">
              {year}
            </span>
          </div>
        </div>

        <div>
          <img className="w-32 ml-4 my-5" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BalanceItems;
