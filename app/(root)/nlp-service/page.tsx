import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import NlpHero from "@/components/shared/nlpPage/NlpHero";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

const page = async () => {
  const data = await client.fetch(landingQuery);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <NlpHero/>
        {/* ---------------------------Hero Section--------------------- */}

        <div className=" flex flex-col gap-8  text-left lg:pt-14">
          <h1 className=" h1">
            Convert your unstructured data into insights with NLP techniques...
          </h1>
          <p className=" subtle-text">
            Using a blend of linguistics, machine learning, and AI natural
            language processing, Cogninest AI provides services for natural
            language processing. You may include NLP skills into your software
            applications with the assistance of our staff. This will let you
            quickly handle papers and get rid of complexity through NLP document
            processing. Your company may create a next-generation digital
            assistant that is contextually relevant, speaks human language, and
            makes smarter judgments by utilizing our NLP knowledge.
          </p>
          <div>
            <Button className=" btn">Lets start a project</Button>
          </div>

          <div className=" flex  justify-center items-center">
            <Image src="/convert.png" alt="convert" width={1149} height={100} />
          </div>
        </div>

        {/* ---------------------------Second Section--------------------- */}
      </div>

      {/* ---------------DataScienceConsulting Component--------------- */}

      <div className="pt-12 ">
        <DataScienceConsulting services={data.consultingServices} />
      </div>
      <div className="pt-12 lg:pt-24">
        <BlogsAndUseCases />
      </div>

      <div className="pt-12 lg:py-24">
        <ContactCard />
      </div>
    </>
  );
};

export default page;
