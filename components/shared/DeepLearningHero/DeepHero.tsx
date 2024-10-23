"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const DeepHero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="w-full flex flex-col lg:flex-row"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:pt-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h1"
          >
            Deep learning consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="subtle-text w-3/4"
          >
            Make data spark resilience, performance, and growth with our deep
            learning consulting services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 flex justify-center lg:justify-end items-end"
        >
          <Image
            src="/deepHero.png"
            alt="Person using computer with data visualizations"
            className=""
            width={511}
            height={100}
          />
        </motion.div>
      </motion.div>

      <div className=" space-y-8 pt-10 lg:pt-20">
        <h1 className=" h2">
          A full spectrum of deep learning consulting services
        </h1>
        <p>
          You have data, and you want it to drive meaningful change. Deep
          learning is the key to transforming your information into actionable
          insights that guide your decisions. The challenge lies in how to
          effectively harness this power. No matter what deep learning obstacles
          you face, we have the expertise to provide the solution...
        </p>
        <p>
          Our deep learning consultants, experts in artificial intelligence and
          machine learning, are here to help enterprises and startups
          successfully launch their deep learning projects, ensuring every
          dollar is well-spent. For AI-mature companies, we optimize your
          existing solutions to maximize ROI, driving greater efficiency and
          impact in your operations.
        </p>
      </div>
    </div>
  );
};

export default DeepHero;
