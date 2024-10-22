import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import HealthHero from "@/components/shared/healthCarePage/HealthHero";
import Image from "next/image";
import React from "react";

const pase = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <HealthHero/>

   
      <div className=" pt-16">
        <BlogsAndUseCases />
      </div>

      <div className="py-12 lg:py-24">
        <ContactCard />
      </div>
    </div>
  );
};

export default pase;
