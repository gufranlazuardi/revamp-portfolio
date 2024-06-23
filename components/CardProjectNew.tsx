import React from "react";
import Image from "next/image";

const CardProjectNew = () => {
  return (
    <div className="w-50 flex flex-col h-50 border rounded-md">
      <Image
        src="/cinemahub-ss.png"
        alt="cinemahub"
        width={350}
        height={200}
        className="p-4"
      />
      <div className="flex justify-between px-4 pb-4">
        <p>Cinemahub</p>
        <div className="flex gap-2">
          <p>Next.js</p>
          <p>Typescript</p>
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default CardProjectNew;
