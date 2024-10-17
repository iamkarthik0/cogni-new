import BlogsAndUseCases from "@/components/layout/BlogAndUseCase";
import ContactCard from "@/components/layout/ContactCard";
import FeatureCard from "@/components/layout/FeatureCard";
import CpgHero from "@/components/shared/cpg-industry/CpgHero";
import MarketingMixSection from "@/components/shared/cpg-industry/MarketingMixSection";

import React from "react";

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

const page = () => {
  return (
    <>
      <div>
        <CpgHero />
      </div>

      <div className=" pt-16 lg:pt-24">
        <MarketingMixSection />
      </div>

      <div className=" py-12 lg:py-16">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className=" py-12 lg:py-16">
        <BlogsAndUseCases/>
      </div>

          <div className=" py-12 lg:py-16">
            <ContactCard/>
          </div>


    </>
  );
};

export default page;
