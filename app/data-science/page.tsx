import BlogsAndUseCases from "@/components/ui/layout/BlogAndUseCase";
import ContactCard from "@/components/ui/layout/ContactCard";
import Footer from "@/components/ui/layout/Footer";
import Navbar from "@/components/ui/layout/Navbar";
import DsHero from "@/components/ui/shared/DsHero";
import DsServices from "@/components/ui/shared/DsServices";
import { dsQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import React from "react";


const page = async () => {
  const data = await client.fetch(dsQuery);
  console.log(data.hero);
  return (
    <div className=" w-full h-full">
      <Navbar />
      <DsHero data={data.hero} />
      <DsServices data={data.services} />
      <BlogsAndUseCases />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default page;
