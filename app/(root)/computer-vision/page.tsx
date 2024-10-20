import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import ComputerHero from "@/components/shared/computerVisionPage/ComputerHero";
import ComputerMainSection from "@/components/shared/computerVisionPage/ComputerMainSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" container mx-auto px-4 md:px-6 lg:px-8 ">
        <div className=" pt-10">
          <ComputerHero />
        </div>

        <div>
          <ComputerMainSection />
        </div>

        <div>
          <BlogsAndUseCases />
        </div>
        <div className=" py-8 lg:py-12">
          <ContactCard />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default page;
