"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const NextHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="max-w-screen-2xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-[200px] lg:h-[312px] aspect-square flex justify-center items-end">
          <div className="absolute z-10 space-y-5">
            <h1 className="h1 text-[#0055A7] text-center">
              Next-Gen Data Solutions
            </h1>
            <p className="max-w-2xl text-center font-semibold">
              Our Next-Gen Data Solutions help businesses make data driven
              decisions by unlocking valuable insights...
            </p>
            <div className="flex justify-center">
              <Button className="btn">Get In Touch ❯</Button>
            </div>
          </div>
          <Image src="/next-gen.png" alt="next gen" fill className="" />
        </div>
      </motion.div>
    </div>
  );
};

export default NextHero;
