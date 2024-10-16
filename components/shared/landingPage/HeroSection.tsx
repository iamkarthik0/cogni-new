"use client";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { urlFor } from "@/lib/sanity";

interface HeroSectionProps {
  className?: string;
  title?: string;
  paragraph?: any;
  subtitle?: string; 
  // buttonText?: string;
  // onButtonClick?: () => void;
  experienceYears?: number;
  imgUrl: any;
}

const HeroSection: FC<HeroSectionProps> = ({

  title = "Crafting tomorrow, AI today",
  paragraph = "Transform Unstructured and Structured Data into Actionable Insights. Specializing in extracting value from unstructured data like text, images, and documents through advanced AI techniques, including Natural Language Processing (NLP), Machine Learning (ML), Generative AI (Gen AI), and Deep Learning (DL).",
  imgUrl,
  subtitle,
  experienceYears = 12,
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-0">
    <div className=" lg:border-b-2 border-[#00AEEF] container mx-auto justify-between flex flex-col lg:flex-row  ">
      <div className=" flex ">
        <div className="flex flex-col justify-center space-y-2  ">
          <p className="subtle-text font-semibold ">
            {subtitle}
          </p>
          <div className="space-y-5">
            <h1 className="h1  space-y-2 ">
              {title.split(",").map((part, index) => (
                <span
                  key={index}
                  className={index === 1 ? "text-[#0055A7] gap-y-2 flex" : ""}
                >
                  {part}
                  {index === 0 && (
                    <span className=" ">
                      ,<br />
                    </span>
                  )}
                </span>
              ))}
            </h1>
            <p className="max-w-[600px] subtle-text ">{paragraph}</p>
          </div>
          <div className=" gap-2 min-[400px]:flex-row py-4 ">
            <Button className="btn">CONTACT US</Button>
          </div>
        </div>
       
      </div>

      <div className=" relative ">
        <Image src={urlFor(imgUrl).url()} width={753} height={680} alt="hero" />
        <div className=" lg:absolute bottom-0 bg-black lg:w-[50%] lg:p-4 p-6 ">
          <h1 className="h1 text-white">{experienceYears}+</h1>
          <p className="paragraph text-white">Years of Experience</p>
          <p className=" space-y-2 text-white text-sm w-full">
            Placerat quis libero et diam tellus lectus sagittis quisque
            hendrerit. Ipsum tincidunt.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
