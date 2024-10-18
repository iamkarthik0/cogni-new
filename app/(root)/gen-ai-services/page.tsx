import { Button } from "@/components/ui/button";
import { genAIQuery, landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import GenerativeAiServices from "@/components/shared/genAiPage/GenerativeAiServices";
import DataService from "@/components/shared/genAiPage/DataService";
import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import GenAIHero from "@/components/shared/genAiPage/GenAIHero";


const page = async () => {
  const data = await client.fetch(genAIQuery);
  const result = await client.fetch(landingQuery);

  return (
    <div className=" w-full h-full">
   
      <div className=" container  mx-auto px-4 sm:px-6 lg:px-8  ">
        
            <GenAIHero/>
        <div className=" pt-16 lg:pt-32">
          {/* <DataScienceConsulting services={data.consultingServices} /> */}
        </div>

        <div>
          <GenerativeAiServices data={data.aiServices} />
        </div>

        <div>
          <DataService serviceCard={result.services.ServicesCard} />
        </div>
      </div>

      <BlogsAndUseCases />
      <div className="pt-12 lg:py-24">
          <ContactCard />
        </div>
    
    </div>
  );
};

export default page;
