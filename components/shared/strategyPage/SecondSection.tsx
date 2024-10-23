"use client"
import { motion } from "framer-motion";
import MediaCard from "@/components/layout/MediaCard";
import { Button } from "@/components/ui/button";
import { landingQuery } from "@/lib/query";
import { client } from "@/lib/sanity";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React, { useRef } from "react";

const SecondSection = () => {

  const card = [
    {
      heading: "AI DEVELOPMENT Services",
      paragraph:
        "We create artificial intelligence systems that are key players in both present and future technological advancements, providing insights for long-term expansion.",
    },
    {
      heading: "STRATEGY AND CONSULTING",
      paragraph:
        "We provide effective and validated AI strategies to establish a strong basis for your organizational structure. Speak with us right now...",
    },
    {
      heading: "AI APP DEVELOPMENT ",
      paragraph:
        "We provide cutting-edge AI-powered software development to your company to improve user experience and boost productivity. Our applications are easy to use and responsive.",
    },
    {
      heading: "CUSTOMIZATION",
      paragraph:
        "Our professionals create the greatest AI solutions for your company, seamlessly addressing organizational difficulties and meeting technological specifications.",
    },
    {
      heading: "IMPLEMENTATION",
      paragraph:
        "The Sky Potential team completes the functional plan of the project from inception to implementation and execution as a full-stack AI service provider.",
    },
    {
      heading: "INTEGRATION",
      paragraph:
        "We incorporate our clients' own AI technologies with their current systems, which are built on cutting-edge innovations like blockchain & IoT",
    },
   
    
  ];



  
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-1"
        >
          <Image alt="shape" src="/shapeProven.png" width={559} height={554} />
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-1 flex flex-col  justify-center space-y-6"
        >
          <h1 className="h3">Shape Your Proven AI Strategy</h1>
          <p className="subtle-text">
            At Cogninest AI, we strongly believe that Vertical AI Strategy has
            become a crucial element in today’s technology-driven businesses. By
            stepping into the revolutionary world of artificial intelligence and
            machine learning, we can truly improve the way organizations
            interact with customers. Work with our experienced AI Consultants to
            create the right strategy for your business and begin the journey
            towards growth and success...
          </p>
        </motion.div>
      </div>

      {/* ------------------------------------- */}

      <div className="pt-10 lg:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h2 text-center"
        >
          Best Services for Manufacturing
        </motion.h1>
        <div>
          <MediaCard services={{card}} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center pt-8 lg:pt-10"
        >
          <Button className="btn">Let's Start Discuss About Project</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondSection;
