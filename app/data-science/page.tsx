
import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import DsHero from "@/components/shared/dataSciencePage/DsHero";
import DsServices from "@/components/shared/dataSciencePage/DsServices";

import { dsQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import React from "react";


const page = async () => {
  const data = await client.fetch(dsQuery);
 
  return (
    <div className=" w-full h-full">
      <Navbar />
      <DsHero data={data.hero} />
      <DsServices data={data.services} />
      <BlogsAndUseCases />
      <div className="pt-12 lg:py-24">
          <ContactCard />
        </div>
      <Footer />
    </div>
  );
};

export default page;
