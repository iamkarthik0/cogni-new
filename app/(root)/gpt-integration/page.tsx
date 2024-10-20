import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import GptHero from "@/components/shared/gptPage/GptHero";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" container mx-auto px-4 md:px-6 lg:px-8">

            <div className=" pt-8 lg:pt-14">
                <GptHero/>
            </div>

      <div>
        <BlogsAndUseCases/>
      </div>

<div className=" py-16 lg:py-20">
    <ContactCard/>

</div>
      </div>
    </>
  );
};

export default page;
