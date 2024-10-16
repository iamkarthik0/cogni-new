import { Button } from "@/components/ui/button";

import { genAIQuery, landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";

import Image from "next/image";
import React from "react";

import Navbar from "@/components/layout/Navbar";
import GenerativeAiServices from "@/components/shared/genAiPage/GenerativeAiServices";
import DataService from "@/components/shared/genAiPage/DataService";
import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import Footer from "@/components/layout/Footer";

const page = async () => {
  const data = await client.fetch(genAIQuery);
  const result = await client.fetch(landingQuery);

  return (
    <div className=" w-full h-full">
      <Navbar />
      <div className=" container  mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className=" w-full flex flex-col lg:flex-row ">
          <div className="flex flex-col justify-between lg:w-1/2  gap-6 py-8 lg:pt-8">
            <p className="subtle-text">We will provide</p>
            <h1 className="h1">
              Embrace transformation’s newest frontier: Generative AI
            </h1>
            <p className="subtle-text">
              New frontiers in the development of artificial intelligence are
              being opened by generative AI. It gives us access to limitless
              potential, accelerates digital transformation, and significantly
              alters business and work with increased degrees of human-machine
              cooperation. With responsible use, we may turn this technology
              into a vehicle for AI-powered predictive analytics and AI-driven
              innovation, which will enhance daily living, encourage creativity,
              and open up new avenues for exploration.
            </p>
            <div>
              <Button className="btn">CONTACT US</Button>
            </div>
          </div>

          <div className=" lg:w-1/2  flex justify-end items-end">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden ">
              <Image
                src="/ai-service.png"
                alt="Person using computer with data visualizations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" pt-16 lg:pt-32">
          {/* <DataScienceConsulting services={data.consultingServices} /> */}
        </div>

        <div>
          <GenerativeAiServices data={data.aiServices} />
        </div>

        <div>
          <DataService serviceCard={result.services.ServicesCard} />
        </div>
      </div>

      <BlogsAndUseCases />
      <div className="pt-12 lg:py-24">
          <ContactCard />
        </div>
      <Footer />
    </div>
  );
};

export default page;
