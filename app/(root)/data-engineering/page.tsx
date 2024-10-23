import BlogCard from "@/components/shared/dataEngineering/BlogCard";
import DataEngineeringHero from "@/components/shared/dataEngineering/DataEngineeringHero";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";

const page = async () => {
  const blogContent = [
    {
      img: "/action1.png",
      paragraph:
        "Leverage our experience to define roadmap, strategy and approach to building and sustaining the most optimal data platform. Our toolkits, accelerators, solutions, and partnerships help us architect your target platform faster, accelerating your overall cloud data migration journey.",
      heading: "Cloud engineering advisory and strategy services",
    },
    {
      img: "/action2.png",
      paragraph:
        "Selecting the right tools and data engineering services alone isn't enough to build cost-effective, high-performance, and easily adoptable data platforms. At Cogninest AI, we go beyond the basics by offering proven business solutions, digital accelerators, frameworks, and a tailored agile methodology to help you quickly unlock value from your data assets. Our approach is centered on a product mindset, emphasizing reuse, automation, self-healing, scalability, flexibility, and adoption. This ensures that your data platforms not only meet current needs but also have the agility to evolve with your business landscape.",
      heading: "Data platforms implementation services",
    },

    {
      img: "/blogcard.png",
      paragraph:
        "The modern Chief Data Officer (CDO) faces a diverse set of responsibilities, and Cogninest AI is here to support them with comprehensive data engineering consulting and services. Our offerings address many of the key challenges today’s CDOs encounter, including data governance strategy, data literacy education, and the implementation of data catalogs, lineage, and quality services through our advanced accelerators. As regulations around customer data management continue to evolve, Cogninest AI has developed cutting-edge solutions to enhance efficiencies and ensure compliance in managing customer data.",
      heading: "Data governance and compliance services",
    },
  ];


  const solution = [
    {
      img: "/action1.png",
      paragraph:
        "Snowflake provides a robust suite of capabilities for implementing data warehouses in the cloud. At Cogninest AI, we leverage our extensive experience with Snowflake, coupled with our status as a Snowflake Elite partner, to deliver unmatched value throughout the data lifecycle. Our proprietary accelerators set us apart, enabling us to maximize the benefits of Snowflake's platform and drive impactful results for our clients.",
      heading: "Snowflake Cloud Data Platform",
    },
    {
      img: "/action2.png",
      paragraph:
        "Data quality and trust issues remain significant barriers to achieving insights adoption at an enterprise scale. At Cogninest AI, our proprietary solution, Sancus, addresses these challenges head-on. Leveraging advanced AI/ML techniques, Sancus excels in data cleansing and enrichment, ensuring that your data is accurate, reliable, and ready to drive actionable insights across your organization.",
      heading: "AI-powered data quality",
    },

    {
      img: "/blogcard.png",
      paragraph:
        "In many enterprises, data is still dispersed across various systems, making insights generation challenging. At Cogninest AI, we offer a codeless data ingestion accelerator that simplifies this process. Fully metadata-driven, our accelerator not only automates data ingestion but also includes built-in features for data quality, cataloging, and metadata management. This ensures a seamless and efficient data integration process, laying a strong foundation for generating actionable insights.",
      heading: "AI-powered data management",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <DataEngineeringHero />

        {/* -------------------------service Section ---------------- */}

        <div className="  pt-12 lg:pt-20">
          <div className="text-center mx-auto space-y-10">
            <h4 className=" h2">
              Actionable insights with right data strategy and robust platform
            </h4>

            <h1 className=" h3 text-[#0055A7]">SERVICES</h1>

            <BlogCard data={blogContent} />
          </div>
          <div className="pt-12 md:pt-18 lg:pt-20 text-center space-y-8">
            <h1 className=" h3 text-[#0055A7]">SOLUTIONS</h1>

            <BlogCard data={blogContent} />
          </div>
        </div>

        {/* -------------------------Why Choose us Section ---------------- */}

        <div className=" text-center space-y-8 pt-12 lg:pt-20">
          <h2 className="h2">Why choose us?</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 md:mx-24 lg:mx-32  gap-4">
            <div className="bg-[#EEEEEE] p-10 rounded-xl paragraph font-semibold">
              <h4>
                We are invested in realizing your vision of insights driven
                enterprise
              </h4>
            </div>

            <div className="bg-[#EEEEEE] p-10 rounded-xl paragraph font-semibold">
              <h4>
                We are invested in realizing your vision of insights driven
                enterprise
              </h4>
            </div>

            <div className="bg-[#EEEEEE] p-10 rounded-xl paragraph font-semibold">
              <h4>
                We are invested in realizing your vision of insights driven
                enterprise
              </h4>
            </div>
          </div>
        </div>
        {/* -------------------------Why Choose us Section ---------------- */}

        <div className=" pt-16 lg:pt-24  pb-8 lg:pb-16">
          <div className="py-16 lg:py-24 text-center  bg-[#F2F2F2] max-w-5xl mx-auto rounded-[50px]  space-y-8 h3 ">
            <h1>Engineer a robust data foundation with us</h1>

            <div>
              <Link href="/contact-us">
                <Button className="btn">CONTACT US</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
