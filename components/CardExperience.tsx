import Image from "next/image";
import { Separator } from "./ui/separator";

const CardExperience = () => {
  return (
    <>
      <div className="flex flex-col gap-8 mt-10">
        <div className="flex flex-col gap-4">
            {/* experience 1 */}
          <div className="flex relative gap-4 w-full rounded-xl border px-8 py-12 border-orange-700 border-4 bg-gradient-to-r from-[#FF7D29] to-[#FF7D29]">
            <div className="relative w-40"> {/* Adjust the width as needed */}
              <Image src="/core-initiative.png" layout="fill" objectFit="contain" alt="core-initiative"/>
            </div>
            <div className="absolute border rounded-md text-sm top-0 right-0 border bg-slate-800 opacity-80 mr-10 mt-14 px-4 py-3">
              Frontend Engineer           
            </div>
            <div className="flex flex-col">
              <div className="gap-2">
                <span className="text-2xl font-semibold">
                  Core Initiative
                </span>
                <span> - {""}</span>
                <span className="italic text-md">Jakarta, Indonesia</span>
              </div>
              <div>
                <p className="text-xs md:text-md lg:text-base xl:text-base">
                  Mar 2024 – Apr 2024
                </p>
              </div>
            <div className="flex flex-col mt-4 gap-2 text-justify">
              <p className="text-sm">
                • I worked closely with designers to translate UI
                mockups into pixel-perfect front-end components. This
                involved slicing elements from design assets and
                building them using a Vue. Focusing on clean and
                reusable code helped me understand the importance of
                maintainability in long-term projects
              </p>
              <p className="text-sm">
                • My focus on quality extended beyond implementation.
                I actively participated in writing unit tests for my
                components using Jest. This not only ensured the
                reliability of my code but also instilled a strong
                commitment to quality within me
              </p>
              <p className="text-sm">
                • I played a crucial role in integrating these APIs
                within my front-end components, ensuring smooth data
                retrieval and manipulation
              </p>
              <p className="text-sm">
                • I actively contributed to documentation focused on
                Vue 3, solidifying my knowledge of the framework.
                Additionally, collaborating on the team&apos;s GitHub
                workflow equipped me with essential skills for
                seamless version control using Git
              </p>
            </div>
            </div>
           
          </div>
          <Separator />

          {/* experience 2 */}

          <div className="flex relative gap-4 w-full rounded-xl border px-8 py-12 border-orange-700 border-4 bg-gradient-to-r from-[#FF7D29] to-[#FF7D29]">
            <div className="relative w-40"> {/* Adjust the width as needed */}
              <Image src="/core-initiative.png" layout="fill" objectFit="contain" alt="core-initiative"/>
            </div>
          <div className="flex flex-col">
            <div className="gap-2">
              <span className="text-xl font-semibold">
                Tiket.com {""}
              </span>
              <span> - {""}</span>
              <span className="italic">Jakarta, Indonesia</span>
            </div>
            <div>
              <p className="text-xs md:text-md lg:text-base xl:text-base">
                Oct 2022 – Jan 2024
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-justify">
            <p className="text-sm">
              • Ensuring precise mapping in the system by rectifying
              discrepancies between application points and actual
              locations
            </p>
            <p className="text-sm">
              • Spearheading the development of an AI system to
              identify components within hotel rooms, focusing on the
              living room, bathroom, and bedroom for an enriched user
              experience
            </p>
            <p className="text-sm">
              • Implemented strategies to unmerge hotels with similar
              titles at identical location points, optimizing the
              clarity and accuracy of our hotel listings
            </p>
            <p className="text-sm">
              • Keeping Tiket.com competitive by dynamically updating
              top hotel prices based on market adjustments, ensuring
              alignment with fixed prices in competitor applications
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExperience;
