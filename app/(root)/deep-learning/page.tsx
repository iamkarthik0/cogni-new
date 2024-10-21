import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DeepHero from "@/components/shared/DeepLearningHero/DeepHero";
import DeepMain from "@/components/shared/DeepLearningHero/DeppMain";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" container mx-auto px-4 md:px-6 lg:px-8">
        <div>
          <DeepHero />
        </div>

        <div>
            <DeepMain/>
        </div>

        <div className=" pt-8 lg:pt-14">
          <BlogsAndUseCases />
        </div>
        <div className=" py-8 lg:py-12">
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default page;
