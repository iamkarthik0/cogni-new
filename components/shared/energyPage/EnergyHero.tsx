"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";

const EnergyHero = () => {
  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12"  >
        {/* Left Content */}
        <motion.div
         
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:py-16  "
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="h1 "
            >
              Unlock the Future of Energy with Data Science & AI Solutions from Cogninest AI
            </motion.h1>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex justify-end items-center pt-6"
        >
          <div className="relative  aspect-square w-[497px] h-[350px] lg:h-[436px] ">
            <Image
              src="/energy.png"
              alt="Business professionals analyzing data"
              fill
            />
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------ */}
      <div className=" space-y-8 pt-16 lg:pt-24">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="h2 text-center"
        >
          Cogninest AI is Best for Energy
        </motion.h1>

        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className=" subtle-text text-center"
        >
          At Cogninest AI, we are dedicated to revolutionizing the energy sector
          with cutting-edge data science and artificial intelligence solutions.
          Our innovative approach empowers energy companies to optimize
          operations, reduce costs, and drive sustainable growth. With a deep
          understanding of the unique challenges faced by the energy industry,
          our team of experts delivers tailored solutions that enhance
          efficiency, improve predictive maintenance, and enable data-driven
          decision-making. Choose Cogninest AI to harness the power of data and
          transform your energy business.
        </motion.p>
      </div>
    </div>
  );
};

export default EnergyHero;
