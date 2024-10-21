import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import IdpHero from "@/components/shared/idpPage/IdpHero";
import IdpMain from "@/components/shared/idpPage/IdpMain";
import React from "react";

export default function page() {
  return (
    <>
      <div className=" container mx-auto px-4 md:px-6 lg:px-6">
        <div>
          <IdpHero />
        </div>

        <div className=" pt-10 lg:pt-16">
          <IdpMain />
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
}
