import FeatureCard from "@/components/layout/FeatureCard";
import MediaCard from "@/components/layout/MediaCard";
import EnergyHero from "@/components/shared/energyPage/EnergyHero";
import WhyChoose from "@/components/shared/energyPage/WhyChoose";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Link from "next/link";
import React from "react";

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
      variant: "blue",
    },
    {
      title: "Tailored, Industry-Focused Solutions",
      description:
        "From optimized marketing mix analysis to advanced product assortment and distribution strategies, our specialized tools are designed to meet the unique challenges of the CPG industry.",
      variant: "blue",
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
    {
      title: "Collaborative Approach",
      description:
        "We believe in working as an extension of your team. From the initial consultation to post-deployment support, we collaborate closely to ensure that our solutions not only meet but exceed your expectations.",
      variant: "blue",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------------hero------------- */}
        <div>
          {" "}
          <EnergyHero />
        </div>
        {/* ------------hero------------- */}
        <div className=" pt-16 lg:pt-20 space-y-12">
          <h1 className=" text-center h1  ">
            Best Services for the Energy Industry{" "}
          </h1>
          <MediaCard services={data.consultingServices} />
          {/* --------------------------------- */}
          <div className=" py-12 lg:py-16">
            <div>
              <h1 className=" h1 pb-16 ">
                Best AI Techniques for the Energy Industry
              </h1>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>
        </div>

        {/* --------------------------------- */}

        <div className="  pt-16 lg:pt-20">
          <WhyChoose />
        </div>

        {/* ---------------------------- */}

        <div className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center lg:max-w-5xl mx-auto my-10 lg:my-16  ">
        <div className="space-y-6">
          <h2 className="h2  mx-auto w-3/4">
            Ready to Transform Your Media Business?
          </h2>
          <p className=" paragraph lg:mx-8">
            Leverage the power of data science and AI to stay ahead in the
            competitive media and entertainment industry. Whether you want to
            boost viewer engagement, streamline operations, or unlock new
            revenue streams, Cogninest AI is your partner in innovation.
          </p>
          <Link href="/contact-us">
          <Button className="btn text-center text-wrap py-7 lg:py-0 my-4">
            Contact us today to start your transformation journey!
          </Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default page;
