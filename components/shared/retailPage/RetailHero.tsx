"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { useInView as useReactUseInView } from 'react-intersection-observer';

const RetailHero = () => {
  const [ref, inView] = useReactUseInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div >
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center lg:w-1/2 gap-6 py-8 lg:py-16  "
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              In a world where retail is evolving rapidly, understanding and anticipating customer behavior is key to success. 
            </motion.h1>
           <Button className='btn'>Learn More</Button>
        
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex justify-end items-center pt-6"
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden shadow-xl">
            <Image
              src="/retailHero.png"
              alt="Business professionals analyzing data"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RetailHero