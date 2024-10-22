"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer

const DataEngineeringHero = () => {
  const [inView, setInView] = React.useState(false); // State to track if the component is in view
  const { ref, inView: isNowInView } = useInView({
    triggerOnce: true,
    onChange: (inView) => setInView(inView),
  });

  return (
    <div ref={ref}>
      {/* ---------------------------Hero Section--------------------- */}
      <div className=" w-full flex flex-col lg:flex-row ">
        <div className="flex flex-col   lg:w-1/2  gap-8 py-8 lg:pt-8">
          <div>
            <motion.h1 
              className=" h1 leading-[34px] lg:leading-[74px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Build scalable AI/ML platforms to discover better insights with
              diversified data engineering services
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/contact-us"><Button className="btn">Discuss your business case</Button></Link>
          </motion.div>
        </div>

        <div className=" lg:w-1/2  flex lg:justify-end lg:items-end">
          <div className="relative w-full  aspect-square   ">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/data-eng.png"
                alt="Person using computer with data visualizations"
                fill
                className=" rounded-none aspect-square "
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------------------------Section Second--------------------- */}
      <div className=" flex flex-col gap-8  pt-16 lg:pt-20">
          <div>
            <motion.h1 
              className=" h1 leading-[34px] lg:leading-[74px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Accelerate generation and adoption of actionable insights through
              mature data platforms leveraging our data engineering solutions
              and services
            </motion.h1>
          </div>

          <div className=" space-y-4 lg:space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Many enterprises face challenges in delivering timely insights due
              to various factors such as fragmented data platforms, lack of data
              trust, limited data knowledge, and insufficient compute resources.
              Robust data engineering services are essential for generating
              actionable insights and ensuring their effective adoption by
              business leaders.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              At Cogninest AI, our data engineering offerings encompass
              Advisory, Implementation, and Operation services, all designed to
              reduce the cost of ownership, avoid technical debt, and enhance
              long-term sustainability. We understand that data platforms are
              the backbone of quality insight delivery, and our services are
              geared towards building and optimizing these platforms to meet
              your business needs.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Our proprietary digital accelerators, combined with cloud data
              modernization, migration, and comprehensive data engineering
              services, significantly reduce time to value for our clients.
              These accelerators streamline all aspects of data operations,
              including data ingestion from various sources, provisioning
              insights, intelligent cataloging, ensuring data quality and trust,
              testing, and deployment. By leveraging AI/ML-based digital
              accelerators and strategic partnerships, we help you scale your
              data efforts, keeping pace with the demands of today&apos;s fast-moving
              business environment. Accelerate your data journey with Cogninest
              AI to achieve the speed, scale, and value your business needs.
            </motion.p>

            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
           <Link href="/contact-us">     <Button className="btn"> Make your data reliable now...</Button></Link>
              </motion.div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DataEngineeringHero;
