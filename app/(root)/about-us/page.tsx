import OurApproach from "@/components/shared/aboutUs/OurApproach";
import WhoWeAre from "@/components/shared/aboutUs/WhoWeAre";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      {/* ---------------------------hero Section  ----------------------------*/}
      <div className="  w-full  ">
        <div className="  ">
          <div className="relative w-full h-[708px] aspect-square  overflow-hidden  ">
            <Image
              src="/about-us.png"
              alt="hero"
              fill
              className="object-cover "
            />
            <div className=" w-full h-full absolute flex items-center px-8 md:px-16 lg:pl-24 bg-opacity-50 bg-black lg:bg-opacity-20  ">
              <h1 className=" text-center md:text-left h2 w-full lg:w-2/4 xl:w-2/4 text-white border-solid ">
                <div>
                  <ul className=" space-y-2">
                    {" "}
                    <li> In a complex</li>
                    <li> world clouded</li>
                    <li> with ambiguity,</li>
                    <li> certainty is power</li>
                  </ul>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 
      ---------------------------------- Who We ARE ------------------------------- */}

      <div className=" pt-16 lg:pt-20">
        <WhoWeAre />
      </div>
      {/* 
      ---------------------------------- Our vision ------------------------------- */}

      <div className="pt-16 lg:pt-20 px-9 pb-16 lg:pb-32">
        <OurApproach/>

      </div>

    </div>
  );
};

export default page;
