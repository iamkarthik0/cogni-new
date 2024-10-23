"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";

const ManufacturingHero = () => {
  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:py-16"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="h1"
            >
              Revolutionizing Manufacturing with Data Science: Cogninest AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed max-w-xl"
            >
              Cogninest AI is at the forefront of transforming the manufacturing
              industry through cutting-edge data science solutions. By
              leveraging advanced analytics, artificial intelligence (AI), and
              machine learning, we help manufacturers optimize their operations,
              reduce costs, and achieve sustainable growth. Our innovative
              approach empowers manufacturing businesses to overcome complex
              challenges and stay competitive in a rapidly evolving market.
            </motion.p>
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
          <Image
            src="/ai-manufacturing.png"
            alt="manu"
            width={441}
            height={487}
            className="rounded-[24px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ManufacturingHero;
