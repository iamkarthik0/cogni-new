"use client"
import DataScienceConsulting from "@/components/layout/DataScienceConsulting";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer

const PredictiveHero = (props:any) => {
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
          <DataScienceConsulting services={props.data.consultingServices} />
        </div>
      </div>
    </div>
  );
};

export default PredictiveHero;
