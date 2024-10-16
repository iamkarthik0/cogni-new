import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";



const AiServiceCard = (props: any) => {
  const { paragraph, order, heading, img } = props;

  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-6">
        <div
          className={`lg:w-1/2 flex flex-col gap-6  ${order == "first" ? "lg:order-first" : "lg:order-last"}  `}
        >
          <h1 className=" h1"> {heading}</h1>
          <p className=" subtle-text text-left">{paragraph}</p>
        </div>
        <div className=" lg:w-1/2  flex ">
          <Image
            src={urlFor(img).url()}
            alt="Person using computer with data visualizations"
            width={539}
            height={340}
          />
        </div>
      </div>
    </>
  );
};

const GenerativeAiServices = (props: any) => {
  const { title, paragraph, ServicesCard } = props.data;
  
  return (
    <div className=" container mx-auto px-4  flex flex-col  pt-16 lg:pt-32 gap-12 lg:gap-20 ">
      <div className=" flex flex-col gap-5 lg:gap-7 ">
        <h1 className="h2 text-center">{title}</h1>
        <p className="subtle-text text-center">{paragraph}</p>
      </div>

      <div className=" flex flex-col  gap-8 lg:gap-16  ">
        {ServicesCard.map((data: any, index: any) => {
     
       return(
          <>
            <AiServiceCard
            key={index}
              img={data.image}
              paragraph={data.paragraph}
              order={data.order}
              heading={data.heading}
            />
          </>
       )
        })}
      </div>
    </div>
  );
};

export default GenerativeAiServices;
