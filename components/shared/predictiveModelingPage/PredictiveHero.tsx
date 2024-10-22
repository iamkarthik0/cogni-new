"use client";
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView from react-intersection-observer
import MediaCard from "@/components/layout/MediaCard";

const PredictiveHero = (props: any) => {
  const card = [
    {
      heading: "Demand Prediction",
      paragraph:
        "We have extensive experience in developing predictive models for demand prediction. Our solutions can help you forecast future demand for your products or services, optimize inventory levels, and make better decisions about pricing and marketing strategies.",
    },
    {
      heading: "Churn Prediction",
      paragraph:
        "Cogninenst AI team can develop custom predictive models to help you identify which customers are at risk of canceling their subscription, product, or service. With this information, you can target at-risk customers with personalized offers and benefits to make them stay.",
    },
    {
      heading: "Predictive Maintenance",
      paragraph:
        "Our team of ML engineers can help you develop predictive maintenance solutions that can detect potential equipment failures before they happen. By using predictive analytics, you can avoid costly downtime and improve the efficiency of your operations.",
    },
    {
      heading: "Predictive Manufacturing",
      paragraph:
        "We can help you develop predictive models for manufacturing that can optimize production processes, predict yield, and identify quality issues. With our predictive analytics solutions, you can improve the efficiency of your manufacturing operations and reduce waste.",
    },
    {
      heading: "Digital Twins",
      paragraph:
        "Cogninest AI offers custom development services for digital twins, which are predictive analytics models of physical and biological systems. Digital twins can be used to simulate the behavior of complex systems, such as manufacturing processes, power plants, and human physiology. With our digital twin solutions, you can optimize the performance of your systems and reduce the risk of failures.",
    },
    {
      heading: "Scoring Models",
      paragraph:
        "We develop custom predictive analytics software that can be used to score individuals, organizations, or behaviors. Scoring models are often used for credit scoring, insurance underwriting, and evaluating the probability of conversion (lead scoring). With our scoring model solutions, you can make better decisions about whom to lend to, insure, or do business with.",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------------Hero Section--------------------- */}
        <div className=" w-full flex flex-col lg:flex-row gap-4 ">
          <div className="flex flex-col  justify-center lg:w-1/2  gap-6 py-8 lg:pt-8">
            {/* <p className="subtle-text">We will provide</p> */}
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Predictive Analytics Services and Solutions
            </motion.h1>
            <motion.p
              className="subtle-text font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Data Into Predictive Insights With Our Custom
              Solutions...
            </motion.p>
            <motion.p
              className="subtle-text "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Predictive analytics is a field of data science that uses
              historical data and machine learning algorithms to make
              predictions about future events. This technology is used across
              industries for various applications, such as identifying trends,
              predicting demand, and making decisions about pricing and
              marketing strategies.
            </motion.p>
            <motion.p
              className="subtle-text "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              At Cogninest AI, we specialize in developing custom predictive
              analytics solutions that help our clients unlock the value in
              their data. Our team of experienced data scientists and machine
              learning engineers will work with you to understand your specific
              needs and build a solution that meets your unique requirements.
            </motion.p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <Button className="btn">
                  CONSULT YOUR PROJECT WITH AN AI EXPERT
                </Button>
              </motion.div>
            </div>
          </div>

          <div className=" lg:w-1/2  flex justify-center items-center">
            <div className="relative w-full aspect-square overflow-hidden ">
              <Image
                src="/predictive.png"
                alt="Person using computer with data visualizations"
                fill
                className=" aspect-square "
              />
            </div>
          </div>
        </div>

        {/* ---------------------------Second Section--------------------- */}

        <div className=" flex flex-col gap-8  pt-10 text-left lg:pt-14">
          <motion.h1
            className=" h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise in Developing Predictive Analytics Software
          </motion.h1>
          <motion.p
            className=" subtle-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Cogninest AI offers custom development services for predictive
            analytics solutions to help you transform your data into insights
            that drive better decision-making. We use cutting-edge deep learning
            technologies to develop predictive models that are accurate and
            reliable. Our team has expertise in a wide range of predictive
            analytics methods, including:
          </motion.p>
        </div>

        <div className="pt-12 ">
          <MediaCard services={{ card }} />
        </div>
      </div>
    </div>
  );
};

export default PredictiveHero;
