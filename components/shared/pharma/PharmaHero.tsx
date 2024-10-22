"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const PharmaHero = () => {
  return (
    <>
      <AnimatedSection>
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:pt-8">
            <motion.p
              className="subtle-text font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI FOR PHARMA
            </motion.p>
            <motion.h1
              className="h1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              AI consultants for pharma
            </motion.h1>
            <motion.p
              className="subtle-text lg:w-3/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              AI is transforming healthcare, helping to speed up time to
              insights which can lead to better care outcomes and improved
              productivity and efficiency of care delivery.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact-us">
                <Button className="btn">CONSULT WITH AN AI EXPERT</Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2 flex justify-end items-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative w-full aspect-square h-[285px]">
              <Image src="/pharma-hero.png" alt="pharma" fill className="" />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/unlock.png"
              alt="unlock"
              width={610}
              height={100}
              className="aspect-square h-[400px] lg:h-[503px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Unlock the Potential of Healthcare AI
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Harness the power of AI to streamline and enhance the work of
                healthcare professionals by automating routine tasks with
                precision and efficiency. AI not only matches human accuracy but
                also accomplishes these tasks faster and at a significantly
                lower cost.
              </p>
              <p className="subtle-text">
                Implement AI in your healthcare, pharmaceutical, or life
                sciences business to uncover new connections within medical
                data, identify patterns and trends, detect anomalies, and
                predict outcomes with greater accuracy. Embrace AI to drive
                innovation and achieve better results in your organization.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <div className=" h1 text-center my-16">
        <h1>How we can help solve Healthcare problems</h1>
      </div>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/unlock.png"
              alt="unlock"
              width={610}
              height={100}
              className="aspect-square h-[400px] lg:h-[503px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Enhance Health Insurance Customer and Risk Profiling
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Accelerate the processing of health data to streamline
                onboarding for new customers.
              </p>
              <p className="subtle-text">
                Leverage Natural Language Processing (NLP) and Machine Learning
                to create a comprehensive view of clients' health by
                aggregating, cleaning, and analyzing historical patient data.
                This approach enables more accurate customer profiling and
                refined insurance risk assessment, helping you make informed
                decisions and improve service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2 "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/unlock.png"
              alt="unlock"
              width={610}
              height={100}
              className="aspect-square h-[400px] lg:h-[503px]"
            />
          </motion.div>
          <div className="order-first  lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Accelerate Medical Image and Clinical Trial Data Processing
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Streamline the processing of medical images, from X-Rays to CT
                Scans, by extracting critical features that can be used to train
                AI models. These models support early diagnosis and provide
                real-time assistance to physicians in operating or diagnostic
                settings.
              </p>
              <p className="subtle-text">
                Efficiently aggregate and automatically extract clinical trial
                data, including Statistical Analysis Plans and Tables, Figures,
                and Lists (TFLs) provided by laboratories. This approach enables
                you to quickly access the results you need, empowering you to
                make informed decisions faster.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 pt-16 lg:pt-20">
          <motion.div
            className="lg:w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/unlock.png"
              alt="unlock"
              width={610}
              height={100}
              className="aspect-square h-[400px] lg:h-[503px]"
            />
          </motion.div>
          <div className="order-first lg:order-last lg:w-1/2 space-y-4 lg:space-y-6 flex justify-center flex-col">
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Enhance Health Insurance Customer and Risk Profiling
            </motion.h1>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="subtle-text">
                Accelerate the processing of health data to streamline
                onboarding for new customers.
              </p>
              <p className="subtle-text">
                Leverage Natural Language Processing (NLP) and Machine Learning
                to create a comprehensive view of clients' health by
                aggregating, cleaning, and analyzing historical patient data.
                This approach enables more accurate customer profiling and
                refined insurance risk assessment, helping you make informed
                decisions and improve service delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="pt-16 lg:pt-20">
          <motion.h1
            className="h1 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Why Choose Cogninest AI?
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pt-10 lg:pt-14">
            <motion.div
              className="space-y-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-square h-[250px] w-full">
              <Image src="/pharma-choose.png" alt="pharma" fill />
              </div>
              <div className="space-y-6">
                <h4 className="font-bold">Knowledge</h4>
                <p>
                  At Cogninest AI, we are globally recognized data science
                  experts with a proven track record, boasting over 500
                  citations and patents. Our specialization spans Computational
                  Linguistics, Natural Language Processing (NLP), Machine
                  Learning, Deep Learning, and Data Analytics, ensuring we
                  deliver cutting-edge solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-square h-[250px] w-full">
              <Image src="/Healthtechnology.png" alt="pharma" fill />
                
              </div>
              <div className="space-y-6">
                <h4 className="font-bold">Technology</h4>
                <p>
                  We leverage the latest AI technologies, tools, and techniques
                  to help businesses rapidly onboard data at scale. By
                  harnessing diverse AI models and applications, we empower
                  organizations to gain actionable insights, enabling more
                  informed and strategic decision-making.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative aspect-square h-[250px] w-full">

              <Image src="/HealthPartnership.png" alt="pharma" fill />
            
              </div>
              <div className="space-y-6">
                <h4 className="font-bold">Partnership</h4>
                <p>
                  We work in partnership with our clients to ensure we find the
                  best solution to solve their impossible problem and drive
                  positive business outcomes that make a measurable impact on
                  performance, innovation and efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default PharmaHero;
