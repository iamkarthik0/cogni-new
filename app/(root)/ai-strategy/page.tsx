import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import SecondSection from "@/components/shared/strategyPage/SecondSection";
import StrategyHero from "@/components/shared/strategyPage/StrategyHero";
import React from "react";

const page = () => {
  return (
    <>
      <div className="lg:pt-16 w-full">
        <StrategyHero />
      </div>

      <div className=" pt-16 lg:pt-20">
        <SecondSection/>
      </div>

      <div>
        <BlogsAndUseCases/>
      </div>

      <div className=" pt-8 lg:py-16">
        <ContactCard/>
      </div>
    </>
  );
};

export default page;
