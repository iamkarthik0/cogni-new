import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import MediaCard from "@/components/layout/MediaCard";
import CustomMlService from "@/components/shared/ml-dl-servicePage/CustomMlService";
import MlDlHero from "@/components/shared/ml-dl-servicePage/MlDlHero";
import MlExpert from "@/components/shared/ml-dl-servicePage/MlExpert";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {

  const card = [
    {
      heading: "Predictive Analysis",
      paragraph:
        "Our AI-powered solutions provider tools evaluate data and provide precise predictions about the future using sophisticated statistical and machine learning methods",
    },
    {
      heading: "Deep Learning",
      paragraph:
        "Deep learning services enable machines to see patterns and make wise judgments by autonomously learning from data using neural networks and attention models.",
    },
    {
      heading: "Natural Language Processing",
      paragraph:
        "Through the use of NLP technologies, robots are able to comprehend and interpret human language, facilitating more effective decision-making and communication.",
    },
    {
      heading: "Computer Vision",
      paragraph:
        "Computer vision technologies such as Cogninest AI makes it possible to analyze and interpret images. Applications including medical imaging, object detection, and picture recognition are enhanced by it.",
    },
    {
      heading: "Speech Recognition",
      paragraph:
        "Our voice recognition system accurately transcribes and interprets spoken language using state-of-the-art machine learning algorithms.",
    },
    {
      heading: "Predictive Analysis",
      paragraph:
        "Our predictive analysis solutions use advanced statistical and machine learning algorithms to analyze data and accurately predict future events.",
    },
  ];
  const data = await client.fetch(landingQuery);
  return (
    <>
   

      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------------Hero Section--------------------- */}
          <MlDlHero/>
        {/* ---------------------------CustomMlService Component--------------------- */}
        <div className=" pt-12 lg:pt-20 ">
          <CustomMlService />
        </div>
        {/* ---------------------------mlExpert Component--------------------- */}
        <div className="pt-12 lg:pt-24">
          <MlExpert />
        </div>
        {/* ---------------------------Contact Section--------------------- */}
        <div className=" flex justify-center  items-center flex-col gap-8 pt-12 lg:pt-24 ">
          <h4 className="h4 text-center max-w-4xl">
            By utilizing predictive analytics use cases, you can make the most
            of your data and get a competitive advantage in the fast-paced
            commercial world of today
          </h4>
          <div>
          <Link href="/contact-us">
            <Button className="btn ">CONTACT US</Button>
            </Link>
          </div>
        </div>

        {/* ---------------DataScienceConsulting Component--------------- */} 

        <div className=" space-y-8 text-center pt-10 lg:pt-16">
            <h1 className=" h2">Transform The Future With Our ML Services</h1>
            <MediaCard services={{card}} />
          </div>
     
        {/* ---------------BlogUseCase Component--------------- */}
        <div className="pt-12 lg:pt-24">
          <BlogsAndUseCases />
        </div>

        {/* ---------------ContactCard Component--------------- */}
        <div className="py-12 lg:py-24">
          <ContactCard />
        </div>


      </div>
   
    </>
  );
};

export default page;
