import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import FeatureCard from "@/components/layout/FeatureCard";
import MediaCard from "@/components/layout/MediaCard";
import MediaEntertainment from "@/components/shared/mediaPage/MediaEntertainment";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import React from "react";

const page = async () => {
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
  ];

  const data = await client.fetch(landingQuery);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --------------------------Hero Section------------------- */}

        <div className=" space-y-6 pt-16 lg:pt-24">
        <h1 className="h1 lg:max-w-6xl">Transforming Media & Entertainment with Advanced Data Science and AI Solutions</h1>

 
        <Button className="btn">CONSULT  WITH AN AI EXPERT</Button>
        </div>

        {/* --------------------------Media Card------------------- */}
        <div className="pt-12 ">
          <h1 className=" h1">Best Services for Media and Entertainment</h1>

          <MediaCard services={data.consultingServices} />
        </div>
        {/* --------------------------Best AI Techniques------------------- */}
        <div className=" pt-16 lg:pt-20 ">
          <h1 className="h1 text-center pb-7">
            Best AI Techniques for Media and Entertainment
          </h1>
          <MediaEntertainment />
        </div>

        {/* --------------------------Media and Entertainment------------------- */}
        <div className=" pt-16 lg:pt-20">
          <h1 className="h1 max-w-4xl ">
            Why Choose Cogninest AI for Media and Entertainment
          </h1>
          <div className="pt-7">
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

      {/* ------------------------------let us solve---------------- */}

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
          <Button className="btn text-center text-wrap py-7 lg:py-0">
            Contact us today to start your transformation journey!
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
