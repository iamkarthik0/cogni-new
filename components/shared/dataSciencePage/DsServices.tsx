"use client"
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer

const ServiceCard = ({ paragraph, heading, image }:any) => {
  const [inView, setInView] = useState(false); // State to track if the component is in view
  const { ref, inView: isNowInView } = useInView({
    triggerOnce: true,
    onChange: (inView) => setInView(inView),
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-white overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={urlFor(image).url()}
          alt="heading"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="h4 mb-2">{heading}</h3>
        <p className="text-sm text-gray-600">{paragraph}</p>
      </div>
    </motion.div>
  );
};

const DsServices = (props:any) => {
  const { title, ServicesCard } = props.data;

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-center h2">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-24 gap-6">
        {ServicesCard.map((service:any, index:any) => (
          <ServiceCard
            key={index}
            image={service.image}
            heading={service.heading}
            paragraph={service.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default DsServices;
