import React from "react";

function Intro({ width: width }) {
  return (
    <div
      className="flex justify-between py-24 mx-auto"
      style={{ width: width }}
    >
      <div className="pt-12 space-y-6">
        <p className="text-2xl font-medium text-gray-500 tracking-wider">
          PREVENTING WATER LEAKAGE
        </p>
        <h1 className="text-5xl font-semibold font-poppins w-[70%] leading-snug">
          Water wastage solved in simple way,
          <span className="text-5xl px-12 text-green-300 font-Mixed font-bold">
            Splash
          </span>
        </h1>
        <p className="w-[60%] text-gray-400 font-medium pt-6">
          Reducing water wastage in the country from current percentage of 36.7%
          down to at least 20% every Year. We will implement the system in rural
          areas in the first place.
        </p>
        <div className="flex gap-10">
          <button className="bg-[#23BDEE] hover:bg-[#4098b3] rounded-3xl px-6 text-white font-poppins font-semibold">
            How it works
          </button>
          <div class="flex items-center space-x-[-14px]">
            <img
              src="/images/user1.png"
              alt="User 1"
              className="w-12 h-12 rounded-full"
            />

            <img
              src="/images/user2.png"
              alt="User 2"
              className="w-12 h-12 rounded-full"
            />

            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-sm font-semibold">
              4k+
            </div>
          </div>

          <div>
            <p className="font-lato font-bold text-2xl">15K</p>
            <p className=" text-md font-lato font-medium text-gray-400">
              Customer Reviews
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/mobile_view.png"
          alt="Mobile view of our Application"
          width={700}
        />
      </div>
    </div>
  );
}

export default Intro;
