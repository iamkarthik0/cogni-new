"use client"
import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";

const WhyChoose = () => {
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
      className=" space-y-10 lg:space-y-24"
    >
      <h1 className="h2 text-center">Why Choose Cogninest AI for Energy</h1>

      <div className=" flex flex-col lg:flex-row gap-6">
        {/* ------------------- */}
        <div className="lg:w-1/2 space-y-6">
          {/* ------------------- */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="h4"
            >
              Tailored AI Solutions</motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              We develop customized AI models that address the unique challenges
              of the energy sector, from asset integrity to grid optimization.
            </motion.p>
          </div>
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="h4"
            >
              End-to-End Integration</motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Our solutions integrate seamlessly with existing infrastructure,
              ensuring minimal disruption and maximum impact.
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="h4"
            >
              Data-Driven Decisions</motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              We leverage advanced analytics to provide actionable insights that
              drive better decision-making and operational efficiency.
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="h4"
            >
              Sustainability Focused</motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Cogninest AI is committed to helping energy companies achieve
              their sustainability goals through innovative AI solutions that
              optimize renewable energy and reduce emissions.
            </motion.p>
          </div>
        </div>
        {/* ------------------- */}

        <div className="lg:w-1/2">
          <Image src="/energy-light.png" alt="light" width={652} height={559} />
        </div>
      </div>

      <h1 className="h4 text-[#0055A7] text-center">
        “Cogninest AI’s predictive maintenance solution has significantly
        reduced our operational costs and improved the reliability of our grid
        infrastructure. Their innovative approach is transforming the way we
        manage energy.”
      </h1>
    </motion.div>
  );
};

export default WhyChoose;
