"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";

const WhyCogninest = () => {
  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className=" space-y-9 "
    >
      <div className=" space-y-8">
        {" "}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h1 text-center"
        >
          Why Cogninest AI is the Best for Manufacturing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className=" subtle-text text-center"
        >
          Cogninest AI combines deep industry expertise with robust data-driven
          methodologies to deliver unparalleled solutions tailored specifically
          for the manufacturing sector. Our focus on enhancing operational
          efficiency, predictive maintenance, and real-time analytics ensures
          that manufacturers can make data-informed decisions and achieve
          maximum productivity. With a proven track record and a team of
          experts, Cogninest AI is the ideal partner for companies looking to
          embrace the future of manufacturing.
        </motion.p>
      </div>
      <div>
        <div className=" w-full aspect-square relative h-[220px] md:h-[300px] lg:h-[404px]">
          <Image src="/cigni-manufacturing.png" fill alt="health" />
        </div>
      </div>
    </motion.div>
  );
};

export default WhyCogninest;
