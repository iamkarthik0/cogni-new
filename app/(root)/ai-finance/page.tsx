import MarketingMixSection from "@/components/shared/cpg-industry/MarketingMixSection";
import { BusinessBenefits } from "@/components/shared/financePage/BusinessBenefits";
import FinanceHero from "@/components/shared/financePage/FinanceHero";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div>
            <FinanceHero/>

            </div>

            <div className=" pt-4 lg:pt-6">
              <BusinessBenefits/>
            </div>
            <div className="  py-14 lg:py-20">
              <MarketingMixSection color="0055A7"/>
            </div>
      </div>
    </>
  );
};

export default page;
