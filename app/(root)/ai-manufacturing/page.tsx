import Link from "next/link";
import React from "react";
import FeatureCard from "@/components/layout/FeatureCard";
import MediaCard from "@/components/layout/MediaCard";

import WhyCogninest from "@/components/shared/manufacturingPage/WhyCogninest";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import dynamic from "next/dynamic";
import Image from "next/image";

const ManufacturingHero = dynamic(
  () => import("@/components/shared/manufacturingPage/ManufacturingHero"),
  { ssr: false }
);

const page = async () => {
  const data = await client.fetch(landingQuery);
  const features = [
    {
      title: "Data-Driven Innovation",
      description:
        "We empower CPG businesses with cutting-edge, data-driven solutions that maximize the value of your data assets, driving strategic growth and operational efficiency.",
      variant: "gray",
    },
    {
      title: "Comprehensive Revenue Growth Management (RGM)",
      description:
        "Our RGM solutions leverage advanced AI and Connected Intelligence to optimize pricing, promotions, and assortment strategies, boosting profitability and market competitiveness.",
      variant: "gray",
    },
    {
      title: "Tailored, Industry-Focused Solutions",
      description:
        "From optimized marketing mix analysis to advanced product assortment and distribution strategies, our specialized tools are designed to meet the unique challenges of the CPG industry.",
      variant: "gray",
    },
    {
      title: "Proven Demand Forecasting Expertise",
      description:
        "Our adaptive forecasting systems provide real-time insights, allowing businesses to respond swiftly to market shifts, minimize disruptions, and enhance accuracy in decision-making.",
      variant: "gray",
    },
    {
      title: "Generative AI Leadership",
      description:
        "Stay ahead of the curve with our GenAI-powered tools that revolutionize your business growth, offering seamless automation and innovative solutions for a competitive edge in today's fast-evolving market.",
      variant: "gray",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div><ManufacturingHero /></div>

        <div className=" pt-16 lg:pt-20"><WhyCogninest /></div>

        <div className=" pt-10 lg:pt-16">
          <h1 className="h1 text-center">Best Services for Manufacturing</h1>
          <div>
            <MediaCard services={data.consultingServices} />
          </div>
        </div>

        <div className="  space-y-10 pt-16 lg:pt-20">
          <h1 className="h1  lg:max-w-1/2">
            Why Choose Cogninest AI for Manufacturing
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {features.map((data, index) => (
              <>
                <FeatureCard
                  key={index}
                  variant={data.variant}
                  title={data.title}
                  description={data.description}
                />
              </>
            ))}
          </div>
        </div>

        <div className=" pt-10 lg:pt-20">
          <div className=" flex lg:flex-row flex-col gap-6 space-y-6 p-8 bg-[#F2F2F2] rounded-[50px] ">
            <div className="px-4 lg:px-12 lg:w-1/2 flex  justify-center flex-col space-y-6">
              <h1 className="h1">
                Ready to Transform Your Manufacturing Business?
              </h1>

              <p>
                Partner with Cogninest AI to revolutionize your manufacturing
                operations. Our expert team is ready to help you harness the
                power of data science and AI to drive efficiency, innovation,
                and growth.
              </p>

              <div>
                {" "}
                <Link href="/contact-us">
                  <Button className=" btn ">CONTACT US</Button>
                </Link>
              </div>
            </div>
            <div className=" lg:w-1/2 flex  justify-center items-center">
              <Image src="/ready.png" alt="ready" width={496} height={437} />
            </div>
          </div>
        </div>
        <div className="bg-[#F2F2F2] md:rounded-3xl p-8 text-center max-w-5xl mx-auto my-10 lg:my-16  py-8 lg:py-16">
          <div className="space-y-10">
            <h2 className="h2  mx-auto w-3/4">
              Ready to Elevate Your Manufacturing?
            </h2>
            <p className=" paragraph lg:mx-8">
              Contact us today to learn how Cogninest AI can transform your
              operations with advanced data science solutions.
            </p>
            <Link href="/contact-us " className="">
              <Button className="btn  mt-10">CONTACT US</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
