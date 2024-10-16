import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import CustomMlService from "@/components/shared/ml-dl-servicePage/CustomMlService";
import MlExpert from "@/components/shared/ml-dl-servicePage/MlExpert";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

const page = async () => {
  const data = await client.fetch(landingQuery);
  return (
    <>
   

      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------------Hero Section--------------------- */}
        <div className=" w-full flex flex-col lg:flex-row ">
          <div className="flex flex-col  justify-center lg:w-1/2  gap-6 py-8 lg:pt-8">
            <p className="subtle-text">We will provide</p>
            <h1 className="h1">Machine Learning</h1>
            <p className="subtle-text">
              From Data Crunching to Actionable Insights—Machine Learning
              Services empower organizations to Make Smarter Decisions.
            </p>
            <div>
              <Button className="btn">CONTACT US</Button>
            </div>
          </div>

          <div className=" lg:w-1/2  flex justify-end items-end">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden ">
              <Image
                src="/ml-dl.png"
                alt="Person using computer with data visualizations"
                fill
                className="object-cover rounded-none"
              />
            </div>
          </div>
        </div>
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
            <Button className="btn ">CONTACT US</Button>
          </div>
        </div>

        {/* ---------------DataScienceConsulting Component--------------- */}

        <div className="pt-12 lg:pt-24">
          <DataScienceConsulting services={data.consultingServices} />
        </div>
        {/* ---------------BlogUseCase Component--------------- */}
        <div className="pt-12 lg:pt-24">
          <BlogsAndUseCases />
        </div>

        {/* ---------------ContactCard Component--------------- */}
        <div className="pt-12 lg:pt-24">
          <ContactCard />
        </div>


      </div>
   
    </>
  );
};

export default page;
