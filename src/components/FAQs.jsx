import React, { useState } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";

function Frequently_asked_questions({ width: width }) {
  const Questions = [
    {
      question: "Is splash a mobile based app ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How to download the mobile APP?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How does Splash works?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How does Splash benefits the community?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };
  return (
    <div className="mx-auto py-48" style={{ width: width }}>
      <div className="space-y-4 pb-6">
        <button className="border hover:font-semibold border-[#23BDEE] px-12 flex mx-auto text-[#23BDEE] hover:bg-[#23BDEE] hover:text-white rounded-2xl py-1 duration-500">
          FAQs
        </button>
        <h2 className="font-poppins text-3xl text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-center w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
      </div>
      <div className="border border-gray-400 rounded-xl py-12 px-32 space-y-12 w-[80%] mx-auto">
        {Questions.map((item, index) => (
          <div key={index} className="border-b py-6 space-y-4">
            <div className="flex justify-between">
              <h2 className="text-3xl font-poppins">{item.question}</h2>

              {expandedIndex == index ? (
                <div onClick={() => toggleExpand(index)}>
                  <GrSubtract style={{ fontWeight: "bolder" }} size={25} />
                </div>
              ) : (
                <div onClick={() => toggleExpand(index)}>
                  <GrAdd style={{ fontWeight: "bolder" }} size={20} />
                </div>
              )}
            </div>

            {expandedIndex == index && (
              <div>
                <p className="text-lg text-gray-400 font-normal">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frequently_asked_questions;
