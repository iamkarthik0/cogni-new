
import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DsHero from "@/components/shared/dataSciencePage/DsHero";
import DsServices from "@/components/shared/dataSciencePage/DsServices";

import { dsQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import React from "react";


const page = async () => {
  const data = await client.fetch(dsQuery);
 
  return (
    <div className=" w-full h-full">
    
      <DsHero data={data.hero} />
      <DsServices data={data.services} />
      <BlogsAndUseCases />
      <div className="pt-12 lg:py-24">
          <ContactCard />
        </div>
   
    </div>
  );
};

export default page;
