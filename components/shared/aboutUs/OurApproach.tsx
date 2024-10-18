"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DnaCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    > 
      <div className="px-6 pt-10 space-y-10 pb-6 bg-[#D9D9D9] hover:bg-[#0055A7] hover:text-white transition-all duration-300">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-3">
            <h4 className="h4">An ownership mindset</h4>
            <p>
              The entrepreneurial streak that started our journey continues to
              shape our thinking and decision making. Our teams operate with
              flexibility and autonomy, but are highly accountable. This has
              helped us nurture some of the industry's best teams and leaders.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src="/our.png" alt="our" width={555} height={234} className="w-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const OurApproach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <motion.div 
        className="space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="subtle text">OUR APPROACH</p>
        <h1 className="h1">The Cogninest DNA</h1>
        <p>
          In our quest to craft tomorrow's AI today, we are constantly evolving.
          While industry best practices are important, true innovation and
          exceptional value come from pushing boundaries in every direction.
          This is made possible by assembling teams with a powerful mix of
          mindset and expertise—an ownership mentality, a forward-thinking
          vision, deep technical knowledge, and a fearless approach to
          experimentation. We call this the Cogninest DNA.
        </p>
      </motion.div>
      <motion.div 
        className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DnaCard/>
        <DnaCard/>
        <DnaCard/>
        <DnaCard/>
      </motion.div>
    </div>
  );
};

export default OurApproach;
