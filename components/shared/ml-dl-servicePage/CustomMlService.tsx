"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';

const CustomMlService = () => {
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
          className={`lg:w-1/2 flex flex-col gap-6`}
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h2 text-left"
          >
            Custom ML Services Tailored To Your Unique Business Needs:
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="subtle-text text-left"
          >
            Cogninest AI offers machine learning applications that may be customized to meet the unique needs of your business. Using the power of artificial intelligence and predictive modeling, our machine learning as a service helps companies maximize accuracy and productivity.
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 flex"
        >
          <Image
            src="/mldlG.png"
            alt="Person using computer with data visualizations"
            width={539}
            height={340}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomMlService;
