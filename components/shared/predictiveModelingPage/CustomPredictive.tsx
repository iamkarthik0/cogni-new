"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Checked = () => {
  return (
    <motion.div 
      className="flex justify-center items-center gap-4 md:w-3/4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src="/Checked.png" alt="checked" width={50} height={59} />
      <p>
        Improving customer service and retention rates by getting actionable
        insights into your customers' needs and behaviors.
      </p>
    </motion.div>
  );
};

const CustomPredictive = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col justify-center items-center" ref={ref}>
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="h2">
          Custom Predictive Analytics Software Can Support Your Business in Many
          Ways
        </h1>
        <p className="subtle-text">
          Predictive analytics tools can be used to support your business in
          many ways. Some of the benefits of predictive modeling include:
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 w-full place-items-start py-10 lg:py-14 gap-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div className="w-full" initial={{ x: -20 }} animate={inView ? { x: 0 } : { x: -20 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Checked />
        </motion.div>
        <motion.div className="w-full" initial={{ x: 20 }} animate={inView ? { x: 0 } : { x: 20 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Checked />
        </motion.div>
        <motion.div className="w-full" initial={{ x: -20 }} animate={inView ? { x: 0 } : { x: -20 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <Checked />
        </motion.div>
        <motion.div className="w-full" initial={{ x: 20 }} animate={inView ? { x: 0 } : { x: 20 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Checked />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomPredictive;
