"use client"
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";

const DsHero = (props: any) => {
  const { heading, subheading, image, servicesImage, paragraph } = props.data;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-24 border-b-[1px] border-[#00AEEF] ">
      <div className=" lg:w-1/2 flex flex-col lg:justify-around  gap-24 lg:gap-0 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            {/* <h2 className="subtle-text py-4 ">{subheading}</h2> */}
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="subtle-text py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          </div>

          <div className="flex gap-6">
            {servicesImage.map((src: any, index: any) => (
              <motion.div
                key={index}
                className="w-10 h-10 relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                <Image
                  src={urlFor(src.image).url()}
                  alt={`Service ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="lg:w-1/2">
        <motion.div
          className="relative w-full aspect-square rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={urlFor(image).url()}
            alt="Person using computer with data visualizations"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DsHero;
