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
      title: "Machine Learning & Predictive Analytics",
      description:
        "Critical for asset management, demand forecasting, and operational optimization. These techniques enable precise predictions and proactive management strategies.",
      variant: "gray",
    },
    {
      title: "Deep Learning & Computer Vision",
      description:
        "Essential for analyzing complex data, such as seismic exploration in oil and gas or drone-based inspections of remote infrastructure.",
      variant: "blue",
    },
    {
      title: "Reinforcement Learning",
      description:
        "Used in real-time grid management and energy storage optimization to dynamically adjust to changing conditions.",
      variant: "blue",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Facilitates the integration of unstructured data from maintenance records, sensor logs, and environmental reports into actionable insights.",
      variant: "gray",
    },
    {
      title: "Comprehensive Data Security",
      description:
        "We prioritize the security of your data. Our solutions are designed with robust security protocols to ensure that all sensitive information is protected, giving you peace of mind while driving your business forward.",
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
              Ready to Transform Your Energy Business?
            </h2>
            <p className=" paragraph lg:mx-8">
              Discover the Future of Energy Management with Cogninest AI!
            </p>
            <Link href="/contact-us">
              <Button className="btn text-center text-wrap py-7 lg:py-0 my-4">
                Schedule a consultation to see how our solutions can drive your
                energy business forward.
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
