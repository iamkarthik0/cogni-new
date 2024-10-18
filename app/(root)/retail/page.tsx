import FeatureCard from "@/components/layout/FeatureCard";
import RetailHero from "@/components/shared/retailPage/RetailHero";
import RetailStrategy from "@/components/shared/retailPage/RetailStrategy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
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
        <div>
          <RetailHero />
          <div className=" space-y-5 max-w-6xl  sm:text-2xl md:text-3xl text-xl font-normal pt-16 lg:pt-20  ">
            <p>
              Cogninest AI's integrated solution architecture captures the
              intricate dynamics of pricing, merchandising, category management,
              and more. Our approach empowers clients to take full ownership of
              their data intelligence while fostering self-sufficiency in
              optimizing their retail operations through highly personalized
              experiences.
            </p>
            <p>
              With scalable, explainable frameworks, our solutions seamlessly
              integrate both digital and traditional retail strategies, enabling
              retailers to effectively manage complex product assortments and
              drive growth in a competitive market.
            </p>
          </div>
        </div>

        {/* ------------------------------retail strategy----------------- */}

        <div className=" pt-16 lg:pt-24">
          <h2 className="h2 ">
            Discover how our expertise can transform your retail strategy and
            propel your brand to new heights.
          </h2>
          <div className=" pt-8 lg:pt-14">
            <RetailStrategy />
          </div>
        </div>

        {/* ------------------------------Growth----------------- */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12  pt-16 lg:pt-24">
          <h1 className="text-center h1 max-w-5xl mx-auto ">
            Revolutionize Your Business Growth with GenAI
          </h1>
          <div className=" w-full aspect-square relative h-[220px] md:h-[320px] lg:h-[516px]">
            <Image src="/cpg-growth.png" fill alt="health" />
          </div>
        </div>
        {/* -------------------------------why choose ----------------------------- */}
        <div className=" py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className=" h1 pb-16 ">Why Choose Cogninest AI? </h1>
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

        {/* ------------------------------let us solve---------------- */}

        <div className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center lg:max-w-5xl mx-auto my-10 lg:my-16  ">
          <div className="space-y-6">
            <h2 className="h2  mx-auto w-3/4">
              Ready to Transform Your Retail Business?
            </h2>
            <p className=" paragraph lg:mx-8">
              Whether you’re looking to enhance customer experiences, optimize
              operations, or gain deeper insights into your business, Cogninest
              AI is your partner in retail innovation. Contact us today to
              schedule a consultation and discover how we can help you achieve
              your goals.
            </p>
            <Button className="btn text-center text-wrap py-7 lg:py-0">
            Contact us today to start your transformation journey!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
