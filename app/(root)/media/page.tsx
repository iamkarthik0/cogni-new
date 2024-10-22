"use client";

import FeatureCard from "@/components/layout/FeatureCard";
import MediaCard from "@/components/layout/MediaCard";
import MediaEntertainment from "@/components/shared/mediaPage/MediaEntertainment";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = async () => {
  const features = [
    {
      title: "Industry Expertise",
      description:
        "Our team has extensive experience in the media and entertainment sector, understanding the unique challenges and opportunities that data and AI present.",
      variant: "gray",
    },
    {
      title: "Customized Solutions",
      description:
        "We tailor our AI and data science services to meet the specific needs of each client, ensuring maximum impact and value.",
      variant: "blue",
    },
    {
      title: "Scalable Technologies",
      description:
        "Our solutions are built to scale, supporting media companies of all sizes to grow and innovate as they expand their digital footprint.",
      variant: "blue",
    },
    {
      title: "Proven Results",
      description:
        "We have a track record of success in improving audience engagement, optimizing content strategies, and boosting operational efficiency.",
      variant: "gray",
    },
    {
      title: "End-to-End Support",
      description:
        "From data strategy and model development to deployment and optimization, we provide comprehensive support throughout the AI integration process.",
      variant: "gray",
    },
  ];

  const data = await client.fetch(landingQuery);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --------------------------Hero Section------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16 lg:pt-24 "
        >
          <h1 className="h1 lg:max-w-6xl">
            Transforming Media & Entertainment with Advanced Data Science and AI
            Solutions
          </h1>

          <Link href="/contact-us" className=" my-5">
            <Button className="btn my-6">CONSULT WITH AN AI EXPERT</Button>
          </Link>
        </motion.div>

        <div className=" pt-6 lg:pt-10">
          <div className=" p-10 lg:p-20 space-y-5 bg-[#EEEEEE]  rounded-[23px] ">
            <h1 className=" h3">
              Introduction of Company and Why Cogninest AI is the Best for Media
              and Entertainment
            </h1>
            <p>
              Cogninest AI is a leading provider of data science and artificial
              intelligence solutions tailored to the dynamic needs of the media
              and entertainment industry. Our mission is to empower
              organizations with cutting-edge AI technologies that revolutionize
              content creation, audience engagement, and operational efficiency.
            </p>

            <p>
              We offer a comprehensive suite of services, including predictive
              analytics, machine learning, and natural language processing, that
              enable media companies to unlock new revenue streams, optimize
              content strategies, and enhance viewer experiences. Partner with
              Cogninest AI to harness the power of data and AI for a competitive
              edge in the ever-evolving media landscape.
            </p>
          </div>
        </div>

        {/* --------------------------Media Card------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-12 "
        >
          <h1 className=" h1">Best Services for Media and Entertainment</h1>
          <MediaCard services={data.consultingServices} />
        </motion.div>
        {/* --------------------------Best AI Techniques------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" pt-16 lg:pt-20 "
        >
          <h1 className="h1 text-center pb-7">
            Best AI Techniques for Media and Entertainment
          </h1>
          <MediaEntertainment />
        </motion.div>

        {/* --------------------------Media and Entertainment------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" pt-16 lg:pt-20"
        >
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
        </motion.div>
      </div>

      {/* ------------------------------let us solve---------------- */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#D9D9D9] md:rounded-3xl p-8 text-center lg:max-w-5xl mx-auto my-10 lg:my-16  "
      >
        <div className="space-y-7">
          <h2 className="h2  mx-auto w-3/4">
            Ready to Transform Your Media Business?
          </h2>
          <p className=" paragraph lg:mx-8">
            Leverage the power of data science and AI to stay ahead in the
            competitive media and entertainment industry. Whether you want to
            boost viewer engagement, streamline operations, or unlock new
            revenue streams, Cogninest AI is your partner in innovation.
          </p>
          <Link href="/contact-us" className=" ">
            <Button className="btn text-center text-wrap py-7 lg:py-0 my-7">
              Contact us today to start your transformation journey!
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default page;
