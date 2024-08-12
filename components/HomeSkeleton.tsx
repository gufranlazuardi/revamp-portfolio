import React from "react";
import { Skeleton } from "./ui/skeleton";

const HomeSkeleton = () => {
  return (
    <div className="flex flex-col mt-[2rem] gap-2">
      <Skeleton className="w-[20rem] h-[10rem]" />
      <Skeleton className="w-[10rem] h-[2rem]" />
      <Skeleton className="w-[10rem] h-[2rem]" />
      <Skeleton className="w-[10rem] h-[2rem]" />
      <Skeleton className="w-[30rem] h-[8rem]" />
    </div>
  );
};

export default HomeSkeleton;
