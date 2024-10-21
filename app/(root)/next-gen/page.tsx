import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import NextHero from "@/components/shared/nextGenPage/NextHero";
import { NextMain } from "@/components/shared/nextGenPage/NextMain";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <NextHero />
      </div>

      <div className=" container mx-auto px-4 md:px-6 lg:px-8 pt-14 lg:pt-20">
        <div>
          <NextMain />
        </div>

        <div>
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
