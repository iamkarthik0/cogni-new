"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StrategyHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:max-w-2/3 flex items-center flex-1 order-last lg:order-first">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/strategyHer.png"
                alt="strategy"
                width={467}
                height={501}
              />
            </motion.div>
          </div>

          <div className="flex-1 flex items-center">
            <div className="lg:space-y-8 p-8 lg:p-0 space-y-5">
          
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h1 lg:max-w-2xl"
              >
                Artificial Intelligence Strategy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="lg:max-w-xl"
              >
                Building roadmaps for the adoption and implementation of
                artificial intelligence & machine learning for global
                enterprises
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link href="/contact-us">
                  <Button className="btn my-4">REQUEST FOR PROPOSAL</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-24 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h2"
        >
          Artificial Intelligence & Machine Learning Strategy
        </motion.h1>

        <div className="flex flex-col lg:flex-row w-full overflow-hidden space-y-8 lg:space-y-0 lg:pt-24 ">
          <div className="space-y-3 lg:max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              At Cogninest AI, we specialize in partnering with businesses to
              craft tailored AI integration strategies that accelerate your
              digital transformation. Our AI integration services are designed
              to seamlessly blend cutting-edge AI technologies with your
              existing systems, whether it's software or a multi-platform
              application. By focusing on both short-term wins and long-term
              growth, we ensure that your organization reaps the full benefits
              of AI adoption. Our team of experts meticulously aligns AI
              solutions with your business processes, driving innovation and
              efficiency across the board.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              We empower stakeholders to take advantage of guided decision
              making and an aerial view of the effect, risks, possibilities, and
              limits in current systems by employing a comprehensive AI
              strategy. Decision-makers can collaborate with a reputable AI
              development company to fully realize the potential of technical
              advancement, including effective AI model deployment. Give us a
              call to talk about your requirements or to schedule a free AI
              strategy consultation with Cogninest AI.
            </motion.p>
          </div>

          <div className="md:translate-x-8 ">
            <div className=" p-10 lg:py-24  lg:pl-16  rounded-[23px] md:rounded-[52px] space-y-5 bg-[#D9D9D9] lg:translate-x-32 ">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h3 lg:max-w-xl"
              >
                Ready to discuss your requirements?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                Get in touch and let us know how can we help..
              </motion.p>
              <Button className="btn">
                Let's Start Discuss About Project{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyHero;
