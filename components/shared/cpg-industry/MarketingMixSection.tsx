"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useInView as useReactUseInView } from "react-intersection-observer";
import Link from "next/link";

const MarketingMixSection = (props: any) => {
  const features = [
    "Chatbot and Virtual Assistants",
    "Fraud Detection and Prevention",
    "Algorithmic Trading",
    "Maximize Revenue with Proactive Revenue Growth Management (RGM)",
    "Automated Financial Statements",
    "Market Simulation and Scenario Analyst",
    "Supply Chain and Inventory Management",
  ];

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
      className="bg-blue-50 px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Features list */}
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-gray-600  group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-black  flex-shrink-0" />
                  <span className="text-sm md:text-base leading-relaxed group-hover:text-black">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right side - Blue card */}
          <div className="lg:w-1/2">
            <Card className="bg-[#0766C2] text-white h-full py-10 rounded-[23px]">
              <CardContent className="p-6 lg:p-8 flex flex-col gap-6">
                <motion.p
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  Generative Al can simulate various market scenarios to test
                  investment strategies and assess potential risks. By creating
                  realistic financial models, institutions can better understand
                  market dynamics and make data-driven decisions.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Link href="/contact-us">
                    <Button
                      variant="secondary"
                      className="bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors"
                    >
                      LET'S TALK
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketingMixSection;
