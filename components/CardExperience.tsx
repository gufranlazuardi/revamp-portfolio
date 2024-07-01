"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";

const CardExperience = () => {
  return (
    <>
      <div className="flex flex-col gap-8 mt-10">
        {/* experience 1 */}
        <div className="flex gap-12 w-full rounded-xl px-8 py-12 border-[#ff6a00] border-4 bg-gradient-to-r from-[#ff8331] to-[#ff9b54]">
          {/* kiri */}
          <div>
            <Image
              src="/core-initiative.png"
              width={100}
              height={100}
              alt="core-initiative"
            />
          </div>
          {/* kanan */}
          <div className="flex flex-col w-full">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  Core Initiative
                  <span className="text-sm font-normal"> - </span>
                  <span className="font-light text-sm">
                    Jakarta, Indonesia
                  </span>
                </p>
                <div className="text-xs md:text-md lg:text-base xl:text-base">
                  Mar 2024 – Apr 2024
                </div>
              </div>
              <div className="rounded-md text-sm bg-[#8d520e] opacity-80 px-4 py-3">
                Frontend Engineer
              </div>
            </div>
            <div className="flex flex-col mt-8 gap-2 text-justify">
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  I worked closely with designers to translate UI
                  mockups into pixel-perfect front-end components.
                  This involved slicing elements from design assets
                  and building them using a Vue. Focusing on clean and
                  reusable code helped me understand the importance of
                  maintainability in long-term projects
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  My focus on quality extended beyond implementation.
                  I actively participated in writing unit tests for my
                  components using Jest. This not only ensured the
                  reliability of my code but also instilled a strong
                  commitment to quality within me
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  I played a crucial role in integrating these APIs
                  within my front-end components, ensuring smooth data
                  retrieval and manipulation
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  I actively contributed to documentation focused on
                  Vue 3, solidifying my knowledge of the framework.
                  Additionally, collaborating on the team&apos;s
                  GitHub workflow equipped me with essential skills
                  for seamless version control using Git
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* experience 2 */}

        <div className="flex gap-12 w-full rounded-xl px-8 py-12 border-[#016bff] border-4 bg-gradient-to-r from-[#7ab2ff] to-[#82b6ff]">
          {/* kiri */}
          <div>
            <Image
              src="/tiketcom.png"
              width={100}
              height={100}
              alt="core-initiative"
            />
          </div>
          {/* kanan */}
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  Core Initiative
                  <span className="text-sm font-normal"> - </span>
                  <span className="font-light text-sm">
                    Jakarta, Indonesia
                  </span>
                </p>
                <div className="text-xs md:text-md lg:text-base xl:text-base">
                  Mar 2024 – Apr 2024
                </div>
              </div>
              <div className="rounded-md text-sm bg-[#264a7e] opacity-80 px-4 py-3">
                Product Operations
              </div>
            </div>
            <div className="flex flex-col mt-8 gap-2 text-justify">
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  Ensuring precise mapping in the system by rectifying
                  discrepancies between application points and actual
                  locations
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  Spearheading the development of an AI system to
                  identify components within hotel rooms, focusing on
                  the living room, bathroom, and bedroom for an
                  enriched user experience
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  Implemented strategies to unmerge hotels with
                  similar titles at identical location points,
                  optimizing the clarity and accuracy of our hotel
                  listings
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <p>•</p>
                <p className="text-sm">
                  Keeping Tiket.com competitive by dynamically
                  updating top hotel prices based on market
                  adjustments, ensuring alignment with fixed prices in
                  competitor applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExperience;
