"use client"
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AiServiceCard = (props: any) => {
  const { paragraph, order, heading, img } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row justify-between items-center gap-6"
    >
      <motion.div
        className={`lg:w-1/2 flex flex-col gap-6 ${
          order == "first" ? "lg:order-first" : "lg:order-last"
        }`}
        initial={{ opacity: 0, x: order == "first" ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: order == "first" ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="h3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="subtle-text text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {paragraph}
        </motion.p>
      </motion.div>
      <motion.div
        className="lg:w-1/2 flex"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Image
          src={urlFor(img).url()}
          alt="Person using computer with data visualizations"
          width={539}
          height={340}
        />
      </motion.div>
    </motion.div>
  );
};

const GenerativeAiServices = (props: any) => {
  const { title, paragraph, ServicesCard } = props.data;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 flex flex-col pt-16 lg:pt-32 gap-12 lg:gap-20" ref={ref}>
      <motion.div
        className="flex flex-col gap-5 lg:gap-7"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="h2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="subtle-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {paragraph}
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-8 lg:gap-16">
        {ServicesCard.map((data: any, index: any) => (
          <AiServiceCard
            key={index}
            img={data.image}
            paragraph={data.paragraph}
            order={data.order}
            heading={data.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default GenerativeAiServices;
