import React from "react";

const BlurEffects = () => {
  return (
    <>
      <div className="absolute w-[30rem] h-[5rem] top-[10rem] rounded-lg blur-3xl -rotate-45 right-0 bg-cyan-500 opacity-30"></div>
      <div className="absolute w-[15rem] h-[5rem] top-[2rem] left-[35rem] rounded-lg blur-3xl -rotate-45 right-0 bg-blue-500 opacity-30"></div>
      <div className="absolute w-[40rem] h-[5rem] top-[35rem] right-1 rounded-lg blur-3xl -rotate-45  bg-blue-500 opacity-30"></div>
    </>
  );
};

export default BlurEffects;
