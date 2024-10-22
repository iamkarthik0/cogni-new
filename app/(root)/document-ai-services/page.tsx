import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DocumentHero from "@/components/shared/documentPage/DocumentHero";
import OurDocument from "@/components/shared/documentPage/OurDocument";
import TransformBusiness from "@/components/shared/documentPage/TransformBusiness";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <div className=" container mx-auto px-4 md:px-6 lg:px-8">
        <div>
          <DocumentHero />
        </div>

        <div className=" pt-16 lg:pt-20">
          <OurDocument />
        </div>
      </div>
      <div className="pt-16 lg:pt-24">
        <div className=" relative mx-auto  w-full h-[400px] lg:h-[710px] aspect-square">
          <Image alt="data-extraction" src="/label.png" fill className=" " />
        </div>
      </div>

      <div className=" container mx-auto px-4 md:px-6 lg:px-8  pt-10 lg:pt-20 ">
        <TransformBusiness />

        <div className=" pt-16  lg:pt-20">
          <BlogsAndUseCases />
        </div>

        <div className=" py-16  ly:pt-20">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default page;
