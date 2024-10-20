import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import CloudHero from "@/components/shared/cloudConsultantPage/CloudHero";
import { MainSection } from "@/components/shared/cloudConsultantPage/MainSection";
import React from "react";

export default function page() {
  return (
    <>
      <div className=" container mx-auto px-4 md:px-6 lg:px-8">
        <div>
          <CloudHero />
        </div>

        <div className=" pt-16">
            <MainSection/>
        </div>


        <div>
            <BlogsAndUseCases/>
        </div>

        <div  className=" pt-10 lg:py-20">
            <ContactCard/>
        </div>
      </div>
    </>
  );
}
