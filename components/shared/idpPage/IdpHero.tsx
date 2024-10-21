"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const IdpHero = () => {
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
            Intelligent Document Processing (IDP)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="subtle-text w-3/4"
          >
            Extract data from any document with guaranteed quality. Leverage the
            latest AI models and Cogninest AI Data Processing Crowd for
            human-in-the-loop (HITL) review.
          </motion.p>


          <div>
            <Button className="btn">Book Demo ❯</Button>
          </div>
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
            src="/idpHero.png"
            alt="Person using computer with data visualizations"
            className=""
            width={511}
            height={100}
          />
        </motion.div>
      </motion.div>

   
    </div>
  );
};

export default IdpHero;
