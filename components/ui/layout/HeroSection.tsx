"use client";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
  title?: string;
  paragraph?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  experienceYears?: number;
}

const HeroSection: FC<HeroSectionProps> = ({
  className,
  title = "Crafting tomorrow, AI today",
  paragraph = "Transform Unstructured and Structured Data into Actionable Insights. Specializing in extracting value from unstructured data like text, images, and documents through advanced AI techniques, including Natural Language Processing (NLP), Machine Learning (ML), Generative AI (Gen AI), and Deep Learning (DL).",
  buttonText = "CONTACT US",
  onButtonClick = () => {},
  experienceYears = 12,
}) => {
  return (
    <div className=" px-4 md:px-6 container mx-auto  flex flex-col lg:flex-row ">
      <div className=" flex ">
        <div className="flex flex-col justify-center space-y-2 lg:border-b-2 border-[#00AEEF]">
          <p className="subtle-text font-semibold ">
            Expert AI, ML, NLP, and Gen AI Consultancy
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
          <div className=" gap-2 min-[400px]:flex-row">
            <Button onClick={onButtonClick} className="btn ">
              {buttonText}
            </Button>
          </div>
        </div>
        {/* <div className="flex items-end justify-center flex-col lg:flex-row    ">
            <div className="relative flex  w-[400px] h-[480px] lg:w-[753px] lg:h-[580px] ">
              <Image
                src="/hero.png"
                alt="AI Robot"
                layout="fill"
                objectFit="cover"
                className=""
                priority
              />
              <div className="hidden lg:block lg:absolute  lg:bottom-0 left-0 bg-black bg-opacity-90 p-8 lg:w-[60%] rounded ">
                <h1 className="h1 text-white">{experienceYears}+</h1>
                <p className="paragraph text-white">Years of Experience</p>
                <p className=' space-y-2 text-white text-sm w-full'>Placerat quis libero et diam tellus lectus sagittis quisque hendrerit. Ipsum tincidunt.</p>
              </div>
          
            </div>
            <div className="lg:hidden w-full  lg:bottom-0 left-0 bg-black bg-opacity-90 p-8 lg:w-[60%] rounded ">
                <h1 className="h1 text-white">{experienceYears}+</h1>
                <p className="paragraph text-white">Years of Experience</p>
                <p className=' space-y-2 text-white text-sm w-full'>Placerat quis libero et diam tellus lectus sagittis quisque hendrerit. Ipsum tincidunt.</p>
              </div>
          </div> */}
      </div>

      <div className=" relative">
        <Image src="/hero.png" width={753} height={680} alt="hero" />
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
  );
};

export default HeroSection;
