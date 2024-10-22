import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";

import CpgHero from "@/components/shared/cpg-industry/CpgHero";
import CpgMain from "@/components/shared/cpg-industry/CpgMain";
import MarketingMixSection from "@/components/shared/cpg-industry/MarketingMixSection";


import React from "react";



const page = () => {
  return (
    <>
      <div>
        <CpgHero />
      </div>

      <div className=" pt-16 lg:pt-24">
        <MarketingMixSection />
      </div>

      <CpgMain/>

      <div className=" py-12 lg:py-16">
        <BlogsAndUseCases />
      </div>

      <div className=" py-12 lg:py-16">
        <ContactCard />
      </div>
    </>
  );
};

export default page;
