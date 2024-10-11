import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProjectSkeleton = () => {
  return (
    <div className="mt-[7rem]">
      <Skeleton className="w-[10rem] h-10"></Skeleton>
      <Skeleton className="w-full h-[8rem] mt-[2rem]"></Skeleton>
      <div className="flex flex-wrap gap-[1rem]">
        {"123123".split("").map((i) => (
          <Skeleton
            className="w-[20rem] h-[16rem] mt-[2rem]"
            key={i}
          ></Skeleton>
        ))}
      </div>
    </div>
  );
};

export default ProjectSkeleton;
