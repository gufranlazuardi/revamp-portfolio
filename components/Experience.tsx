import React from "react";
import CardExperience from "./CardExperience";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col gap-4 pt-[4rem] mt-[4rem]">
        <h2 className="text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#0052D4] via-[#4364F7] to-[#6FB1FC]">
          Experience
        </h2>
        <CardExperience />
      </div>
    </>
  );
};

export default Experience;
