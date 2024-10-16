import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const DsHero = (props: any) => {
  const { heading, subheading, image, servicesImage, paragraph } = props.data;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-24 border-b-[1px] border-[#00AEEF] ">
      <div className=" lg:w-1/2 flex flex-col lg:justify-around  gap-24 lg:gap-0 ">
        <div>
          <h2 className="subtle-text py-4 ">{subheading}</h2>
          <h1 className="h1">{heading}</h1>
          <p className=" subtle-text py-4">{paragraph}</p>
        </div>

        <div className=" flex gap-6 ">
          {servicesImage.map((src: any, index: any) => (
            <div key={index} className="w-10 h-10 relative">
              <Image
              
                src={urlFor(src.image).url()}
                alt={`Service ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <Image
            src={urlFor(image).url()}
            alt="Person using computer with data visualizations"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DsHero;
