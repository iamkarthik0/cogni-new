"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const slideIn = (direction:any) => ({
  hidden: { 
    x: direction === 'left' ? -60 : 60, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
});

const listAnimation = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export const MainSection = () => {
  // Create separate refs for each section
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [subtextRef, subtextInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section1Ref, section1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section3Ref, section3InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section4Ref, section4InView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div>
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        className="flex flex-col lg:flex-row p-16 bg-[#EEEEEE] rounded-[23px] gap-12"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="flex text-center lg:text-left lg:items-center  "
          variants={slideIn('left')}
        >
          <h1 className="h2 lg:max-w-xl">
            What types of <span className="text-[#0055A7]">consulting</span> is
            offered?
          </h1>
        </motion.div>

        <motion.div
          variants={listAnimation}
        >
          <ul className="list-disc text-xl tracking-tight sm:text-xl md:text-2xl space-y-2">
            {[
              "Secure cloud design",
              "Cloud architectures",
              "Secure cloud implementation",
              "Cloud information security programs",
              "Cloud assessment and compliance",
              "Risk management",
              "Cloud security governance"
            ].map((item, index) => (
              <motion.li key={index} variants={itemAnimation}>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <div className="pt-16 lg:pt-20 space-y-12">
        {/* Subtext */}
        <motion.p 
          ref={subtextRef}
          className="subtle-text"
          variants={fadeInUp}
          initial="hidden"
          animate={subtextInView ? "visible" : "hidden"}
        >
          Although the cloud has become a transformation facilitator, there are
          still major obstacles standing in the way of cloud growth, and many
          businesses are finding it difficult to demonstrate the benefit of
          transformation or to link IT to business results. Cogninest AI offers a
          comprehensive strategy for recognizing and resolving obstacles and
          advancing change from all angles.
        </motion.p>

        {/* Section 1 */}
        <motion.div 
          ref={section1Ref}
          className="relative flex flex-col lg:flex-row gap-8"
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex-1 space-y-4"
            variants={slideIn('left')}
          >
            <h1 className="h3">Digital business strategy and transformation</h1>
            <p>
              Align IT strategy and capabilities with business direction to help
              ensure your organization can perform at its best.
            </p>
            <motion.ul 
              className="list-disc pl-4 space-y-2"
              variants={listAnimation}
            >
              {[
                "Evaluate the current state, envision objectives, and map steps to get there.",
                "Enable a digital business strategy, streamlining people, processes, and technology.",
                "Improve customer experiences and generate business outcomes."
              ].map((item, index) => (
                <motion.li key={index} variants={itemAnimation}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="flex-1"
            variants={slideIn('right')}
          >
            <Image
              src="/digital-business.png"
              alt="business"
              width={539}
              height={396}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          ref={section2Ref}
          className="relative flex flex-col lg:flex-row gap-8"
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex-1 space-y-4 order-first lg:order-last"
            variants={slideIn('right')}
          >
            <h1 className="h3">Enterprise architecture and digital integration</h1>
            <p>
              Simplify your enterprise architecture with a workload
              modernization and smart migration plan that helps your tech
              investments generate business value.
            </p>
            <motion.ul 
              className="list-disc pl-4 space-y-2"
              variants={listAnimation}
            >
              {[
                "Identify, measure, and address the impact of tech debt.",
                "Control costs, integrate business processes, and streamline your operations.",
                "Design environments that reduce complexity and ensure effective implementation plans."
              ].map((item, index) => (
                <motion.li key={index} variants={itemAnimation}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="flex-1"
            variants={slideIn('left')}
          >
            <Image
              src="/enterprise.png"
              alt="business"
              width={539}
              height={396}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Section 3 & 4 follow the same pattern */}
        {/* Section 3 */}
        <motion.div 
          ref={section3Ref}
          className="relative flex flex-col lg:flex-row gap-8"
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex-1 space-y-4"
            variants={slideIn('left')}
          >
            <h1 className="h3">Digital business strategy and transformation</h1>
            <p>
              Align IT strategy and capabilities with business direction to help
              ensure your organization can perform at its best.
            </p>
            <motion.ul 
              className="list-disc pl-4 space-y-2"
              variants={listAnimation}
            >
              {[
                "Evaluate the current state, envision objectives, and map steps to get there.",
                "Enable a digital business strategy, streamlining people, processes, and technology.",
                "Improve customer experiences and generate business outcomes."
              ].map((item, index) => (
                <motion.li key={index} variants={itemAnimation}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="py-4"
              variants={fadeInUp}
            >
              <Button className="btn hover:scale-105 transition-transform duration-300">
                Boost Productivity And Profitability
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1"
            variants={slideIn('right')}
          >
            <Image
              src="/consultantLight.png"
              alt="business"
              width={539}
              height={396}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          ref={section4Ref}
          className="relative flex flex-col lg:flex-row gap-8"
          initial="hidden"
          animate={section4InView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex-1 space-y-4 order-first lg:order-last"
            variants={slideIn('right')}
          >
            <h1 className="h3">Digital business strategy and transformation</h1>
            <p>
              Align IT strategy and capabilities with business direction to help
              ensure your organization can perform at its best.
            </p>
            <motion.ul 
              className="list-disc pl-4 space-y-2"
              variants={listAnimation}
            >
              {[
                "Evaluate the current state, envision objectives, and map steps to get there.",
                "Enable a digital business strategy, streamlining people, processes, and technology.",
                "Improve customer experiences and generate business outcomes."
              ].map((item, index) => (
                <motion.li key={index} variants={itemAnimation}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="py-4"
              variants={fadeInUp}
            >
              <Button className="btn hover:scale-105 transition-transform duration-300">
                Boost Productivity And Profitability
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1"
            variants={slideIn('left')}
          >
            <Image
              src="/consultantIt.png"
              alt="business"
              width={539}
              height={396}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};