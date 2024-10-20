"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const ComputerHero = () => {
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
            Computer Vision Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="subtle-text w-3/4"
          >
            Automate your monitoring and reporting applications to recognize,
            capture and generate insights from images and videos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex ">
              <Link href="/contact-us">
                <Button className="btn">Let's Start a Project</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 flex justify-center lg:justify-end items-end"
        >
          <Image
            src="/computerHero.png"
            alt="Person using computer with data visualizations"
            className=""
            width={539}
            height={100}
          />
        </motion.div>
      </motion.div>

      <div className=" space-y-8 pt-10 lg:pt-20">
        <h1 className=" h1">
          Improve your business process efficiency with custom-built computer
          vision solutions
        </h1>
        <p >
          Cogninest AI creates cutting-edge applications by integrating computer
          vision services with other systems such as ERP, POS, CCTV and
          diagnostic software to detect anomalies in production lines, analyze
          medical images and identify products and people on social media, among
          other possibilities. It can also be integrated with machine learning
          operations to build a wide range of enterprise applications and cloud
          services. To meet the constraints of diverse industries, our team has
          designed artificial intelligence and computer vision-based
          applications with advanced components such as object classification,
          feature recognition, segmentation, pattern recognition, object
          detection, filtering and so on. We can assist you in achieving such
          prototypes using minimal resources and no additional hardware support.
        </p>
      </div>
    </div>
  );
};

export default ComputerHero;
