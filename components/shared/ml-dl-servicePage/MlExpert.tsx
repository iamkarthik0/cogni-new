"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';

const MlExpert = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="flex flex-col lg:flex-row justify-between items-center gap-6"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:w-2/3 flex"
        >
          <Image
            src="/mlExpert.png"
            alt="Person using computer with data visualizations"
            width={759}
            height={494}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:w-1/3 flex flex-col gap-6 order-first lg:order-2"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h3"
          >
            Custom ML Services Tailored To Your Unique Business Needs:
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="subtle-text text-left pl-5"
          >
            <ul className="list-disc">
              <li>Develop and deploy custom models</li>
              <li>Automate repetitive tasks</li>
              <li>Uncover patterns and trends</li>
              <li>Generate actionable insights for informed decision-making</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MlExpert;
