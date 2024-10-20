import MediaCard from "@/components/layout/MediaCard";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

const SecondSection = async () => {
  const data = await client.fetch(landingQuery);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col lg:flex-row gap-8 ">
        <div className="flex-1">
          <Image alt="shape" src="/shapeProven.png" width={559} height={554} />
        </div>

        <div className=" flex-1 flex flex-col items-center justify-center space-y-6">
          <h1 className="h1">Shape Your Proven AI Strategy</h1>
          <p className=" subtle-text">
            At Cogninest AI, we strongly believe that Vertical AI Strategy has
            become a crucial element in today’s technology-driven businesses. By
            stepping into the revolutionary world of artificial intelligence and
            machine learning, we can truly improve the way organizations
            interact customers. Work with our experienced AI Consultants to
            create the right strategy for your business and begin the journey
            towards growth and success...
          </p>
        </div>
      </div>

      {/* ------------------------------------- */}

      <div className=" pt-10 lg:pt-16">
        <h1 className="h1 text-center">Best Services for Manufacturing</h1>
        <div>
          <MediaCard services={data.consultingServices} />
        </div>

        <div className="flex justify-center pt-8 lg:pt-10">
          <Button className="btn">Let's Start Discuss About Project </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
